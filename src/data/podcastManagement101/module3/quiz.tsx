import type { Quiz } from '@/types/course';

export const module3Quiz: Quiz = {
  id: 14,
  title: 'Module 3 Quiz: Recording & Production Workflow',
  duration: '15 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the most important factor in podcast audio quality?',
        options: [
          'Video quality',
          'Microphone quality',
          'Background music',
          'Episode length'
        ],
        correct: 1,
        explanation: 'Microphone quality is the most important factor in podcast audio quality.'
      },
      {
        question: 'Which microphone type is best for untreated rooms and budget setups?',
        options: [
          'Condenser microphone',
          'Dynamic microphone',
          'Ribbon microphone',
          'Lavalier microphone'
        ],
        correct: 1,
        explanation: 'Dynamic microphones are durable and isolate voice well, making them ideal for untreated rooms and budget setups.'
      },
      {
        question: 'What is the purpose of an audio interface for XLR microphones?',
        options: [
          'To make the microphone wireless',
          'To convert analog signals to digital',
          'To add special effects',
          'To increase microphone volume'
        ],
        correct: 1,
        explanation: 'Audio interfaces convert analog signals from XLR microphones to digital for computer recording.'
      },
      {
        question: 'Which recording software is free and available on Windows, Mac, and Linux?',
        options: [
          'GarageBand',
          'Adobe Audition',
          'Audacity',
          'Reaper'
        ],
        correct: 2,
        explanation: 'Audacity is a free, open-source audio editor available on Windows, Mac, and Linux.'
      },
      {
        question: 'What is the main advantage of closed-back headphones for podcasting?',
        options: [
          'They are cheaper',
          'They prevent echo and bleed',
          'They have better bass',
          'They are wireless'
        ],
        correct: 1,
        explanation: 'Closed-back headphones prevent echo and bleed, allowing clean recordings without audio leakage.'
      },
      {
        question: 'Which remote recording platform offers local HD recording?',
        options: [
          'Zoom',
          'Riverside.fm',
          'Skype',
          'Google Meet'
        ],
        correct: 1,
        explanation: 'Riverside.fm offers local HD recording of uncompressed audio and video for each participant.'
      },
      {
        question: 'What is the recommended audio format for podcast recording?',
        options: [
          'MP3 at 128 kbps',
          'WAV at 44.1 kHz/16-bit',
          'AAC at 256 kbps',
          'FLAC at 48 kHz/24-bit'
        ],
        correct: 1,
        explanation: 'WAV at 44.1 kHz/16-bit is the industry standard for podcast recording, providing high quality and compatibility.'
      },
      {
        question: 'What accessory helps reduce plosive sounds in podcast recording?',
        options: [
          'Mic stand',
          'Pop filter',
          'Acoustic foam',
          'Headphones'
        ],
        correct: 1,
        explanation: 'Pop filters or windscreens reduce plosive sounds caused by air bursts from letters like "p" and "b".'
      },
      {
        question: 'Which factor should you consider when choosing podcasting tools?',
        options: [
          'Only the price',
          'Only the brand name',
          'Your workflow and skill level',
          'Only the latest technology'
        ],
        correct: 2,
        explanation: 'You should match tools to your workflow and skill level to ensure efficiency and avoid unnecessary complexity.'
      },
      {
        question: 'What is the best practice for file naming in podcasting?',
        options: [
          'Use random names',
          'Use consistent naming like ep01-guestname-topic.mp3',
          'Use only numbers',
          'Use only the date'
        ],
        correct: 1,
        explanation: 'Consistent naming conventions like ep01-guestname-topic.mp3 streamline organization and enhance professionalism.'
      }
    ]
  }
}; 
