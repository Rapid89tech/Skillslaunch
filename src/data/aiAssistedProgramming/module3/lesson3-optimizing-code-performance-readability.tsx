import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson3: VideoLesson = {
  id: 3,
  title: 'Optimizing code for performance and readability with AI',
  duration: '35 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/npDCnvUHHwA',
    textContent: `# Optimizing Code for Performance and Readability with AI

## **✅ Introduction**

AI-assisted coding tools can optimize existing code for better performance and readability. Optimization improves execution speed, memory usage, and code maintainability.

## **🎯 Why Optimize Code?**

* **Performance:** Faster execution, better resource management
* **Readability:** Easier to understand, debug, maintain, and collaborate on
* **Scalability:** Efficient code handles larger datasets and more users
* **Bug Reduction:** Cleaner code often has fewer logic errors

---

## **🛠️ Types of Optimization AI Can Help With**

### **1. Performance Optimization**

AI can:
* Replace inefficient algorithms with faster alternatives
* Suggest better data structures
* Reduce redundant computations
* Parallelize operations
* Optimize loops

### **2. Readability and Code Style**

AI can:
* Rename variables/functions to more descriptive names
* Break long functions into smaller ones
* Add comments or docstrings
* Format code according to style guides
* Eliminate deep nesting and complex conditionals

---

## **🧪 Workflow: Optimizing Code Using AI**

### **Step 1: Identify the Target Code**
Select the code that's slow, hard to read, or flagged by profiling tools.

### **Step 2: Craft a Clear Prompt**
Include the goal and any constraints.

### **Step 3: Review and Compare**
Manually review or test to ensure functionality hasn't changed.

### **Step 4: Iterate and Test**
Ask follow-up prompts for further improvements.

---

## **💡 Best Practices**

* Use profiling tools first to identify real bottlenecks
* Make one change at a time and benchmark improvements
* Use AI to refactor, not rewrite, unless the code is trivial
* Ask AI to explain changes to learn optimization techniques

---

## **✅ Summary**

Optimizing code with AI is a powerful way to enhance performance, improve code quality, learn better coding practices, and automate tedious refactoring tasks.`
  }
};

export default lesson3;
