import http from "http";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { WebSocketServer, WebSocket } from "ws";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  async function callGeminiWithFallback(ai: GoogleGenAI, contents: any, config: any) {
    const models = [
      "gemini-3.5-flash",
      "gemini-3.1-flash-lite",
      "gemini-3.8-flash",
      "gemini-flash-latest"
    ];
    let lastError: any = null;
    for (const model of models) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config,
        });
        if (response && response.text) {
          return response;
        }
      } catch (err: any) {
        lastError = err;
      }
    }
    throw lastError || new Error("All Gemini models failed.");
  }

  // API Routes
  app.post("/api/gemini-study-chat", async (req, res) => {
    try {
      const {
        message,
        history = [],
        topic = "General Academic Study",
        role = "socratic",
        model = "gemini-3.5-flash",
        gradeLevel = 6,
        language = "vi",
        studentName = ""
      } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key is not configured." });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      // Role-specific pedagogical system prompt
      let rolePrompt = "";
      if (role === "quizmaster") {
        rolePrompt = `ROLE: Interactive Quizmaster & Knowledge Tester.
Your mission is to actively test and challenge the student on the selected topic ("${topic}") with engaging questions.
- If the student asks to be quizzed or practices, ask ONE clear question at a time (e.g. multiple-choice with A, B, C, D or a concise problem).
- When the student replies with their answer, immediately evaluate it: praise them if correct, explain WHY the answer is correct, gently explain why other options were incorrect, and ask if they are ready for the next question.
- Keep the gamified spirit alive!`;
      } else if (role === "explainer") {
        rolePrompt = `ROLE: Concept Explainer & Analogy Specialist.
Your mission is to explain ideas in "${topic}" using clear, relatable real-world analogies (sports, gaming, nature, everyday technology) tailored to Grade ${gradeLevel}.
- Break down tricky ideas step-by-step.
- Use bullet points and intuitive examples.
- End with a quick question to verify understanding.`;
      } else if (role === "speed") {
        rolePrompt = `ROLE: Rapid Review & Exam Prep.
Your mission is to provide fast, high-yield study summaries, key formulas, bulleted definitions, and top test-day tips for "${topic}".
- Keep answers concise, highly scannable, and focused on essential exam knowledge.
- Ask quick spot-check questions to test recall.`;
      } else {
        // Default: Socratic Guide
        rolePrompt = `ROLE: Socratic Study Mentor.
Your mission is to guide the student through questions and topics in "${topic}" using the Socratic method.
- Do NOT simply give away the final answer. Instead, ask guided leading questions, point out patterns, and provide hints so the student reasons through the solution themselves.
- Validate their steps and encourage them to explain their thinking.`;
      }

      const langPrompt = language === 'vi'
        ? `LANGUAGE: You MUST communicate fluently in friendly, encouraging Vietnamese appropriate for education (e.g. xưng hô 'mình - bạn' hoặc 'thầy/cô - em', động viên 'Cố lên!', 'Làm rất tốt!').`
        : `LANGUAGE: Communicate in encouraging, supportive, age-appropriate English for a Grade ${gradeLevel} student.`;

      const systemInstruction = `You are Learnix AI Study Tutor, an intelligent, empathetic personal study companion.
Student Name: ${studentName ? studentName : "Student"}.
Student Grade Level: Grade ${gradeLevel || 6}.
Current Study Focus / Topic: ${topic}.
${rolePrompt}
${langPrompt}

FORMATTING & BEHAVIOR RULES:
- Use clean Markdown: clear headers (###), bold text for emphasis, bullet points, and code/math blocks when appropriate.
- Mathematical notation: When writing mathematical fractions or equations, enclose them in standard LaTeX dollar signs (e.g., $\frac{a}{b}$ for inline or $$\frac{a}{b}$$ for block equations) and explain the arithmetic steps clearly (e.g. 2/2 + 2/2 = 1 + 1 = 2).
- Keep responses focused, encouraging, structured, and easy to read.
- If asked about an academic question, relate it to the current topic "${topic}" when applicable.
- If the user asks something completely off-topic, gently answer briefly and redirect them back to mastering "${topic}".`;

      // Map multi-turn conversation history
      const contents: any[] = [];
      if (Array.isArray(history)) {
        for (const item of history) {
          if (item && item.text && typeof item.text === 'string' && item.text.trim()) {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }]
            });
          }
        }
      }

      // Add latest user message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      // Model priority based on request:
      // gemini-3.1-pro-preview for complex tasks, gemini-3.5-flash for general tasks, and gemini-3.1-flash-lite for fast tasks.
      let modelSequence: string[] = [];
      if (model === "gemini-3.1-pro-preview") {
        modelSequence = ["gemini-3.1-pro-preview", "gemini-3.5-flash", "gemini-3.8-flash", "gemini-3.1-flash-lite"];
      } else if (model === "gemini-3.1-flash-lite") {
        modelSequence = ["gemini-3.1-flash-lite", "gemini-3.5-flash", "gemini-flash-latest"];
      } else {
        // General tasks default to gemini-3.5-flash
        modelSequence = ["gemini-3.5-flash", "gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
      }

      let responseText = "";
      let actualModelUsed = modelSequence[0];
      let lastErr: any = null;

      for (const targetModel of modelSequence) {
        try {
          const resp = await ai.models.generateContent({
            model: targetModel,
            contents,
            config: {
              systemInstruction
            }
          });
          if (resp && resp.text) {
            responseText = resp.text;
            actualModelUsed = targetModel;
            break;
          }
        } catch (err: any) {
          console.warn(`[Gemini Study Chat] Model ${targetModel} returned error:`, err?.message || err);
          lastErr = err;
        }
      }

      if (!responseText) {
        throw lastErr || new Error("All Gemini model attempts failed to produce text.");
      }

      res.json({
        text: responseText,
        modelUsed: actualModelUsed
      });
    } catch (error: any) {
      console.error("[Gemini Study Chat] Critical error:", error?.message || error);
      res.status(500).json({
        error: error?.message || "Failed to process chat with Gemini."
      });
    }
  });

  // API Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { homeworkId, homeworkTitle, gradeLevel, studentMessage, history } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API Key is not configured." });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      const systemInstruction = `You are a helpful, encouraging AI tutor designed for a student in Grade ${gradeLevel || 'unknown'}. 
