import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson5: VideoLesson = {
  id: 5,
  title: 'Hands-on Activity: Debug a broken app with AI',
  duration: '45 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/5bNfQle2YR0',
    textContent: `# Hands-on Activity: Debug a Broken App with AI

## **Introduction**

Debugging is a critical phase in software development where developers identify and fix errors, bugs, or unexpected behaviors in an application. Traditional debugging can be time-consuming and requires deep understanding of the codebase. AI-powered tools like ChatGPT, GitHub Copilot, Replit Ghostwriter, and Amazon CodeWhisperer have revolutionized this process by enabling developers to debug faster and more efficiently using natural language prompts and intelligent code analysis.

This hands-on activity focuses on leveraging AI tools to debug a broken application, demonstrating practical steps and best practices.

---

## **Objectives**

* Learn how to use AI to identify bugs in an app.
* Understand how to interact with AI using clear and specific prompts.
* Practice debugging through iterative AI-assisted troubleshooting.
* Gain insights into fixing common coding errors and improving code reliability.
* Develop confidence in combining AI assistance with manual testing and validation.

---

## **Step-by-Step Guide to Debugging a Broken App with AI**

### **Step 1: Identify the Bug or Problem**

* Run the app or review user reports to understand the symptoms.
* Note error messages, unexpected outputs, crashes, or performance issues.
* Collect relevant code snippets where the issue likely resides.

### **Step 2: Prepare Clear Prompts for AI**

* Be specific about the problem you want to solve.
* Include the programming language, code snippet, expected behavior, and actual behavior.
* Example prompt:
   "Here is a JavaScript function that should filter out even numbers from an array but it returns incorrect results. Can you find and fix the bug?"
* If possible, provide input and output examples:
   Input: [1, 2, 3, 4] → Expected output: [1, 3]

### **Step 3: Ask AI to Diagnose the Problem**

* Use an AI tool (like ChatGPT) to analyze the code.
* Request an explanation of what the code does and where the bug might be.
* Example prompt:
   "Explain this Python function and identify any bugs."

### **Step 4: Request a Fix or Suggestion**

* Ask AI to provide a corrected version of the code.
* Request inline comments explaining the fix.
* Example prompt:
   "Fix this function to correctly handle edge cases and add comments explaining your changes."

### **Step 5: Test the AI-Provided Solution**

* Implement the suggested fix in your development environment.
* Run automated and manual tests to verify the issue is resolved.
* Check that no new bugs were introduced.

### **Step 6: Iterate if Needed**

* If the bug persists or new issues arise, provide feedback to the AI with updated symptoms or error messages.
* Request further debugging or optimizations.
* Example prompt:
   "The fix you provided solved the main bug, but now it fails with empty input. Can you update the function to handle this case?"

### **Step 7: Document the Fix**

* Record the issue, root cause, and resolution.
* Add comments to the code to clarify the fix.
* Update any relevant documentation or tests.

---

## **Tips for Effective AI-Assisted Debugging**

* **Be Clear and Specific:** Precise prompts lead to more accurate debugging assistance.
* **Provide Context:** Include input/output examples and error messages.
* **Use Stepwise Debugging:** Break down complex bugs into smaller parts and debug iteratively.
* **Validate AI Suggestions:** Always review and test AI-generated code thoroughly.
* **Combine AI with Traditional Debugging:** Use AI as a tool alongside debugging tools like breakpoints, logs, and profilers.
* **Keep Backup:** Save the original code before applying fixes from AI.

---

## **Common Debugging Scenarios AI Can Help With**

* Syntax errors and typos
* Logical errors (incorrect calculations, wrong conditions)
* Off-by-one errors in loops or indexing
* Handling edge cases and null/empty inputs
* Performance bottlenecks and inefficient code
* Security vulnerabilities (e.g., SQL injection risks)
* Missing error handling or exception management

---

## **Benefits of Using AI for Debugging**

* **Faster Identification:** AI quickly spots likely causes of bugs based on patterns and experience.
* **Learning Opportunity:** Explanations help developers understand the root causes.
* **Improved Productivity:** Reduces time spent manually tracing errors.
* **Enhanced Code Quality:** Encourages writing cleaner, more robust code.
* **Iterative Refinement:** AI enables continuous improvement with successive prompts.

---

## **Example Tools for AI-Assisted Debugging**

| Tool | Features | Integration |
| ----- | ----- | ----- |
| **ChatGPT** | Conversational debugging, code explanation, fixes | Web, IDE plugins |
| **GitHub Copilot** | Real-time code suggestions, bug fixes | VS Code, JetBrains |
| **Replit Ghostwriter** | Context-aware debugging suggestions | Replit IDE |
| **Amazon CodeWhisperer** | Security fixes, bug detection | AWS Cloud9, VS Code |

---

## **Summary**

Using AI to debug broken applications empowers developers to diagnose issues more quickly and accurately. By crafting clear prompts and working iteratively with AI-generated explanations and fixes, programmers can resolve bugs efficiently, improve code quality, and gain deeper understanding of their codebases. Combining AI assistance with traditional testing and manual review ensures robust and maintainable software.`
  }
};

export default lesson5;
