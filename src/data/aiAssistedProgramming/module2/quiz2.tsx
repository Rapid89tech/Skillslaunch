import React from 'react';
import { QuizLesson } from '@/types/course';

const quiz2: QuizLesson = {
  id: 5,
  title: 'AI-Assisted Code Generation Quiz',
  duration: '20 minutes',
  content: {
    questions: [
      {
        id: 1,
        question: 'What is the primary reason to be clear and specific in a code generation prompt?',
        options: [
          'To make the prompt longer',
          'To avoid syntax errors',
          'To help the AI generate accurate, relevant code',
          'To use more advanced programming languages'
        ],
        correctAnswer: 2,
        explanation: 'Being clear and specific helps the AI understand exactly what you want, leading to more accurate and relevant code generation.'
      },
      {
        id: 2,
        question: 'Which of the following is the BEST example of a clear and specific prompt?',
        options: [
          'Make a function',
          'Sort numbers',
          'Write a Python function to check if a string is a palindrome.',
          'Give me code'
        ],
        correctAnswer: 2,
        explanation: 'This prompt specifies the language (Python), the function purpose (check palindrome), and the input type (string).'
      },
      {
        id: 3,
        question: 'What should a well-written prompt include to help the AI understand data handling?',
        options: [
          'File path',
          'Inputs and outputs',
          'IDE name',
          'Code font'
        ],
        correctAnswer: 1,
        explanation: 'Specifying inputs and outputs helps the AI understand what data types and structures to work with.'
      },
      {
        id: 4,
        question: 'Which programming language is missing from this prompt? "Write a function that sorts a list."',
        options: [
          'Python',
          'JavaScript',
          'It\'s not specified',
          'C++'
        ],
        correctAnswer: 2,
        explanation: 'The prompt doesn\'t specify which programming language to use, which could lead to confusion.'
      },
      {
        id: 5,
        question: 'If you want the AI to follow a specific structure like class names or function names, what should you do?',
        options: [
          'Let the AI decide',
          'Leave it out',
          'Include it in the prompt',
          'Ask it afterward'
        ],
        correctAnswer: 2,
        explanation: 'Including specific naming requirements in the prompt ensures the AI generates code with your preferred structure.'
      },
      {
        id: 6,
        question: 'Why is it helpful to include example inputs and outputs in your prompt?',
        options: [
          'To make the code run faster',
          'To improve accuracy of generated code',
          'To help you memorize syntax',
          'To reduce internet usage'
        ],
        correctAnswer: 1,
        explanation: 'Examples help the AI understand the expected behavior and generate more accurate code.'
      },
      {
        id: 7,
        question: 'Which prompt is most appropriate for refactoring code?',
        options: [
          'Make a calculator.',
          'Translate this code to Python.',
          'Refactor this function to be more readable.',
          'Explain this class line by line.'
        ],
        correctAnswer: 2,
        explanation: 'This prompt clearly states the goal of refactoring for improved readability.'
      },
      {
        id: 8,
        question: 'What is a good follow-up prompt after asking the AI to generate a function?',
        options: [
          'Start over',
          'Now add error handling',
          'Tell me a joke',
          'Make it a website'
        ],
        correctAnswer: 1,
        explanation: 'Adding error handling is a logical next step to improve the robustness of the generated function.'
      },
      {
        id: 9,
        question: 'Which of the following is a code constraint example?',
        options: [
          'Use recursion to solve the problem',
          'Use dark theme',
          'Make the font bigger',
          'Use emojis'
        ],
        correctAnswer: 0,
        explanation: 'Specifying the use of recursion is a technical constraint that affects how the code is written.'
      },
      {
        id: 10,
        question: 'What tool is NOT typically used for AI-assisted code generation?',
        options: [
          'GitHub Copilot',
          'ChatGPT',
          'Microsoft Word',
          'Google Gemini'
        ],
        correctAnswer: 2,
        explanation: 'Microsoft Word is a word processor, not an AI code generation tool.'
      },
      {
        id: 11,
        question: 'A vague prompt can lead to poor or unrelated code generation.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'Vague prompts give the AI insufficient information, leading to irrelevant or incorrect code.'
      },
      {
        id: 12,
        question: 'You should never mention the programming language in a code prompt.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'You should always specify the programming language to ensure the AI generates code in the correct language.'
      },
      {
        id: 13,
        question: 'Asking the AI to explain code can help you learn faster.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 0,
        explanation: 'AI explanations can provide insights and help you understand code concepts more quickly.'
      },
      {
        id: 14,
        question: 'You should always trust and deploy AI-generated code without testing.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'You should always test AI-generated code before deploying it to ensure it works correctly and securely.'
      },
      {
        id: 15,
        question: 'Prompting is only useful when generating new code, not for debugging or explaining.',
        options: [
          'True',
          'False'
        ],
        correctAnswer: 1,
        explanation: 'Prompting is useful for many tasks including debugging, explaining code, refactoring, and generating new code.'
      },
      {
        id: 16,
        question: 'You write: "Write a function to process data." What\'s wrong with this prompt?',
        options: [
          'It\'s too detailed',
          'It\'s vague and lacks input/output info',
          'It specifies the language',
          'It\'s too short to process'
        ],
        correctAnswer: 1,
        explanation: 'The prompt is too vague and doesn\'t specify what kind of data, how to process it, or what the output should be.'
      },
      {
        id: 17,
        question: 'You want a function that calculates the square of a number in JavaScript, with an example. Choose the best prompt:',
        options: [
          'Square a number.',
          'Make math function.',
          'Write a JavaScript function that returns the square of a number. Example: input = 4 → output = 16.',
          'Square this.'
        ],
        correctAnswer: 2,
        explanation: 'This prompt specifies the language, function purpose, and provides a clear example of input and output.'
      },
      {
        id: 18,
        question: 'You\'re learning and want the AI to explain code that calculates factorial using recursion. Which is the best prompt?',
        options: [
          'Just give me the code',
          'Write a commented C++ function to calculate factorial using recursion.',
          'Explain factorial',
          'Make factorial code'
        ],
        correctAnswer: 1,
        explanation: 'This prompt asks for commented code, which will help you understand how the factorial calculation works.'
      },
      {
        id: 19,
        question: 'Your prompt says: "Sort this list." The AI sorts it in ascending order, but you wanted descending. How could you fix the prompt?',
        options: [
          'Add "in descending order" to the prompt',
          'Use emojis',
          'Don\'t include the word "sort"',
          'Make the list shorter'
        ],
        correctAnswer: 0,
        explanation: 'Adding "in descending order" would have made the prompt more specific about the desired sorting direction.'
      },
      {
        id: 20,
        question: 'You gave a prompt to make a bank account class. Now you want to add interest calculation. What should you do?',
        options: [
          'Erase everything and add interest.',
          'Now add a method to calculate monthly interest.',
          'Make a website for banking',
          'I\'m done.'
        ],
        correctAnswer: 1,
        explanation: 'This follow-up prompt builds on the existing code by adding a new method, which is an effective iterative approach.'
      }
    ]
  }
};

export default quiz2;
