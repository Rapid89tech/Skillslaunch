import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson4: VideoLesson = {
  id: 4,
  title: 'Hands-on Activity: Create a REST API using AI assistance',
  duration: '45 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://youtu.be/uwA3MMYBfAQ',
    textContent: `# Hands-on Activity: Create a REST API Using AI Assistance

## **🧠 Introduction**

This hands-on activity will guide you through creating a REST API using AI assistance. You'll learn how to leverage AI tools to design, implement, and test a complete API from scratch.

---

## **🎯 Learning Objectives**

* Design a REST API structure using AI
* Generate API endpoints with proper HTTP methods
* Implement data validation and error handling
* Create comprehensive documentation
* Test the API functionality

---

## **🛠️ Step-by-Step Guide**

### **Step 1: Define API Requirements**

Start by clearly defining what your API should do:

* **Purpose**: What problem does your API solve?
* **Endpoints**: What resources will your API manage?
* **Data Models**: What data structures will you use?
* **Authentication**: Will you need user authentication?

### **Step 2: Use AI to Design the API Structure**

Ask AI to help you design the API:

* "Design a REST API for a task management system"
* "Create API endpoints for user management"
* "Define data models for a blog API"

### **Step 3: Generate Implementation Code**

Use AI to generate the actual code:

* Framework selection (Express.js, Flask, FastAPI, etc.)
* Route definitions
* Database models
* Middleware setup

### **Step 4: Add Validation and Error Handling**

Request AI to add:

* Input validation
* Error handling middleware
* Status codes and responses
* Logging and monitoring

### **Step 5: Create Documentation**

Ask AI to generate:

* API documentation
* Usage examples
* Testing instructions
* Deployment guidelines

---

## **💡 AI Prompting Tips**

* **Be Specific**: Include framework preferences and requirements
* **Iterate**: Start with basic structure, then add features
* **Test**: Ask AI to generate test cases
* **Optimize**: Request performance improvements and security enhancements

---

## **✅ Summary**

Creating a REST API with AI assistance demonstrates the power of combining human creativity with AI efficiency. By following a systematic approach and using effective prompts, you can build robust APIs faster than ever before.`
  }
};

export default lesson4;
