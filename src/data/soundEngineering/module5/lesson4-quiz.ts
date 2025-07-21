
import type { QuizLesson } from '@/types/course';

export const lesson4Quiz: QuizLesson = {
  id: 19,
  title: 'Gain Staging Quiz',
  duration: '30 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary goal of gain staging in audio production?',
        options: [
          'To make everything as loud as possible',
          'To create automatic volume fades',
          'To manage signal levels to avoid distortion and noise',
          'To automate EQ changes'
        ],
        correct: 2,
        explanation: 'Gain staging is about managing signal levels throughout the chain to maintain optimal levels without distortion or noise.'
      },
      {
        question: 'Which of the following is NOT a typical stage in the gain staging signal flow?',
        options: [
          'Preamp',
          'Insert Effects',
          'MIDI Channel Strip',
          'Master Bus'
        ],
        correct: 2,
        explanation: 'MIDI channels don\'t carry audio signals, so they\'re not part of the audio gain staging flow.'
      },
      {
        question: 'What does "headroom" refer to in the context of gain staging?',
        options: [
          'The physical space above your mixing console',
          'Space between your peak level and 0 dBFS to avoid clipping',
          'The frequency range above 10kHz',
          'The amount of reverb in a mix'
        ],
        correct: 1,
        explanation: 'Headroom is the available space between your signal peaks and the maximum level (0 dBFS) before clipping occurs.'
      },
      {
        question: 'If you record too quietly and boost the level later, what issue are you most likely to introduce?',
        options: [
          'Clipping',
          'Phase Cancellation',
          'Noise',
          'Widening'
        ],
        correct: 2,
        explanation: 'Recording too quietly means you\'ll need to boost the signal later, which also amplifies the noise floor.'
      },
      {
        question: 'Which tool would you use to measure perceived loudness instead of just peak level?',
        options: [
          'Peak Meter',
          'VU Meter',
          'LUFS Meter',
          'Clipping Analyzer'
        ],
        correct: 2,
        explanation: 'LUFS (Loudness Units relative to Full Scale) meters measure perceived loudness, which is more relevant for streaming and broadcast standards.'
      },
      {
        question: 'True or False: Gain affects the signal before processing, while volume affects the signal after processing.',
        options: [
          'True',
          'False'
        ],
        correct: 0,
        explanation: 'Correct! Gain is the input level that feeds into processors, while volume (fader) controls the output level after processing.'
      },
      {
        question: 'What is the ideal recording level range for digital audio?',
        options: [
          '0 dBFS to -6 dBFS',
          '-18 dBFS to -12 dBFS',
          '-6 dBFS to 0 dBFS',
          '-24 dBFS to -18 dBFS'
        ],
        correct: 1,
        explanation: 'Recording between -18 dBFS and -12 dBFS provides good signal-to-noise ratio while leaving adequate headroom.'
      },
      {
        question: 'Which of the following is a best practice for gain staging?',
        options: [
          'Apply a compressor first, then adjust clip gain',
          'Boost everything with the fader',
          'Normalize clips, adjust plugin levels, and check meters',
          'Skip metering and mix by ear only'
        ],
        correct: 2,
        explanation: 'Proper gain staging involves normalizing clips, managing plugin input/output levels, and using meters to monitor the signal chain.'
      }
    ]
  }
};