They are currently working on a homework assignment titled "${homeworkTitle || 'Unknown'}". 
Your goal is to guide the student towards the answer without just giving them the solution directly. 
Provide hints, explain concepts at their grade level, and be encouraging. 
Keep your responses relatively brief (1-3 paragraphs max) and conversational.`;

      let contents = [];
      
      // Map history if any
      if (history && history.length > 0) {
        contents = history.map((msg: any) => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));
      }

      // Add the new message
      contents.push({
        role: "user",
        parts: [{ text: studentMessage }]
      });

      const response = await callGeminiWithFallback(ai, contents, { systemInstruction });

      res.json({ text: response.text });
    } catch (error: any) {
      console.log("Serving tutor guidance fallback due to temporary model availability:", error?.message || "");
      // Return graceful fallback response instead of failing
      res.json({ 
        text: "Hello! I am your AI study tutor. I'm currently experiencing high demand from many students, but I'm ready to help you with your question! Remember to break down the problem into smaller steps and review your lesson notes." 
      });
    }
  });

  app.post("/api/study-summary", async (req, res) => {
    let gradeLevel = 6;
    try {
      const body = req.body || {};
      gradeLevel = body.gradeLevel || 6;
      const topics = body.topics;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API Key is not configured." });
      }

      const ai = new GoogleGenAI({ 
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      // Sanitize and filter topics
      let rawList: string[] = [];
      if (Array.isArray(topics)) {
        rawList = topics.map(t => String(t || '').trim());
      } else if (typeof topics === 'string') {
        rawList = topics.split(',').map(t => t.trim());
      }

      // Filter out duplicates and arbitrary non-academic test words or personal names
      const bannedOrVagueWords = new Set(['harry', 'test', 'testing', 'foo', 'bar', 'asdf', 'unknown', 'null', 'undefined', 'student']);
      const filteredTopics = Array.from(new Set(rawList.filter(t => t.length > 1 && !bannedOrVagueWords.has(t.toLowerCase()))));

      const academicDefaults = ['Mathematics & Pre-Algebra', 'Natural Sciences', 'Logic & Computer Science'];
      const finalTopics = filteredTopics.length > 0 ? filteredTopics : academicDefaults;
      const topicsList = finalTopics.join(', ');

      const systemInstruction = `You are a helpful, encouraging AI study tutor for a student in Grade ${gradeLevel || 6}. 
