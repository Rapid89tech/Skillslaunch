import React from 'react';
import { QuizLesson } from '@/types/course';

const quiz1: QuizLesson = {
  id: 5,
  title: 'AI Developer Tools Quiz',
  duration: '15 minutes',
  content: {
    questions: [
      {
        id: 1,
        question: 'Which AI tool is developed by GitHub in collaboration with OpenAI?',
        options: [
          'Tabnine',
          'Cody',
          'GitHub Copilot',
          'Amazon CodeWhisperer'
        ],
        correctAnswer: 2,
        explanation: 'GitHub Copilot is developed by GitHub in collaboration with OpenAI and is powered by OpenAI Codex (based on GPT models).'
      },
      {
        id: 2,
        question: 'What powers GitHub Copilot\'s code generation capabilities?',
        options: [
          'Amazon ML models',
          'OpenAI Codex (GPT models)',
          'Tabnine proprietary AI',
          'Sourcegraph code graph'
        ],
        correctAnswer: 1,
        explanation: 'GitHub Copilot is powered by OpenAI Codex, which is based on GPT models.'
      },
      {
        id: 3,
        question: 'Which AI tool provides a natural language conversational interface for coding assistance?',
        options: [
          'GitHub Copilot',
          'ChatGPT',
          'Tabnine',
          'Cody'
        ],
        correctAnswer: 1,
        explanation: 'ChatGPT provides a natural language conversational interface for coding assistance, allowing users to ask questions and get explanations in plain English.'
      },
      {
        id: 4,
        question: 'What is one main limitation of ChatGPT compared to tools like Copilot?',
        options: [
          'Does not support multiple languages',
          'Cannot generate code',
          'Not directly embedded in IDEs by default',
          'No conversational ability'
        ],
        correctAnswer: 2,
        explanation: 'ChatGPT is not directly embedded in IDEs by default, unlike GitHub Copilot which provides real-time suggestions within the editor.'
      },
      {
        id: 5,
        question: 'Which tool is known for strong privacy features and offers local AI models for code completion?',
        options: [
          'ChatGPT',
          'Tabnine',
          'Cody',
          'Amazon CodeWhisperer'
        ],
        correctAnswer: 1,
        explanation: 'Tabnine is known for its strong privacy features and offers local AI models for code completion, making it popular for teams with privacy concerns.'
      },
      {
        id: 6,
        question: 'Cody by Sourcegraph is especially useful for:',
        options: [
          'Small projects with simple code',
          'Large codebases and enterprise environments',
          'Writing AWS-specific code',
          'Generating UI code from sketches'
        ],
        correctAnswer: 1,
        explanation: 'Cody by Sourcegraph is especially useful for large codebases and enterprise environments due to its deep understanding of codebase through Sourcegraph\'s indexing.'
      },
      {
        id: 7,
        question: 'Amazon CodeWhisperer is optimized for which environment?',
        options: [
          'Google Cloud Platform',
          'Microsoft Azure',
          'AWS (Amazon Web Services)',
          'On-premises servers'
        ],
        correctAnswer: 2,
        explanation: 'Amazon CodeWhisperer is optimized for AWS (Amazon Web Services) environments and helps write secure, efficient code using AWS APIs.'
      },
      {
        id: 8,
        question: 'Which tool integrates deeply with GitHub workflows and multiple IDEs like VS Code and JetBrains?',
        options: [
          'Cody',
          'GitHub Copilot',
          'Tabnine',
          'Amazon CodeWhisperer'
        ],
        correctAnswer: 1,
        explanation: 'GitHub Copilot integrates deeply with GitHub workflows and multiple IDEs like VS Code and JetBrains, providing seamless development experience.'
      },
      {
        id: 9,
        question: 'What functionality is NOT a primary feature of these AI developer tools?',
        options: [
          'Real-time code autocompletion',
          'Full project deployment automation',
          'Code explanation and debugging assistance',
          'Context-aware code suggestions'
        ],
        correctAnswer: 1,
        explanation: 'Full project deployment automation is NOT a primary feature of AI developer tools. These tools focus on code generation, autocompletion, and assistance rather than deployment.'
      },
      {
        id: 10,
        question: 'Which AI tool requires integration with Sourcegraph to be used effectively?',
        options: [
          'Tabnine',
          'Cody',
          'ChatGPT',
          'GitHub Copilot'
        ],
        correctAnswer: 1,
        explanation: 'Cody requires integration with Sourcegraph to be used effectively, as it relies on Sourcegraph\'s code graph for context-aware answers.'
      }
    ]
  }
};

export default quiz1;
