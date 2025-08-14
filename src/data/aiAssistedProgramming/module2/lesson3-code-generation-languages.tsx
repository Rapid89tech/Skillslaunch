import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson3: VideoLesson = {
  id: 3,
  title: 'Code generation across different languages (Python, JavaScript, etc.)',
  duration: '30 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/uwA3MMYBfAQ',
    textContent: `# Code Generation Across Different Languages

## **🧠 Introduction**

AI tools can generate code in multiple programming languages, making it easier to work across different technology stacks. This lesson explores how to effectively use AI for code generation in various languages like Python, JavaScript, Java, C++, and more.

---

## **🎯 Language-Specific Considerations**

### **Python**
* Clear, readable syntax
* Extensive standard library
* Popular for data science and web development
* Strong typing with type hints

### **JavaScript**
* Dynamic typing
* Both frontend and backend capabilities
* Modern ES6+ features
* Node.js ecosystem

### **Java**
* Strong typing and object-oriented design
* Platform independence
* Enterprise-level applications
* Rich ecosystem and frameworks

### **C++**
* Low-level control
* Performance-critical applications
* Memory management considerations
* Complex syntax and concepts

---

## **🛠️ Effective Cross-Language Code Generation**

### **1. Specify the Target Language**

Always mention the programming language in your prompt:

* "Write a Python function to..."
* "Create a JavaScript class that..."
* "Generate Java code for..."

### **2. Consider Language-Specific Features**

* **Python**: List comprehensions, decorators, context managers
* **JavaScript**: Arrow functions, destructuring, async/await
* **Java**: Generics, streams, annotations
* **C++**: Templates, smart pointers, RAII

### **3. Include Language-Specific Constraints**

* Performance requirements
* Memory management needs
* Framework or library preferences
* Coding standards and conventions

---

## **💡 Best Practices for Multi-Language Development**

* **Understand Language Paradigms**: Know the strengths and weaknesses of each language
* **Use Language-Specific Tools**: Leverage IDEs and linters for each language
* **Test Across Environments**: Verify code works in the target environment
* **Follow Conventions**: Adhere to language-specific coding standards
* **Consider Performance**: Different languages have different performance characteristics

---

## **✅ Summary**

Code generation across different languages requires understanding of each language's features and conventions. By crafting language-specific prompts and considering the unique characteristics of each programming language, you can effectively use AI to generate high-quality code in multiple languages.`
  }
};

export default lesson3;
