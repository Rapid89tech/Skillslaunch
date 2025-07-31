import { QuizLesson } from '@/types/course';

export const lesson4Quiz: QuizLesson = {
  id: 4,
  title: 'Quiz: Audio Editing Essentials',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'Which editing tool is best for beginners on a budget?',
        options: [
          'Adobe Audition',
          'Audacity',
          'Descript',
          'Pro Tools'
        ],
        correct: 1,
        explanation: 'Audacity is the best choice for beginners on a budget because it\'s free, open-source, and offers robust editing tools without the cost of premium software.'
      },
      {
        question: 'What is the primary purpose of podcast editing?',
        options: [
          'To make episodes longer',
          'To remove mistakes, pauses, filler words, and tangents',
          'To add more music',
          'To change the topic completely'
        ],
        correct: 1,
        explanation: 'The primary purpose of podcast editing is to polish raw audio by removing mistakes, retakes, long pauses, filler words, and off-topic tangents to ensure a professional, engaging episode.'
      },
      {
        question: 'What is the recommended loudness target for stereo podcasts?',
        options: [
          '-12 LUFS',
          '-16 LUFS',
          '-20 LUFS',
          '-24 LUFS'
        ],
        correct: 1,
        explanation: 'The recommended loudness target for stereo podcasts is -16 LUFS, which ensures consistent playback across platforms like Spotify and Apple Podcasts.'
      },
      {
        question: 'Which feature allows you to edit audio by deleting text in Descript?',
        options: [
          'Auto-transcription',
          'Voice cloning',
          'Spectral editing',
          'Waveform editing'
        ],
        correct: 0,
        explanation: 'Descript\'s auto-transcription feature converts audio to text, allowing you to edit by deleting words from the transcript, which instantly removes the corresponding audio.'
      },
      {
        question: 'What is the purpose of noise reduction in podcast editing?',
        options: [
          'To make voices louder',
          'To eliminate room hums, fan noise, and background chatter',
          'To add music',
          'To change the recording speed'
        ],
        correct: 1,
        explanation: 'Noise reduction aims to eliminate distracting sounds like room hums, static, fan or air conditioning noise, and background chatter to create a clean, professional listening experience.'
      },
      {
        question: 'Which editing tool offers the most advanced features for professional podcast production?',
        options: [
          'Audacity',
          'Descript',
          'Adobe Audition',
          'GarageBand'
        ],
        correct: 2,
        explanation: 'Adobe Audition offers the most advanced features for professional podcast production, including spectral editing, advanced noise reduction, and precise multitrack control.'
      },
      {
        question: 'What is the purpose of compression in audio editing?',
        options: [
          'To make files smaller',
          'To even out loud and soft parts, smoothing dynamic voices',
          'To add echo effects',
          'To change the pitch'
        ],
        correct: 1,
        explanation: 'Compression evens out loud and soft parts, smoothing dynamic voices in interviews and creating more consistent audio levels throughout the episode.'
      },
      {
        question: 'Which music licensing option allows unlimited use after a one-time purchase?',
        options: [
          'Creative Commons',
          'Royalty-free music',
          'Commercial licensing',
          'Public domain'
        ],
        correct: 1,
        explanation: 'Royalty-free music allows unlimited use after a one-time purchase, making it ideal for podcasters who need consistent music across multiple episodes.'
      },
      {
        question: 'What is the recommended bit rate for music-heavy podcast content?',
        options: [
          '64 kbps',
          '128 kbps',
          '192 kbps',
          '320 kbps'
        ],
        correct: 2,
        explanation: '192 kbps is recommended for music-heavy podcast content as it provides excellent quality while maintaining reasonable file sizes for distribution.'
      },
      {
        question: 'What is the purpose of ducking in music integration?',
        options: [
          'To make music louder',
          'To automatically lower music volume when dialogue is present',
          'To change the music tempo',
          'To add reverb effects'
        ],
        correct: 1,
        explanation: 'Ducking automatically lowers music volume when dialogue is present, then raises it during pauses, ensuring dialogue remains clear while music enhances the listening experience.'
      }
    ]
  }
}; 