import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson1: VideoLesson = {
  id: 1,
  title: 'Writing effective prompts for code generation',
  duration: '20 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/uwA3MMYBfAQ',
    textContent: `# Writing Effective Prompts for Code Generation

## **🧠 Introduction**

AI tools like **GitHub Copilot**, **ChatGPT**, and others can generate, debug, and refactor code based on *prompts* — natural language instructions. The effectiveness of the output depends heavily on how well you craft your prompt.

**Writing effective prompts** is an essential skill for developers who want to make the most out of AI-driven coding tools. A well-crafted prompt can save hours of development time and help generate high-quality, readable, and functional code.

---

## **🎯 What is a Prompt?**

A **prompt** is the input you give to an AI model to generate a response. For code generation, it's typically a **natural language instruction** that describes the task you want to accomplish.

Example:

"Write a Python function that checks if a number is a prime number."

---

## **🧩 Key Principles of Writing Effective Prompts**

### **1. Be Clear and Specific**

Avoid vague requests. Instead, clearly state what the code should do, the language to use, and any constraints.

✅ Example:

"Write a JavaScript function that takes a string and returns true if it is a palindrome."

❌ Vague:

"Make a function for strings."

---

### **2. Mention the Programming Language**

Always specify the language unless you want the AI to choose one.

✅ Example:

"Write a Python script to read a CSV file and calculate the average of a column."

---

### **3. Include the Expected Inputs and Outputs**

Let the AI know what kind of data it should handle.

✅ Example:

"Create a Python function that takes a list of integers and returns a sorted list in descending order."

---

### **4. Define the Function or Class Structure if Needed**

If you have a specific format or naming in mind, include it.

✅ Example:

"Write a Java method called \`calculateTax\` that takes an income value and returns the tax based on brackets."

---

### **5. Ask for Comments or Explanation (if learning)**

You can ask the AI to explain the code or include inline comments.

✅ Example:

"Write a commented C++ function to calculate factorial using recursion."

---

### **6. Use Step-by-Step Instructions**

Break down complex tasks into smaller steps. You can use multi-turn prompting or ask for step-wise solutions.

✅ Example:

1. "Write a Python class for a bank account with deposit and withdrawal methods."

2. "Now add a method to calculate monthly interest."

---

### **7. Specify the Output Format**

Let the AI know how the code should be returned: plain, minimal, commented, etc.

✅ Example:

"Give me a clean JavaScript snippet with no extra explanation."

---

### **8. Use Examples**

Including example inputs and expected outputs improves accuracy.

✅ Example:

"Write a function in Python that converts Celsius to Fahrenheit. For example, input: 0 → output: 32"

---

### **9. Indicate Code Constraints or Best Practices**

You can include instructions for performance, security, or readability.

✅ Example:

"Write a secure PHP login system with prepared statements to prevent SQL injection."

---

## **🧪 Prompting for Different Use Cases**

| Goal | Prompt Example |
| ----- | ----- |
| Generate new code | "Write a Python function to generate Fibonacci numbers up to N." |
| Debug code | "Find and fix bugs in this JavaScript function that filters even numbers." |
| Refactor code | "Refactor this Python function to be more efficient and readable." |
| Add comments | "Add inline comments to this C# function that calculates compound interest." |
| Explain code | "Explain what this Go function does line by line." |
| Translate code | "Convert this Java function to equivalent code in Kotlin." |

---

## **⚠️ Common Prompting Mistakes**

| Mistake | Why It's a Problem | Example |
| ----- | ----- | ----- |
| Too vague | AI doesn't know what you want | "Make a function" |
| No language specified | Results may be in the wrong language | "Sort numbers" |
| Asking too much at once | Increases risk of errors or incomplete responses | "Make a web app" |
| No input/output description | AI may guess wrong data types or structures | "Write code to convert" |

---

## **💡 Tips for Iteration**

* **Start simple**, then build complexity in follow-up prompts.

* **Ask follow-up questions** like "Can you optimize this?" or "Can you add error handling?"

* **Copy-paste errors** or failing code directly to get fixes.

* **Test generated code** before use in production.

---

## **🧰 Tools That Benefit from Good Prompting**

* **ChatGPT** (chat.openai.com)

* **GitHub Copilot** (inside VS Code, JetBrains, etc.)

* **Replit Ghostwriter**

* **Kite AI (legacy)**

* **Google Gemini (for code)**

---

## **✅ Summary**

Writing effective prompts for code generation is a blend of **clear communication**, **technical instruction**, and **iterative refinement**. As AI coding tools become more common, your ability to instruct them precisely becomes a vital development skill.

By mastering the art of prompting, you can:

* Boost productivity

* Learn programming faster

* Collaborate with AI as a real coding assistant`
  }
};

export default lesson1;
