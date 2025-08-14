import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson3: VideoLesson = {
  id: 3,
  title: 'Overview of leading tools (Copilot, ChatGPT, Tabnine, Cody, CodeWhisperer)',
  duration: '25 minutes',
  videoUrl: 'https://youtu.be/gq507TbglYY',
  textContent: `# Overview of Leading AI Developer Tools

As AI continues to revolutionize software development, several advanced tools have emerged to assist developers with code generation, autocompletion, debugging, and documentation. Among these, GitHub Copilot, ChatGPT, Tabnine, Cody (by Sourcegraph), and Amazon CodeWhisperer are leading the transformation of the coding experience.

## **1. GitHub Copilot**

**Developed by:** GitHub in collaboration with OpenAI  
**Powered by:** OpenAI Codex (based on GPT models)

**Functionality:**
* Autocompletes code in real time
* Suggests full functions, loops, boilerplate code, and test cases
* Supports multiple languages (JavaScript, Python, TypeScript, Go, Ruby, etc.)
* Integrates with Visual Studio Code, JetBrains IDEs, Neovim, and others

**Strengths:**
* Highly contextual suggestions based on surrounding code
* Handles complex function implementations
* Frequently updated and deeply integrated with GitHub workflows

**Limitations:**
* Sometimes generates insecure or suboptimal code
* Requires user verification and editing

## **2. ChatGPT (for Coding Assistance)**

**Developed by:** OpenAI  
**Powered by:** GPT-4 / GPT-4.5 (with Pro version access)

**Functionality:**
* Natural language interface for querying, debugging, explaining, or generating code
* Can review and refactor code snippets
* Used for pseudocode-to-code generation, algorithm explanation, and learning new languages
* Plugins and custom GPTs can integrate ChatGPT with IDEs and other dev tools

**Strengths:**
* Powerful conversational interface
* Supports multi-turn discussions and explanations
* Excellent for learning and reasoning tasks

**Limitations:**
* Not directly embedded in IDEs (unless integrated manually)
* Less real-time than autocompletion tools

## **3. Tabnine**

**Developed by:** Tabnine  
**Powered by:** Proprietary AI models (based on GPT and smaller models)

**Functionality:**
* Local and cloud-based code autocompletion
* Predicts the next line or token based on context
* Supports multiple languages and frameworks
* Strong focus on privacy with local model options

**Strengths:**
* Fast and lightweight
* Offers both free and enterprise versions
* Excellent for teams with privacy concerns

**Limitations:**
* Less intelligent on complex multi-line logic compared to Copilot or GPT
* Limited reasoning capabilities

## **4. Cody (by Sourcegraph)**

**Developed by:** Sourcegraph  
**Powered by:** LLMs (Claude, GPT-4, etc.) + Sourcegraph's code graph

**Functionality:**
* Provides context-aware answers by referencing your entire codebase
* Supports code navigation, refactoring, and high-quality code search
* Great for large codebases and enterprise settings

**Strengths:**
* Deep understanding of codebase due to Sourcegraph's indexing
* Very useful for onboarding, documentation generation, and large project maintenance
* Highly accurate in referencing internal symbols and code patterns

**Limitations:**
* Requires integration with Sourcegraph
* Maybe overkill for small projects

## **5. Amazon CodeWhisperer**

**Developed by:** Amazon Web Services (AWS)  
**Powered by:** Proprietary ML models

**Functionality:**
* Code suggestion and generation tailored to AWS environments
* Helps write secure, efficient code using AWS APIs
* Integrated with IDEs (VS Code, JetBrains) and AWS tooling

**Strengths:**
* Strong performance with AWS-specific tasks (e.g., Lambda, S3, DynamoDB)
* Free tier for individual users
* Built-in security scans for detecting vulnerabilities

**Limitations:**
* Less effective for general-purpose development outside AWS
* Smaller model context compared to GPT-4

## **Comparison Table**

| Tool | Best Use Case | IDE Integration | Context Awareness | Strengths |
|------|---------------|-----------------|-------------------|-----------|
| GitHub Copilot | Real-time autocompletion | ✅ Yes | ✅ High | Fast, deep IDE integration |
| ChatGPT | Code explanation & reasoning | ❌ (Manual) | ✅ Very High | Conversational, multi-step logic |
| Tabnine | Lightweight autocompletion | ✅ Yes | ⚠️ Medium | Fast, private, local options |
| Cody | Large codebase understanding | ✅ With Sourcegraph | ✅ High | Project-scale code intelligence |
| CodeWhisperer | AWS-focused development | ✅ Yes | ⚠️ Moderate | Optimized for AWS & secure code |

## **Conclusion**

These leading AI coding tools each cater to different developer needs:

* Use GitHub Copilot for rapid, real-time coding inside your IDE
* Use ChatGPT for in-depth assistance, explanations, and flexible problem-solving
* Use Tabnine when you want privacy and fast completions on local devices
* Use Cody for understanding and navigating large, complex codebases
* Use CodeWhisperer if you're working heavily within AWS services and need secure suggestions`,
  content: {
    videoUrl: 'https://youtu.be/gq507TbglYY',
    textContent: `# Overview of Leading AI Developer Tools

As AI continues to revolutionize software development, several advanced tools have emerged to assist developers with code generation, autocompletion, debugging, and documentation. Among these, GitHub Copilot, ChatGPT, Tabnine, Cody (by Sourcegraph), and Amazon CodeWhisperer are leading the transformation of the coding experience.

## **1. GitHub Copilot**

**Developed by:** GitHub in collaboration with OpenAI  
**Powered by:** OpenAI Codex (based on GPT models)

**Functionality:**
* Autocompletes code in real time
* Suggests full functions, loops, boilerplate code, and test cases
* Supports multiple languages (JavaScript, Python, TypeScript, Go, Ruby, etc.)
* Integrates with Visual Studio Code, JetBrains IDEs, Neovim, and others

**Strengths:**
* Highly contextual suggestions based on surrounding code
* Handles complex function implementations
* Frequently updated and deeply integrated with GitHub workflows

**Limitations:**
* Sometimes generates insecure or suboptimal code
* Requires user verification and editing

## **2. ChatGPT (for Coding Assistance)**

**Developed by:** OpenAI  
**Powered by:** GPT-4 / GPT-4.5 (with Pro version access)

**Functionality:**
* Natural language interface for querying, debugging, explaining, or generating code
* Can review and refactor code snippets
* Used for pseudocode-to-code generation, algorithm explanation, and learning new languages
* Plugins and custom GPTs can integrate ChatGPT with IDEs and other dev tools

**Strengths:**
* Powerful conversational interface
* Supports multi-turn discussions and explanations
* Excellent for learning and reasoning tasks

**Limitations:**
* Not directly embedded in IDEs (unless integrated manually)
* Less real-time than autocompletion tools

## **3. Tabnine**

**Developed by:** Tabnine  
**Powered by:** Proprietary AI models (based on GPT and smaller models)

**Functionality:**
* Local and cloud-based code autocompletion
* Predicts the next line or token based on context
* Supports multiple languages and frameworks
* Strong focus on privacy with local model options

**Strengths:**
* Fast and lightweight
* Offers both free and enterprise versions
* Excellent for teams with privacy concerns

**Limitations:**
* Less intelligent on complex multi-line logic compared to Copilot or GPT
* Limited reasoning capabilities

## **4. Cody (by Sourcegraph)**

**Developed by:** Sourcegraph  
**Powered by:** LLMs (Claude, GPT-4, etc.) + Sourcegraph's code graph

**Functionality:**
* Provides context-aware answers by referencing your entire codebase
* Supports code navigation, refactoring, and high-quality code search
* Great for large codebases and enterprise settings

**Strengths:**
* Deep understanding of codebase due to Sourcegraph's indexing
* Very useful for onboarding, documentation generation, and large project maintenance
* Highly accurate in referencing internal symbols and code patterns

**Limitations:**
* Requires integration with Sourcegraph
* Maybe overkill for small projects

## **5. Amazon CodeWhisperer**

**Developed by:** Amazon Web Services (AWS)  
**Powered by:** Proprietary ML models

**Functionality:**
* Code suggestion and generation tailored to AWS environments
* Helps write secure, efficient code using AWS APIs
* Integrated with IDEs (VS Code, JetBrains) and AWS tooling

**Strengths:**
* Strong performance with AWS-specific tasks (e.g., Lambda, S3, DynamoDB)
* Free tier for individual users
* Built-in security scans for detecting vulnerabilities

**Limitations:**
* Less effective for general-purpose development outside AWS
* Smaller model context compared to GPT-4

## **Comparison Table**

| Tool | Best Use Case | IDE Integration | Context Awareness | Strengths |
|------|---------------|-----------------|-------------------|-----------|
| GitHub Copilot | Real-time autocompletion | ✅ Yes | ✅ High | Fast, deep IDE integration |
| ChatGPT | Code explanation & reasoning | ❌ (Manual) | ✅ Very High | Conversational, multi-step logic |
| Tabnine | Lightweight autocompletion | ✅ Yes | ⚠️ Medium | Fast, private, local options |
| Cody | Large codebase understanding | ✅ With Sourcegraph | ✅ High | Project-scale code intelligence |
| CodeWhisperer | AWS-focused development | ✅ Yes | ⚠️ Moderate | Optimized for AWS & secure code |

## **Conclusion**

These leading AI coding tools each cater to different developer needs:

* Use GitHub Copilot for rapid, real-time coding inside your IDE
* Use ChatGPT for in-depth assistance, explanations, and flexible problem-solving
* Use Tabnine when you want privacy and fast completions on local devices
* Use Cody for understanding and navigating large, complex codebases
* Use CodeWhisperer if you're working heavily within AWS services and need secure suggestions`
  }
};

export default lesson3;
