
import type { QuizLesson } from '@/types/course';

export const lesson12Quiz: QuizLesson = {
  id: 12,
  title: 'Module 2 Quiz: Essential Tools and ESD Safety',
  duration: '15 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'Which tool is used to remove small screws in laptops and desktops?',
        options: [
          'Tweezers',
          'Precision screwdriver set',
          'Spudger',
          'Magnetic mat'
        ],
        correct: 1,
        explanation: 'A precision screwdriver set contains various small screwdrivers (Phillips, Torx, flathead) specifically designed for small screws found in electronic devices.'
      },
      {
        question: 'What is the main function of a plastic pry tool or spudger?',
        options: [
          'Cut wires',
          'Hold components',
          'Open plastic casings without damage',
          'Measure voltage'
        ],
        correct: 2,
        explanation: 'Plastic pry tools or spudgers are specifically designed to safely separate plastic casings without scratching or damaging the surfaces.'
      },
      {
        question: 'What is the purpose of using an anti-static wrist strap?',
        options: [
          'Prevent cuts during disassembly',
          'Stabilize the motherboard',
          'Protect components from electrostatic discharge',
          'Prevent overheating'
        ],
        correct: 2,
        explanation: 'Anti-static wrist straps ground your body to prevent electrostatic discharge (ESD) which can damage sensitive electronic components.'
      },
      {
        question: 'Which tool is best for organizing small screws during disassembly?',
        options: [
          'Compressed air',
          'Brush',
          'Magnetic mat or screw tray',
          'Isopropyl alcohol'
        ],
        correct: 2,
        explanation: 'Magnetic mats or screw trays are specifically designed to keep small screws organized and prevent them from getting lost during disassembly.'
      },
      {
        question: 'Which cleaning agent is safe and effective for removing thermal paste?',
        options: [
          'Water',
          'WD-40',
          'Isopropyl alcohol (90% or higher)',
          'Glass cleaner'
        ],
        correct: 2,
        explanation: 'Isopropyl alcohol at 90% concentration or higher is safe for electronics and effectively removes thermal paste without leaving residue.'
      },
      {
        question: 'When should thermal paste be applied?',
        options: [
          'Before cleaning dust from a fan',
          'Between CPU/GPU and heat sink during reassembly',
          'On the motherboard traces',
          'To lubricate a fan'
        ],
        correct: 1,
        explanation: 'Thermal paste should be applied between the CPU/GPU and heat sink during reassembly to ensure efficient heat transfer.'
      },
      {
        question: 'Which of the following can generate static electricity?',
        options: [
          'Metal tables',
          'Cotton clothing',
          'Plastic or foam packaging',
          'Ceramic flooring'
        ],
        correct: 2,
        explanation: 'Plastic and foam packaging materials can build up static electricity, which is why components should be stored in anti-static bags.'
      },
      {
        question: 'What is the function of a multimeter during computer repair?',
        options: [
          'Cooling the CPU',
          'Removing screws',
          'Measuring voltage, continuity, and resistance',
          'Displaying BIOS settings'
        ],
        correct: 2,
        explanation: 'A multimeter is used to measure electrical properties like voltage, continuity, and resistance for diagnostic purposes.'
      },
      {
        question: 'What is a safe way to handle RAM or GPU components?',
        options: [
          'By the contacts',
          'By the edges',
          'Using bare hands on the pins',
          'Wearing rubber gloves'
        ],
        correct: 1,
        explanation: 'Components should be handled by their edges to avoid touching sensitive contacts, pins, or circuits that could be damaged by oils or ESD.'
      },
      {
        question: 'Which is NOT an ESD-safe practice?',
        options: [
          'Using an anti-static mat',
          'Wearing synthetic clothes',
          'Grounding yourself before touching components',
          'Storing parts in anti-static bags'
        ],
        correct: 1,
        explanation: 'Wearing synthetic clothes can generate static electricity. Cotton clothing is preferred for ESD-safe practices.'
      }
    ]
  }
};
