import React, { useMemo } from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MathMarkdownProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * Ensures LaTeX formulas (like \frac{a}{b}, \sqrt{x}, \times, etc.) 
 * that are missing surrounding dollar signs are properly wrapped so KaTeX renders them.
 */
function normalizeMathExpressions(text: string): string {
  if (!text) return '';

  // If text already has properly enclosed $...$ or $$...$$, preserve them.
  // Look for bare LaTeX commands like \frac{...}{...} not preceded by $ and not followed by $
  let res = text.replace(/(?<!\$)\\frac\{([^{}]+)\}\{([^{}]+)\}(?!\$)/g, (_match, num, den) => {
    return `$\\frac{${num}}{${den}}$`;
  });

  // Also catch bare \sqrt{...} not inside $...$
  res = res.replace(/(?<!\$)\\sqrt\{([^{}]+)\}(?!\$)/g, (_match, inner) => {
    return `$\\sqrt{${inner}}$`;
  });

  return res;
}

export const MathMarkdown: React.FC<MathMarkdownProps> = ({ content, className = '', inline = false }) => {
  const processedContent = useMemo(() => {
    return normalizeMathExpressions(content);
  }, [content]);

  if (inline) {
    return (
      <span className={`inline-math-markdown inline-flex items-center flex-wrap gap-1 ${className}`}>
        <Markdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p: ({ children }) => <span className="inline">{children}</span>
          }}
        >
          {processedContent}
        </Markdown>
      </span>
    );
  }

  return (
    <div className={`math-markdown overflow-x-auto ${className}`}>
      <Markdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {processedContent}
      </Markdown>
    </div>
  );
};

export default MathMarkdown;
