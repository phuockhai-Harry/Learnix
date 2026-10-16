class AudioEngine {
  private context: AudioContext | null = null;

  private init() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.context.state === 'suspended') {
      this.context.resume();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1, delay: number = 0) {
    this.init();
    if (!this.context) return;

    const t = this.context.currentTime + delay;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);

    // Envelope
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start(t);
    osc.stop(t + duration);
  }

  playCorrectAnswer() {
    // A pleasant "ding" chord
    this.playTone(523.25, 'sine', 0.5, 0.1); // C5
    this.playTone(659.25, 'sine', 0.5, 0.1); // E5
  }

  playWrongAnswer() {
    // A soft, low thud
    this.playTone(150, 'triangle', 0.4, 0.1);
    this.playTone(100, 'triangle', 0.4, 0.1, 0.1);
  }

  playQuizComplete() {
    // Ascending arpeggio
    this.playTone(440, 'sine', 0.3, 0.1, 0);      // A4
    this.playTone(554.37, 'sine', 0.3, 0.1, 0.1); // C#5
    this.playTone(659.25, 'sine', 0.3, 0.1, 0.2); // E5
    this.playTone(880, 'sine', 0.6, 0.15, 0.3);   // A5
  }

  playBadgeUnlocked() {
    // Fanfare / High Score
    this.playTone(523.25, 'square', 0.2, 0.05, 0);      // C5
    this.playTone(523.25, 'square', 0.2, 0.05, 0.15);   // C5
    this.playTone(523.25, 'square', 0.2, 0.05, 0.3);    // C5
    this.playTone(659.25, 'square', 0.4, 0.05, 0.45);   // E5
    this.playTone(587.33, 'square', 0.2, 0.05, 0.7);    // D5
    this.playTone(783.99, 'square', 0.8, 0.08, 0.85);   // G5
  }

  playPomodoroComplete() {
    // Gentle melodic chime sequence for Pomodoro completion
    this.playTone(523.25, 'sine', 0.4, 0.12, 0);    // C5
    this.playTone(659.25, 'sine', 0.4, 0.12, 0.15); // E5
    this.playTone(783.99, 'sine', 0.5, 0.15, 0.3);  // G5
    this.playTone(1046.5, 'sine', 0.8, 0.18, 0.45); // C6
  }
}

export const audio = new AudioEngine();
