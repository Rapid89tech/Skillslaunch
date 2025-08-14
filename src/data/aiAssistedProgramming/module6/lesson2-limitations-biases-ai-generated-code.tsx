import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson2: VideoLesson = {
  id: 2,
  title: 'Limitations and biases in AI-generated code',
  duration: '50 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/watch?v=BGZB9dn0GV4',
    textContent: `# Limitations and Biases in AI-Generated Code

## **Introduction**

AI-generated code refers to source code automatically produced by artificial intelligence models like ChatGPT, GitHub Copilot, or other code synthesis tools. While AI-powered code generation can boost productivity and assist developers, it has inherent limitations and biases that must be understood and managed to ensure code quality, security, and fairness.

---

## **1. Limitations of AI-Generated Code**

### **a) Incomplete or Incorrect Code**

* **Partial Solutions:** AI may generate snippets that solve only part of the problem or miss edge cases.
* **Syntax Errors:** Occasionally, generated code may contain syntax mistakes or not conform to language best practices.
* **Logical Errors:** AI models may misunderstand complex logic or business rules, resulting in incorrect behavior.

### **b) Lack of Context Awareness**

* **Limited Understanding:** AI often lacks full context about the entire codebase, dependencies, or runtime environment, which can cause suboptimal or faulty code suggestions.
* **State and Side Effects:** Handling of application state, external systems, or asynchronous behavior is often weak or missing.

### **c) Security Vulnerabilities**

* AI may inadvertently generate insecure code, including:
  * Injection flaws (e.g., SQL injection)
  * Improper input validation
  * Unsafe use of cryptographic functions
* AI cannot guarantee security best practices without explicit guidance.

### **d) Maintenance and Readability Issues**

* Generated code might not follow established style guides or design patterns, making it harder for humans to maintain or extend.
* Comments and documentation may be minimal or absent.

### **e) Over-Reliance on AI**

* Developers may become too reliant on AI-generated code and skip thorough testing, review, or understanding, increasing the risk of bugs or vulnerabilities.

---

## **2. Biases in AI-Generated Code**

### **a) Training Data Bias**

* AI models are trained on publicly available code repositories (e.g., GitHub) and datasets, which may contain:
  * Outdated or deprecated practices
  * Code with security flaws
  * Non-inclusive or culturally biased comments or identifiers
* Such biases can be replicated or amplified in AI-generated code.

### **b) Language and Framework Bias**

* AI models tend to be better at languages or frameworks that are more represented in training data (e.g., Python, JavaScript) and less effective on niche or emerging technologies.
* This can limit diversity or quality of generated code across tech stacks.

### **c) Ethical and Inclusivity Bias**

* AI might generate offensive, insensitive, or non-inclusive variable names, comments, or documentation, reflecting societal biases embedded in the training data.
* Biases in AI outputs could affect diversity and inclusivity in coding culture.

---

## **3. Mitigation Strategies**

### **a) Human-in-the-Loop**

* Always have developers review, test, and refactor AI-generated code before deployment.
* Use AI suggestions as starting points rather than final solutions.

### **b) Contextual Prompting**

* Provide detailed and clear prompts to AI to guide code generation towards intended use cases and constraints.
* Include coding standards and security guidelines in prompts.

### **c) Testing and Validation**

* Employ robust automated testing (unit, integration, security testing) to catch errors and vulnerabilities.
* Perform code audits and static analysis.

### **d) Bias Awareness and Filtering**

* Use tools to detect offensive or biased language in code comments and identifiers.
* Encourage diverse and inclusive language practices in codebases.

### **e) Continuous Improvement of AI Models**

* Use updated, curated, and diverse training datasets to reduce biases.
* Incorporate ethical guidelines in AI training and deployment.

---

## **4. Summary**

While AI-generated code is a powerful aid for developers, it has important limitations including incomplete logic, security risks, and lack of full context. Additionally, biases embedded in training data can manifest in generated code, affecting quality and inclusiveness. Developers must apply careful review, testing, and ethical considerations when using AI to write code to ensure robust, secure, and fair software development.`
  }
};

export default lesson2;