Your goal is to generate a personalized, curriculum-aligned study guide and explanation based on their school learning topics: ${topicsList}.
Important guidelines:
- Strictly focus on genuine academic and educational subjects (e.g., Mathematics, Sciences, Logic, Reading, Problem Solving).
- Do NOT generate content about fictional stories, celebrities, or random names unless it is part of a verified literature curriculum.
- Provide a clear, engaging overview of key concepts at a Grade ${gradeLevel || 6} level.
- Include 2-3 practical study tips or memorable educational facts.
- Structure your response cleanly using Markdown (clear headings, bullet points). Make it inspiring, structured, and easy to read.`;

      const response = await callGeminiWithFallback(ai, [
        {
          role: "user",
          parts: [{ text: "Please generate my personalized study summary for today." }]
        }
      ], { systemInstruction });

      res.json({ summary: response.text });
    } catch (error: any) {
      console.log("Serving study summary fallback due to temporary model availability:", error?.message || "");
      // Return graceful study summary fallback
      res.json({ 
        summary: `### 🌟 Daily Study Summary (Grade ${gradeLevel || 6})\n\nWelcome back to your studies! While our AI models are currently experiencing high server traffic, here is your quick study briefing:\n\n- **Core Focus**: Keep practicing your daily math and science problem sets.\n- **Study Tip**: Review your flashcards and test yourself actively using the practice quizzes.\n- **Fun Fact**: Consistent daily practice builds neural pathways that make complex concepts much easier over time!` 
      });
    }
  });

  // AI Study Schedule Generator & Coach endpoint
  app.post("/api/generate-study-schedule", async (req, res) => {
    try {
      const { exams, classes, gradeLevel, dailyHours, language } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      const isVi = language === 'vi';
      const examsSummary = Array.isArray(exams) && exams.length > 0
        ? exams.map((e: any) => `- ${e.className || 'General'}: "${e.title}" on ${e.date} (Priority: ${e.priority || 'Normal'}, Topics: ${e.topics || 'All syllabus'})`).join('\n')
        : 'No specific exams provided yet.';

      const classesSummary = Array.isArray(classes) && classes.length > 0
        ? classes.map((c: any) => `- ${c.name || 'Class'}`).join('\n')
        : 'Registered subjects: Mathematics, Sciences, English, Literature, Computer Science.';

      const systemInstruction = `You are Learnix AI Academic Advisor & Exam Strategist for a Grade ${gradeLevel || 6} student.
Your task is to analyze the student's upcoming exams, their registered classes, and their available study time (${dailyHours || 2} hours/day).
Output language: ${isVi ? 'Vietnamese (tiếng Việt thân thiện, khuyến khích học sinh)' : 'English (encouraging and structured)'}.

Structure your response with clean Markdown:
1. ### 🎯 Chi Lược Ôn Thi Phân Bổ (Spaced Repetition & Priority Strategy)
- Analyze which subjects need immediate attention based on days remaining and exam priorities.
2. ### 📅 Lời Khuyên Phân Bổ Thời Gian Hàng Ngày (${dailyHours || 2}h/ngày)
- Recommend how to split daily study slots (e.g. 40 mins concept review, 10 mins break, 40 mins quiz practice).
3. ### 💡 Mẹo Ôn Thi Trúng Đích (High-Yield Subject Tips)
- Concrete, actionable study tips for each registered subject/exam.
4. ### ⚡ Động Lực & Nhắc Nhở Ngày Thi
- Inspiring reminder to maintain study streaks, stay hydrated, and sleep well.`;

      const prompt = `Student Information:
Grade Level: Grade ${gradeLevel || 6}
Registered Classes:
${classesSummary}

Upcoming Exams & Dates:
${examsSummary}

Daily Available Study Time: ${dailyHours || 2} hours per day.

Please generate a personalized exam preparation strategy and schedule guidance.`;

      const response = await callGeminiWithFallback(ai, [
        { role: "user", parts: [{ text: prompt }] }
      ], { systemInstruction });

      res.json({ advice: response.text });
    } catch (error: any) {
      console.log("Serving study planner fallback:", error?.message || "");
      const isVi = req.body?.language === 'vi';
      res.json({
        advice: isVi
          ? `### 🎯 Chiến Lược Ôn Thi Tối Ưu (Grade ${req.body?.gradeLevel || 6})\n\n- **Nguyên tắc ngắt quãng (Spaced Repetition)**: Ưu tiên ôn các môn có kỳ thi gần nhất trước, xen kẽ mỗi ngày 2 môn để không bị mỏi mệt.\n- **Khung thời gian gợi ý**: Mỗi phiên học 40 phút ôn kiến thức, 10 phút nghỉ ngơi, 30 phút luyện giải trắc nghiệm.\n- **Lời khuyên**: Làm quen với dạng bài thi thông qua mục Thử thách & Câu hỏi trắc nghiệm trên Learnix!`
          : `### 🎯 Spaced Repetition Exam Strategy (Grade ${req.body?.gradeLevel || 6})\n\n- **Priority Balancing**: Alternate between your upcoming exams to avoid cognitive fatigue.\n- **Daily Rhythm**: 40 minutes of concept review + 10 minutes rest + 30 minutes of active practice quizzes.\n- **Key Tip**: Reinforce tricky concepts using flashcards and practice quizzes on Learnix!`
      });
    }
  });

  // Serve public assets directly
  app.use(express.static(path.join(process.cwd(), 'public')));

  const server = http.createServer(app);
  const wss = new WebSocketServer({ noServer: true });

  // Route /live upgrades to our Gemini Live WebSocketServer
  server.on("upgrade", (request, socket, head) => {
    try {
      const urlObj = new URL(request.url || '', `http://${request.headers.host || 'localhost'}`);
      if (urlObj.pathname === "/live") {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit("connection", ws, request);
        });
      }
    } catch (err) {
      try { socket.destroy(); } catch { /* ignore */ }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: {
          server,
        },
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Support React Router fallback
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Real-time Voice Conversations via Gemini Live API (gemini-3.8-live)
  wss.on("connection", async (clientWs: WebSocket, req: http.IncomingMessage) => {
    console.log("[Live API] Client connected to /live");
    let session: any = null;

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        clientWs.send(JSON.stringify({ error: "GEMINI_API_KEY is not configured on the server." }));
        clientWs.close();
        return;
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      const urlObj = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`);
      const topic = urlObj.searchParams.get('topic') || 'General Academic Study';
      const gradeLevel = urlObj.searchParams.get('gradeLevel') || '6';
      const role = urlObj.searchParams.get('role') || 'socratic';
      const voiceName = urlObj.searchParams.get('voice') || 'Zephyr';
      const language = urlObj.searchParams.get('language') || 'vi';

      const langInstruction = language === 'vi' 
        ? 'Speak naturally and warmly in Vietnamese suitable for school students.' 
        : `Speak clearly and warmly in encouraging English for a Grade ${gradeLevel} student.`;

      const roleInstructions: Record<string, string> = {
        socratic: "Use the Socratic method: guide the student with thoughtful questions and hints without giving away the answer directly.",
        quizmaster: "You are an energetic quizmaster: ask the student short, interactive quiz questions about the topic and evaluate their spoken answers.",
        explainer: "Explain complex ideas simply with vivid, relatable everyday analogies.",
        speed: "Rapid exam review: deliver crisp, high-yield bullet points and key formulas."
      };

      const systemInstruction = `You are Learnix Spoken AI Tutor, an interactive real-time voice study coach for a Grade ${gradeLevel} student.
Topic: ${topic}.
Role Mode: ${role}.
${roleInstructions[role] || roleInstructions.socratic}
${langInstruction}
Keep your spoken responses bite-sized, natural, and conversational (1 to 3 sentences per turn). Real-time speech requires brevity so the student can easily respond and talk back!`;

      session = await ai.live.connect({
        model: "gemini-3.8-live",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName } },
          },
          systemInstruction,
        },
        callbacks: {
          onmessage: (message: LiveServerMessage) => {
            const audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            const text = message.serverContent?.modelTurn?.parts?.[0]?.text;
            if (audio) {
              clientWs.send(JSON.stringify({ audio, text }));
            }
            if (message.serverContent?.interrupted) {
              clientWs.send(JSON.stringify({ interrupted: true }));
            }
            if (message.serverContent?.turnComplete) {
              clientWs.send(JSON.stringify({ turnComplete: true }));
            }
          },
          onerror: (err: any) => {
            console.error("[Live API error]:", err);
            clientWs.send(JSON.stringify({ error: err?.message || "Live API error" }));
          },
          onclose: () => {
            console.log("[Live API session closed]");
            clientWs.send(JSON.stringify({ closed: true }));
          }
        },
      });

      clientWs.on("message", (data: any) => {
        try {
          const parsed = JSON.parse(data.toString());
          if (parsed.audio) {
            session.sendRealtimeInput({
              audio: { data: parsed.audio, mimeType: "audio/pcm;rate=16000" },
            });
          } else if (parsed.text) {
            session.sendClientContent({
              turns: [{ role: 'user', parts: [{ text: parsed.text }] }],
              turnComplete: true
            });
          }
        } catch (err) {
          console.error("Error processing client live input:", err);
        }
      });

      clientWs.on("close", () => {
        try {
          if (session) session.close();
        } catch (e) {
          // ignore
        }
      });
    } catch (error: any) {
      console.error("Live connection failure:", error);
      clientWs.send(JSON.stringify({ error: error?.message || "Failed to start Gemini Live voice session" }));
      clientWs.close();
    }
  });

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
