import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson4: VideoLesson = {
  id: 4,
  title: 'Hands-on Activity: Setting up GitHub Copilot and ChatGPT for coding',
  duration: '30 minutes',
  videoUrl: 'https://youtu.be/98HKq-YQHl4',
  textContent: `# Hands-on Activity: Setting up GitHub Copilot and ChatGPT for Coding

Artificial Intelligence tools like **GitHub Copilot** and **ChatGPT** have become essential aids in modern software development. This hands-on activity guides you through setting up both tools to enhance your coding productivity, from autocompletion to conversational code assistance.

## **1. Setting up GitHub Copilot**

### **What is GitHub Copilot?**

GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It provides real-time code suggestions, entire functions, boilerplate code, and test cases directly inside your IDE.

### **Requirements:**

* A GitHub account (with Copilot access subscription or trial)
* A supported IDE such as Visual Studio Code, JetBrains IDEs, or Neovim

### **Step-by-Step Setup:**

#### **Step 1: Get GitHub Copilot Access**

* Go to [GitHub Copilot](https://github.com/features/copilot) and sign up for a subscription or start a free trial.
* Confirm your GitHub account has Copilot enabled.

#### **Step 2: Install GitHub Copilot Extension in IDE**

* For **Visual Studio Code**:
  * Open VS Code
  * Go to Extensions (Ctrl+Shift+X)
  * Search for **GitHub Copilot**
  * Click **Install**

* For **JetBrains IDEs** (IntelliJ, PyCharm, etc.):
  * Use the JetBrains Marketplace to find and install the Copilot plugin.

#### **Step 3: Sign in to GitHub inside your IDE**

* After installing, open any code file.
* When prompted, sign in with your GitHub credentials. This authenticates your Copilot usage.

#### **Step 4: Start Coding with GitHub Copilot**

* Begin typing code or comments describing what you want.
* Copilot will provide suggestions inline; use **Tab** to accept or arrow keys to browse alternatives.

### **Tips:**

* Review Copilot's suggestions carefully; some may be incorrect or insecure.
* Use comments to guide Copilot for more accurate code generation.
* Explore Copilot Labs (experimental features) if available.

## **2. Setting up ChatGPT for Coding Assistance**

### **What is ChatGPT for Coding?**

ChatGPT by OpenAI is a conversational AI that can generate, explain, debug, and refactor code based on natural language prompts. It is not embedded inside IDEs by default but can be integrated via plugins or used separately.

### **Requirements:**

* OpenAI account with access to ChatGPT (free or paid)
* Internet access to use the web interface or APIs
* (Optional) Plugins/extensions for IDE integration

### **Step-by-Step Setup:**

#### **Step 1: Access ChatGPT**

* Visit [chat.openai.com](https://chat.openai.com/)
* Log in or create a free OpenAI account.
* For advanced coding assistance, subscribe to ChatGPT Plus to access GPT-4/4.5 models.

#### **Step 2: Use ChatGPT via Web Interface**

* Type your coding queries, e.g.:
  * "Write a Python function to sort a list of numbers."
  * "Explain this JavaScript snippet."
  * "Find bugs in this C++ code."
* ChatGPT will respond with code snippets, explanations, or suggestions.

#### **Step 3 (Optional): IDE Integration**

* For some IDEs (VS Code, JetBrains), install unofficial ChatGPT plugins/extensions from their marketplaces.
* Authenticate with your OpenAI API key or ChatGPT credentials.
* Use the plugin sidebar or commands to interact with ChatGPT without leaving your editor.

### **Tips:**

* Use multi-turn conversations to refine or expand code outputs.
* Experiment with prompt phrasing for best results.
* Always validate generated code for correctness and security.

## **3. Best Practices for Using GitHub Copilot and ChatGPT Together**

* Use **GitHub Copilot** for inline real-time autocompletion and code snippets while coding.
* Use **ChatGPT** for more complex queries, understanding concepts, code review, or when you need explanations.
* Combine Copilot's rapid suggestions with ChatGPT's reasoning to boost productivity.
* Always review and test AI-generated code thoroughly before deployment.

## **4. Troubleshooting Common Issues**

| Issue | Possible Solution |
|-------|-------------------|
| GitHub Copilot not showing suggestions | Check subscription status, re-login, restart IDE, update extension |
| ChatGPT access denied or slow response | Check OpenAI account status, internet connectivity, try GPT-4 subscription |
| IDE plugin errors | Verify plugin compatibility, update IDE and extensions, consult official docs |

## **5. Additional Resources**

* [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
* [OpenAI ChatGPT FAQs](https://help.openai.com/en/articles/6783454-chatgpt-faq)
* YouTube tutorials for Copilot and ChatGPT integration
* Developer communities like Stack Overflow and GitHub Discussions

**Summary:**  
Setting up GitHub Copilot and ChatGPT involves creating accounts, installing extensions or using web interfaces, and authenticating your access. These tools together enable powerful AI-driven coding assistance that enhances productivity, learning, and code quality.`,
  content: {
    videoUrl: 'https://youtu.be/98HKq-YQHl4',
    textContent: `# Hands-on Activity: Setting up GitHub Copilot and ChatGPT for Coding

Artificial Intelligence tools like **GitHub Copilot** and **ChatGPT** have become essential aids in modern software development. This hands-on activity guides you through setting up both tools to enhance your coding productivity, from autocompletion to conversational code assistance.

## **1. Setting up GitHub Copilot**

### **What is GitHub Copilot?**

GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It provides real-time code suggestions, entire functions, boilerplate code, and test cases directly inside your IDE.

### **Requirements:**

* A GitHub account (with Copilot access subscription or trial)
* A supported IDE such as Visual Studio Code, JetBrains IDEs, or Neovim

### **Step-by-Step Setup:**

#### **Step 1: Get GitHub Copilot Access**

* Go to [GitHub Copilot](https://github.com/features/copilot) and sign up for a subscription or start a free trial.
* Confirm your GitHub account has Copilot enabled.

#### **Step 2: Install GitHub Copilot Extension in IDE**

* For **Visual Studio Code**:
  * Open VS Code
  * Go to Extensions (Ctrl+Shift+X)
  * Search for **GitHub Copilot**
  * Click **Install**

* For **JetBrains IDEs** (IntelliJ, PyCharm, etc.):
  * Use the JetBrains Marketplace to find and install the Copilot plugin.

#### **Step 3: Sign in to GitHub inside your IDE**

* After installing, open any code file.
* When prompted, sign in with your GitHub credentials. This authenticates your Copilot usage.

#### **Step 4: Start Coding with GitHub Copilot**

* Begin typing code or comments describing what you want.
* Copilot will provide suggestions inline; use **Tab** to accept or arrow keys to browse alternatives.

### **Tips:**

* Review Copilot's suggestions carefully; some may be incorrect or insecure.
* Use comments to guide Copilot for more accurate code generation.
* Explore Copilot Labs (experimental features) if available.

## **2. Setting up ChatGPT for Coding Assistance**

### **What is ChatGPT for Coding?**

ChatGPT by OpenAI is a conversational AI that can generate, explain, debug, and refactor code based on natural language prompts. It is not embedded inside IDEs by default but can be integrated via plugins or used separately.

### **Requirements:**

* OpenAI account with access to ChatGPT (free or paid)
* Internet access to use the web interface or APIs
* (Optional) Plugins/extensions for IDE integration

### **Step-by-Step Setup:**

#### **Step 1: Access ChatGPT**

* Visit [chat.openai.com](https://chat.openai.com/)
* Log in or create a free OpenAI account.
* For advanced coding assistance, subscribe to ChatGPT Plus to access GPT-4/4.5 models.

#### **Step 2: Use ChatGPT via Web Interface**

* Type your coding queries, e.g.:
  * "Write a Python function to sort a list of numbers."
  * "Explain this JavaScript snippet."
  * "Find bugs in this C++ code."
* ChatGPT will respond with code snippets, explanations, or suggestions.

#### **Step 3 (Optional): IDE Integration**

* For some IDEs (VS Code, JetBrains), install unofficial ChatGPT plugins/extensions from their marketplaces.
* Authenticate with your OpenAI API key or ChatGPT credentials.
* Use the plugin sidebar or commands to interact with ChatGPT without leaving your editor.

### **Tips:**

* Use multi-turn conversations to refine or expand code outputs.
* Experiment with prompt phrasing for best results.
* Always validate generated code for correctness and security.

## **3. Best Practices for Using GitHub Copilot and ChatGPT Together**

* Use **GitHub Copilot** for inline real-time autocompletion and code snippets while coding.
* Use **ChatGPT** for more complex queries, understanding concepts, code review, or when you need explanations.
* Combine Copilot's rapid suggestions with ChatGPT's reasoning to boost productivity.
* Always review and test AI-generated code thoroughly before deployment.

## **4. Troubleshooting Common Issues**

| Issue | Possible Solution |
|-------|-------------------|
| GitHub Copilot not showing suggestions | Check subscription status, re-login, restart IDE, update extension |
| ChatGPT access denied or slow response | Check OpenAI account status, internet connectivity, try GPT-4 subscription |
| IDE plugin errors | Verify plugin compatibility, update IDE and extensions, consult official docs |

## **5. Additional Resources**

* [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
* [OpenAI ChatGPT FAQs](https://help.openai.com/en/articles/6783454-chatgpt-faq)
* YouTube tutorials for Copilot and ChatGPT integration
* Developer communities like Stack Overflow and GitHub Discussions

**Summary:**  
Setting up GitHub Copilot and ChatGPT involves creating accounts, installing extensions or using web interfaces, and authenticating your access. These tools together enable powerful AI-driven coding assistance that enhances productivity, learning, and code quality.`
  }
};

export default lesson4;
