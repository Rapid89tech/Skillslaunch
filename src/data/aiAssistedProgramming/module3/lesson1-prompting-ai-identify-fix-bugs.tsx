import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson1: VideoLesson = {
  id: 1,
  title: 'Prompting AI to identify and fix bugs',
  duration: '25 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/dYZCYbf9BJA',
    textContent: `# Prompting AI to Identify and Fix Bugs in Code

Artificial intelligence tools like **ChatGPT**, **GitHub Copilot**, **Replit Ghostwriter**, and **Amazon CodeWhisperer** have revolutionized software development. One of their most practical applications is in **debugging** — identifying, understanding, and fixing bugs in code using natural language prompts.

Knowing **how to effectively prompt AI** to help with bugs is a critical skill that can drastically reduce debugging time and improve code reliability.

---

## **🧠 What Is Bug Identification and Fixing?**

**Bug identification** is the process of detecting errors or unintended behavior in a program.  
 **Fixing bugs** involves changing the code to remove those errors without introducing new ones.

AI tools can assist in:

* Detecting syntax and logical errors.

* Explaining error messages.

* Proposing corrected versions of code.

* Suggesting better practices to avoid similar bugs in the future.

---

## **📌 When to Use AI for Debugging**

* When facing cryptic error messages or unexpected behavior.

* When trying to debug legacy or unfamiliar code.

* To cross-check your understanding of a problem.

* To fix code faster during rapid development or prototyping.

---

## **🛠️ Prompting Strategies: How to Ask for Bug Fixes**

### **1. Provide the Full Context**

Include the relevant portion of the code (even better: full function or class) and describe:

* What the code is supposed to do.

* What it is doing instead (actual behavior).

* Any error messages received.

**Example Prompt**:

"Here's my Python function to calculate averages. It crashes when I pass an empty list. Can you find and fix the bug?"

\`\`\`python
def average(nums):
    return sum(nums) / len(nums)
\`\`\`

---

### **2. State the Expected Behavior**

AI tools work better when you tell them what you *want* the code to do.

**Prompt Example**:

"This JavaScript function is supposed to filter even numbers, but it returns odds. What's wrong and how do I fix it?"

\`\`\`js
function filterEven(arr) {
  return arr.filter(num => num % 2 === 1);
}
\`\`\`

**Fix Explanation**:  
 The condition should be \`num % 2 === 0\` to return even numbers.

---

### **3. Include Error Output if Available**

If you have error messages or stack traces, paste them with your code.

**Prompt Example**:

"This code throws a \`ZeroDivisionError\` when I run it with an empty list. Fix it so that it returns 0 instead."

---

### **4. Ask for an Explanation**

If you're learning, prompt the AI to explain what went wrong and why.

**Prompt Example**:

"Explain why this C++ loop is skipping the first element."

---

### **5. Use Follow-up Prompts**

After an initial bug is fixed, you can go further:

* "Now add error handling."

* "Can you make this more efficient?"

* "Add unit tests to check edge cases."

---

## **🔄 Common Prompt Templates**

| Purpose | Prompt Example |
| ----- | ----- |
| Find bugs | "Can you find the bug in this function that crashes with null input?" |
| Fix logic error | "This sorting function doesn't work with negative numbers. Fix it." |
| Debug with error | "Here's my code and the error message I get. Help me fix it." |
| Explain the issue | "Why is this function returning undefined instead of the expected result?" |
| Improve reliability | "Add input validation to this function to avoid runtime errors." |
| Suggest tests | "Write test cases that might break this function." |

---

## **🧪 Example Scenarios**

### **🐍 Python Bug Fix**

**Prompt**:

"Fix this Python code that crashes when the list is empty."

\`\`\`python
def get_average(lst):
    return sum(lst) / len(lst)
\`\`\`

**AI Response**:

\`\`\`python
def get_average(lst):
    if not lst:
        return 0
    return sum(lst) / len(lst)
\`\`\`

---

### **💻 JavaScript Debugging with Explanation**

**Prompt**:

"This code returns NaN when multiplying numbers. What's wrong?"

\`\`\`js
function multiply(a, b) {
  return a * b || 0;
}
\`\`\`

**AI Response**:

If \`a * b\` is 0, the \`||\` operator will return 0 instead of the actual result. Use an explicit check instead.

---

### **🧱 HTML/JS Frontend Debug**

**Prompt**:

"My button doesn't trigger the function when clicked. Here's the code."

\`\`\`html
<button onclick="doSomething">Click me</button>
<script>
function doSomething() {
  alert("Hello!");
}
</script>
\`\`\`

**AI Response**:

The function is not being called. Use \`onclick="doSomething()"\`.

---

## **⚠️ Common Mistakes in Prompting AI**

| Mistake | Why It's a Problem | Fix It By... |
| ----- | ----- | ----- |
| Vague request | AI can't determine the issue | Be clear: describe what's wrong |
| No code shared | AI can't analyze without context | Include relevant code snippet |
| No expected behavior given | AI doesn't know the goal | Explain what should happen when the code works correctly |
| Skipping error messages | Missed diagnostic clues | Paste errors or logs with the code |
| Asking too much at once | AI may give incomplete or irrelevant output | Break down into smaller prompts |

---

## **💡 Tips for Best Results**

* Keep prompts concise but complete.

* Start with identifying the issue, then follow up for improvements.

* Use AI explanations to learn, not just copy-paste.

* Test AI-suggested fixes before pushing to production.

* Use version control to track changes made by AI assistance.

---

## **🧰 Tools That Support Debugging Prompts**

| Tool | Features |
| ----- | ----- |
| **ChatGPT** | Conversational, step-by-step debugging, multi-language support |
| **GitHub Copilot** | Inline suggestions in VS Code, real-time code corrections |
| **Amazon CodeWhisperer** | Code-level suggestions and security-focused bug prevention |
| **Replit Ghostwriter** | Context-aware suggestions and bug fixes within Replit IDE |
| **Sourcery** (for Python) | AI-based refactoring and bug prevention for Python codebases |

---

## **✅ Summary**

Prompting AI to identify and fix bugs is a vital modern development skill. When done effectively, it allows you to:

* Diagnose errors faster.

* Understand what's wrong and why.

* Apply best practices in debugging and fixing code.

* Become a better programmer by learning from AI feedback.

### **🧠 Remember:**

"AI is not here to replace you—it's here to assist you. But only if you know how to talk to it."`
  }
};

export default lesson1;
