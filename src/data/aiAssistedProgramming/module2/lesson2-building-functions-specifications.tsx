import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson2: VideoLesson = {
  id: 2,
  title: 'Building functions from specifications using AI',
  duration: '25 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/uwA3MMYBfAQ',
    textContent: `# Building Functions from Specifications Using AI

## **🧠 Introduction**

Building functions from specifications is a fundamental skill in software development. With AI assistance, this process becomes more efficient and accessible. This lesson explores how to use AI tools to create functions based on clear specifications and requirements.

---

## **🎯 Understanding Function Specifications**

A function specification typically includes:

* **Purpose**: What the function should accomplish
* **Inputs**: Parameters and their types
* **Outputs**: Return values and their types
* **Behavior**: How the function should work
* **Constraints**: Any limitations or requirements

---

## **🛠️ Using AI to Build Functions**

### **Step 1: Define Clear Specifications**

Before asking AI to build a function, clearly define:

* The function's purpose
* Input parameters and their types
* Expected return values
* Any specific requirements or constraints

### **Step 2: Craft Effective Prompts**

Use clear, specific prompts that include:

* Programming language preference
* Function name and signature
* Detailed behavior description
* Example inputs and outputs

### **Step 3: Review and Refine**

* Test the generated function
* Ask for improvements if needed
* Request explanations for complex logic
* Iterate on the implementation

---

## **💡 Best Practices**

* **Be Specific**: Include all relevant details in your prompt
* **Provide Examples**: Give sample inputs and expected outputs
* **Specify Language**: Always mention the programming language
* **Test Thoroughly**: Verify the function works as expected
* **Ask for Explanations**: Request comments or explanations for learning

---

## **✅ Summary**

Building functions from specifications using AI requires clear communication and systematic approach. By following best practices and crafting effective prompts, you can leverage AI to create robust, well-structured functions efficiently.`
  }
};

export default lesson2;
