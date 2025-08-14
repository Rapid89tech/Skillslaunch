

**Course Modules:**

**Week 1: Introduction to AI in Programming**

1. **Evolution of programming assistance tools**

The **evolution of programming assistance tools** reflects the journey from basic code editors to today’s intelligent AI-powered assistants. Here's a concise breakdown of how these tools have evolved over time:

---

**1\. Text Editors and Syntax Highlighting (1970s–1980s)**

* **Early Tools**: Programmers used basic text editors like **Vi** or **Emacs**.

* **Assistance Provided**: None beyond text editing. Developers had to remember syntax, structure, and functions.

* **Advancement**: Introduction of **syntax highlighting**—different colors for keywords, strings, and errors—to help read code.

---

**2\. Integrated Development Environments (IDEs) (1990s)**

* **Examples**: Turbo Pascal, Visual Studio, Eclipse.

* **New Features**:

  * **Auto-completion** (IntelliSense)

  * **Debuggers**

  * **Refactoring tools**

  * **Code navigation**

* **Impact**: Significantly reduced the need to memorize functions or search for errors manually.

---

**3\. Static Code Analysis & Linters (2000s)**

* **Purpose**: Automatically analyze code for potential bugs, stylistic errors, and security flaws.

* **Examples**: ESLint, Pylint, SonarQube.

* **Benefits**: Encouraged code quality and team-wide consistency in large codebases.

---

**4\. Online Collaboration & Snippet Sharing (2010s)**

* **Platforms**: Stack Overflow, GitHub Gists, JSFiddle.

* **Evolutionary Shift**: Developers started relying on community-shared snippets, documentation, and tutorials.

* **Tooling Impact**: Editors started integrating with these platforms for faster lookup and reuse.

---

**5\. AI-Powered Assistants (2020s–Present)**

* **Key Players**: GitHub Copilot, ChatGPT, Tabnine, Amazon CodeWhisperer.

* **Capabilities**:

  * Suggest complete code blocks based on natural language prompts.

  * Explain and debug code.

  * Refactor and optimize existing code.

  * Generate documentation and tests.

* **Underlying Tech**: Large Language Models (LLMs) trained on massive codebases and documentation.

---

**6\. Real-Time Collaborative AI Integration (Emerging Trend)**

* **Concept**: Combining AI with real-time collaboration tools (like Replit Ghostwriter, Codeium).

* **Features**:

  * Co-piloting with teams.

  * Real-time code explanation and review.

  * Instant deployment suggestions and API integration.

---

**Summary Timeline:**

| Era | Tool Type | Assistance Provided |
| :---- | :---- | :---- |
| 1970s–1980s | Text Editors | Basic editing, no coding help |
| 1990s | IDEs | Auto-complete, debug, refactor tools |
| 2000s | Linters & Analyzers | Static analysis, quality enforcement |
| 2010s | Online Snippets & Platforms | Reusable code, peer help |
| 2020s | AI Code Assistants | Code generation, debugging, documentation |
| Future | Integrated AI Collaboration | Real-time assistance, intelligent teamwork |

2. **Types of AI tools: autocompletion, code generation, static analysis**

## **Types of AI Tools: Autocompletion, Code Generation, Static Analysis**

Artificial Intelligence (AI) has significantly transformed the software development landscape. Among the various categories of AI tools used by developers, **autocompletion**, **code generation**, and **static analysis** stand out as vital components in modern development workflows. These tools enhance productivity, code quality, and maintainability.

Youtube link: [https://youtu.be/0-L1QnRxIcE](https://youtu.be/0-L1QnRxIcE) 

---

### **1\. Autocompletion**

#### **Definition:**

Autocompletion tools help developers by predicting and suggesting the next word, function, variable, or code snippet as they type. These tools rely on context and learned patterns from large codebases to provide accurate suggestions.

#### **Examples:**

* **GitHub Copilot**: Uses OpenAI Codex to suggest lines or blocks of code.

* **IntelliSense (Visual Studio)**: Offers keyword completion, method suggestions, and parameter info.

* **TabNine**: AI-powered autocompletion tool using deep learning models.

#### **Benefits:**

* Reduces typing effort.

* Minimizes syntax and logical errors.

* Increases coding speed.

* Helps beginners understand API usage and coding patterns.

#### **Challenges:**

* Can sometimes provide irrelevant or incorrect suggestions.

* Over-reliance may reduce the understanding of core logic.

* Privacy concerns if code is sent to external servers for analysis.

---

### **2\. Code Generation**

#### **Definition:**

Code generation tools can create entire functions, classes, or even applications based on high-level descriptions or prompts. They transform natural language or partial code into functional software components.

#### **Types:**

* **Template-based generation**: Uses predefined templates for generating boilerplate code.

* **AI-based generation**: Leverages machine learning (especially large language models) to create unique and complex code.

#### **Examples:**

* **OpenAI Codex (used in Copilot)**: Generates code from natural language instructions.

* **Amazon CodeWhisperer**: Provides suggestions and generates code for AWS-related tasks.

* **Sketch2Code (Microsoft)**: Converts hand-drawn UI sketches into HTML code.

#### **Benefits:**

* Speeds up prototyping and repetitive tasks.

* Enhances productivity by reducing manual effort.

* Assists non-programmers in developing simple applications.

#### **Challenges:**

* Generated code may not be optimized or secure.

* May introduce bugs if misunderstood by the model.

* Needs human validation for production readiness.

Youtube link : [https://youtu.be/Kd0QGZMy\_tA](https://youtu.be/Kd0QGZMy_tA) 

---

### **3\. Static Analysis**

#### **Definition:**

Static analysis tools examine code without executing it, to detect potential errors, vulnerabilities, and code quality issues. AI enhances these tools by identifying complex patterns and predicting potential risks based on historical data.

#### **Functionality Includes:**

* Syntax and semantic error detection.

* Security vulnerability scanning.

* Code style and standards enforcement.

* Dead code detection.

* Dependency and flow analysis.

#### **Examples:**

* **SonarQube**: Detects bugs, code smells, and security vulnerabilities.

* **DeepCode (by Snyk)**: AI-powered static analysis focusing on security.

* **Codacy**: Offers automated code reviews and analysis.

#### **Benefits:**

* Improves code quality before runtime.

* Helps maintain consistency across large codebases.

* Reduces cost of fixing bugs by catching them early.

* Enhances security by flagging known vulnerabilities.

#### **Challenges:**

* Can produce false positives/negatives.

* May slow down development pipelines if too strict.

* Needs integration with CI/CD for maximum benefit.

Youtube video: [https://youtu.be/\_4gSN\_nCG9k](https://youtu.be/_4gSN_nCG9k) 

---

### **Summary Comparison Table**

| Feature | Autocompletion | Code Generation | Static Analysis |
| ----- | ----- | ----- | ----- |
| **Goal** | Assist while coding | Automate code creation | Detect issues in code |
| **Execution** | Real-time suggestions | Generates blocks of code | Analyzes code without running |
| **Use Case** | Faster typing, IDE help | Function/class generation | Quality and security checks |
| **AI Involvement** | Predict next tokens | Natural language to code | Pattern recognition, bug prediction |
| **Examples** | Copilot, TabNine | Codex, CodeWhisperer | SonarQube, DeepCode |

---

### **Conclusion**

Autocompletion, code generation, and static analysis are transformative AI tools reshaping the way developers write and manage code. When used together, they create a powerful toolkit that accelerates development, reduces errors, and promotes best practices. However, developers must understand their limitations and always review AI-generated or AI-assisted outputs to ensure correctness, performance, and security.

Youtube link: [https://youtu.be/7w2cqAMCnX8](https://youtu.be/7w2cqAMCnX8) 

3. **Overview of leading tools (Copilot, ChatGPT, Tabnine, Cody, CodeWhisperer)**

## **Overview of Leading AI Developer Tools**

As AI continues to revolutionize software development, several advanced tools have emerged to assist developers with code generation, autocompletion, debugging, and documentation. Among these, GitHub Copilot, ChatGPT, Tabnine, Cody (by Sourcegraph), and Amazon CodeWhisperer are leading the transformation of the coding experience.

youtube link : https://youtu.be/gq507TbglYY

---

### 1\. **GitHub Copilot**

#### Developed by: GitHub in collaboration with OpenAI

#### Powered by: OpenAI Codex (based on GPT models)

#### Functionality:

* Autocompletes code in real time.

* Suggests full functions, loops, boilerplate code, and test cases.

* Supports multiple languages (JavaScript, Python, TypeScript, Go, Ruby, etc.)

* Integrates with Visual Studio Code, JetBrains IDEs, Neovim, and others.

#### Strengths:

* Highly contextual suggestions based on surrounding code.

* Handles complex function implementations.

* Frequently updated and deeply integrated with GitHub workflows.

#### Limitations:

* Sometimes generates insecure or suboptimal code.

* Requires user verification and editing.

Youtube link: [https://youtu.be/LEsPuLjwXn0](https://youtu.be/LEsPuLjwXn0) 

---

### **2\. ChatGPT (for Coding Assistance)**

#### Developed by: OpenAI

#### Powered by: GPT-4 / GPT-4.5 (with Pro version access)

#### Functionality:

* Natural language interface for querying, debugging, explaining, or generating code.

* Can review and refactor code snippets.

* Used for pseudocode-to-code generation, algorithm explanation, and learning new languages.

* Plugins and custom GPTs can integrate ChatGPT with IDEs and other dev tools.

#### Strengths:

* Powerful conversational interface.

* Supports multi-turn discussions and explanations.

* Excellent for learning and reasoning tasks.

#### Limitations:

* Not directly embedded in IDEs (unless integrated manually).

* Less real-time than autocompletion tools.

Youtube link: https://www.youtube.com/watch?v=7I0BJyebaek

---

### **3\. Tabnine**

#### Developed by: Tabnine

#### Powered by: Proprietary AI models (based on GPT and smaller models)

#### Functionality:

* Local and cloud-based code autocompletion.

* Predicts the next line or token based on context.

* Supports multiple languages and frameworks.

* Strong focus on privacy with local model options.

#### Strengths:

* Fast and lightweight.

* Offers both free and enterprise versions.

* Excellent for teams with privacy concerns.

#### Limitations:

* Less intelligent on complex multi-line logic compared to Copilot or GPT.

* Limited reasoning capabilities.

---

### **4\. Cody (by Sourcegraph)**

#### Developed by: Sourcegraph

#### Powered by: LLMs (Claude, GPT-4, etc.) \+ Sourcegraph's code graph

#### Functionality:

* Provides context-aware answers by referencing your entire codebase.

* Supports code navigation, refactoring, and high-quality code search.

* Great for large codebases and enterprise settings.

#### Strengths:

* Deep understanding of codebase due to Sourcegraph’s indexing.

* Very useful for onboarding, documentation generation, and large project maintenance.

* Highly accurate in referencing internal symbols and code patterns.

#### Limitations:

* Requires integration with Sourcegraph.

* Maybe overkill for small projects.

Youtube link: [https://www.youtube.com/watch?v=lpdzv5hWs0o](https://www.youtube.com/watch?v=lpdzv5hWs0o) 

---

### **5\. Amazon CodeWhisperer**

#### Developed by: Amazon Web Services (AWS)

#### Powered by: Proprietary ML models

#### Functionality:

* Code suggestion and generation tailored to AWS environments.

* Helps write secure, efficient code using AWS APIs.

* Integrated with IDEs (VS Code, JetBrains) and AWS tooling.

#### Strengths:

* Strong performance with AWS-specific tasks (e.g., Lambda, S3, DynamoDB).

* Free tier for individual users.

* Built-in security scans for detecting vulnerabilities.

#### Limitations:

* Less effective for general-purpose development outside AWS.

* Smaller model context compared to GPT-4.

Youtube link: [https://www.youtube.com/watch?v=j8BoVmHKFlI](https://www.youtube.com/watch?v=j8BoVmHKFlI) 

---

### Comparison Table

| Tool | Best Use Case | IDE Integration | Context Awareness | Strengths |
| ----- | ----- | ----- | ----- | ----- |
| GitHub Copilot | Real-time autocompletion | ✅ Yes | ✅ High | Fast, deep IDE integration |
| ChatGPT | Code explanation & reasoning | ❌ (Manual) | ✅ Very High | Conversational, multi-step logic |
| Tabnine | Lightweight autocompletion | ✅ Yes | ⚠️ Medium | Fast, private, local options |
| Cody | Large codebase understanding | ✅ With Sourcegraph | ✅ High | Project-scale code intelligence |
| CodeWhisperer | AWS-focused development | ✅ Yes | ⚠️ Moderate | Optimized for AWS & secure code |

---

### **Conclusion**

These leading AI coding tools each cater to different developer needs:

Use GitHub Copilot for rapid, real-time coding inside your IDE.

Use ChatGPT for in-depth assistance, explanations, and flexible problem-solving.

Use Tabnine when you want privacy and fast completions on local devices.

Use Cody for understanding and navigating large, complex codebases.

Use CodeWhisperer if you're working heavily within AWS services and need secure suggestions.

Youtube link: [https://youtu.be/gq507TbglYY](https://youtu.be/gq507TbglYY) 

### **AI Developer Tools Quiz**

**1\. Which AI tool is developed by GitHub in collaboration with OpenAI?**  
 a) Tabnine  
 b) Cody  
 c) GitHub Copilot  
 d) Amazon CodeWhisperer

---

**2\. What powers GitHub Copilot’s code generation capabilities?**  
 a) Amazon ML models  
 b) OpenAI Codex (GPT models)  
 c) Tabnine proprietary AI  
 d) Sourcegraph code graph

---

**3\. Which AI tool provides a natural language conversational interface for coding assistance?**  
 a) GitHub Copilot  
 b) ChatGPT  
 c) Tabnine  
 d) Cody

---

**4\. What is one main limitation of ChatGPT compared to tools like Copilot?**  
 a) Does not support multiple languages  
 b) Cannot generate code  
 c) Not directly embedded in IDEs by default  
 d) No conversational ability

---

**5\. Which tool is known for strong privacy features and offers local AI models for code completion?**  
 a) ChatGPT  
 b) Tabnine  
 c) Cody  
 d) Amazon CodeWhisperer

---

**6\. Cody by Sourcegraph is especially useful for:**  
 a) Small projects with simple code  
 b) Large codebases and enterprise environments  
 c) Writing AWS-specific code  
 d) Generating UI code from sketches

---

**7\. Amazon CodeWhisperer is optimized for which environment?**  
 a) Google Cloud Platform  
 b) Microsoft Azure  
 c) AWS (Amazon Web Services)  
 d) On-premises servers

---

**8\. Which tool integrates deeply with GitHub workflows and multiple IDEs like VS Code and JetBrains?**  
 a) Cody  
 b) GitHub Copilot  
 c) Tabnine  
 d) Amazon CodeWhisperer

---

**9\. What functionality is NOT a primary feature of these AI developer tools?**  
 a) Real-time code autocompletion  
 b) Full project deployment automation  
 c) Code explanation and debugging assistance  
 d) Context-aware code suggestions

---

**10\. Which AI tool requires integration with Sourcegraph to be used effectively?**  
 a) Tabnine  
 b) Cody  
 c) ChatGPT  
 d) GitHub Copilot

4. Hands-on Activity: Setting up GitHub Copilot and ChatGPT for coding

# **Hands-on Activity: Setting up GitHub Copilot and ChatGPT for Coding**

Artificial Intelligence tools like **GitHub Copilot** and **ChatGPT** have become essential aids in modern software development. This hands-on activity guides you through setting up both tools to enhance your coding productivity, from autocompletion to conversational code assistance.

Youtube link: [https://youtu.be/98HKq-YQHl4](https://youtu.be/98HKq-YQHl4) 

---

## **1\. Setting up GitHub Copilot**

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

Youtube link: [https://youtu.be/n0NlxUyA7FI](https://youtu.be/n0NlxUyA7FI) 

### **Tips:**

* Review Copilot’s suggestions carefully; some may be incorrect or insecure.

* Use comments to guide Copilot for more accurate code generation.

* Explore Copilot Labs (experimental features) if available.

---

## **2\. Setting up ChatGPT for Coding Assistance**

### **What is ChatGPT for Coding?**

ChatGPT by OpenAI is a conversational AI that can generate, explain, debug, and refactor code based on natural language prompts. It is not embedded inside IDEs by default but can be integrated via plugins or used separately.

Youtube link: [https://youtu.be/7I0BJyebaek](https://youtu.be/7I0BJyebaek) 

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

Youtube link:[https://youtu.be/AYU8LuocjZ0](https://youtu.be/AYU8LuocjZ0) 

---

## **3\. Best Practices for Using GitHub Copilot and ChatGPT Together**

* Use **GitHub Copilot** for inline real-time autocompletion and code snippets while coding.

* Use **ChatGPT** for more complex queries, understanding concepts, code review, or when you need explanations.

* Combine Copilot’s rapid suggestions with ChatGPT’s reasoning to boost productivity.

* Always review and test AI-generated code thoroughly before deployment.

---

## **4\. Troubleshooting Common Issues**

| Issue | Possible Solution |
| ----- | ----- |
| GitHub Copilot not showing suggestions | Check subscription status, re-login, restart IDE, update extension |
| ChatGPT access denied or slow response | Check OpenAI account status, internet connectivity, try GPT-4 subscription |
| IDE plugin errors | Verify plugin compatibility, update IDE and extensions, consult official docs |

---

## **5\. Additional Resources**

* [GitHub Copilot Documentation](https://docs.github.com/en/copilot)

* [OpenAI ChatGPT FAQs](https://help.openai.com/en/articles/6783454-chatgpt-faq)

* YouTube tutorials for Copilot and ChatGPT integration

* Developer communities like Stack Overflow and GitHub Discussions

---

**Summary:**  
 Setting up GitHub Copilot and ChatGPT involves creating accounts, installing extensions or using web interfaces, and authenticating your access. These tools together enable powerful AI-driven coding assistance that enhances productivity, learning, and code quality.

Youtube link: [https://youtu.be/98HKq-YQHl4](https://youtu.be/98HKq-YQHl4) 

### **✅ Quiz: Setting up GitHub Copilot and ChatGPT for Coding**

**1\. What is the main function of GitHub Copilot?**  
 A. Debugging websites  
 B. Hosting Git repositories  
 C. Real-time code autocompletion and suggestions  
 D. Refactoring old code

**2\. To use GitHub Copilot, what must you have first?**  
 A. A LinkedIn account  
 B. A GitHub account with Copilot access  
 C. A Google account  
 D. An AWS subscription

**3\. Which IDEs officially support GitHub Copilot? (Select all that apply)**  
 A. Notepad++  
 B. Visual Studio Code  
 C. JetBrains IDEs (e.g., PyCharm, IntelliJ)  
 D. Neovim

**4\. What is the final step in setting up GitHub Copilot in your IDE?**  
 A. Reboot your computer  
 B. Install Java  
 C. Sign in with your GitHub credentials  
 D. Purchase a license for Python

**5\. What is one recommended way to guide GitHub Copilot’s suggestions?**  
 A. Speak into your microphone  
 B. Use comments in your code  
 C. Draw a diagram  
 D. Enable Dark Mode

**6\. What kind of tasks is ChatGPT best used for in coding?**  
 A. Inline autocompletion only  
 B. Running test cases in IDE  
 C. Code explanation, debugging, and complex queries  
 D. Changing IDE themes

**7\. How can developers access ChatGPT for coding assistance?**  
 A. Using GitHub CLI  
 B. By visiting chat.openai.com  
 C. Through the AWS Console  
 D. Via Stack Overflow

**8\. Which step is optional when setting up ChatGPT for use in an IDE?**  
 A. Creating an OpenAI account  
 B. Installing unofficial ChatGPT plugins/extensions  
 C. Logging in to chat.openai.com  
 D. Subscribing to ChatGPT Plus

**9\. When should you use ChatGPT instead of GitHub Copilot?**  
 A. For simple syntax completion  
 B. For IDE color theme changes  
 C. For debugging, code reviews, or in-depth questions  
 D. For setting environment variables

**10\. What is a best practice when using AI-generated code from Copilot or ChatGPT?**  
 A. Use it without changes  
 B. Trust it for secure applications immediately  
 C. Always review and test the code thoroughly  
 D. Copy and paste from Stack Overflow instead

**Week 2: AI-Assisted Code Generation**

1. Writing effective prompts for code generation

# **Writing Effective Prompts for Code Generation**

## **🧠 Introduction**

AI tools like **GitHub Copilot**, **ChatGPT**, and others can generate, debug, and refactor code based on *prompts* — natural language instructions. The effectiveness of the output depends heavily on how well you craft your prompt.

**Writing effective prompts** is an essential skill for developers who want to make the most out of AI-driven coding tools. A well-crafted prompt can save hours of development time and help generate high-quality, readable, and functional code.

---

## **🎯 What is a Prompt?**

A **prompt** is the input you give to an AI model to generate a response. For code generation, it’s typically a **natural language instruction** that describes the task you want to accomplish.

Example:

"Write a Python function that checks if a number is a prime number."

Youtube link: [https://youtu.be/uwA3MMYBfAQ](https://youtu.be/uwA3MMYBfAQ) 

---

## **🧩 Key Principles of Writing Effective Prompts**

### **1\. Be Clear and Specific**

Avoid vague requests. Instead, clearly state what the code should do, the language to use, and any constraints.

✅ Example:

“Write a JavaScript function that takes a string and returns true if it is a palindrome.”

❌ Vague:

“Make a function for strings.”

---

### **2\. Mention the Programming Language**

Always specify the language unless you want the AI to choose one.

✅ Example:

“Write a Python script to read a CSV file and calculate the average of a column.”

---

### **3\. Include the Expected Inputs and Outputs**

Let the AI know what kind of data it should handle.

✅ Example:

“Create a Python function that takes a list of integers and returns a sorted list in descending order.”

---

### **4\. Define the Function or Class Structure if Needed**

If you have a specific format or naming in mind, include it.

✅ Example:

“Write a Java method called `calculateTax` that takes an income value and returns the tax based on brackets.”

---

### **5\. Ask for Comments or Explanation (if learning)**

You can ask the AI to explain the code or include inline comments.

✅ Example:

“Write a commented C++ function to calculate factorial using recursion.”

---

### **6\. Use Step-by-Step Instructions**

Break down complex tasks into smaller steps. You can use multi-turn prompting or ask for step-wise solutions.

✅ Example:

1. “Write a Python class for a bank account with deposit and withdrawal methods.”

2. “Now add a method to calculate monthly interest.”

---

### **7\. Specify the Output Format**

Let the AI know how the code should be returned: plain, minimal, commented, etc.

✅ Example:

“Give me a clean JavaScript snippet with no extra explanation.”

---

### **8\. Use Examples**

Including example inputs and expected outputs improves accuracy.

✅ Example:

“Write a function in Python that converts Celsius to Fahrenheit. For example, input: 0 → output: 32”

---

### **9\. Indicate Code Constraints or Best Practices**

You can include instructions for performance, security, or readability.

✅ Example:

“Write a secure PHP login system with prepared statements to prevent SQL injection.”

---

## **🧪 Prompting for Different Use Cases**

| Goal | Prompt Example |
| ----- | ----- |
| Generate new code | "Write a Python function to generate Fibonacci numbers up to N." |
| Debug code | "Find and fix bugs in this JavaScript function that filters even numbers." |
| Refactor code | "Refactor this Python function to be more efficient and readable." |
| Add comments | "Add inline comments to this C\# function that calculates compound interest." |
| Explain code | "Explain what this Go function does line by line." |
| Translate code | "Convert this Java function to equivalent code in Kotlin." |

---

## **⚠️ Common Prompting Mistakes**

| Mistake | Why It’s a Problem | Example |
| ----- | ----- | ----- |
| Too vague | AI doesn’t know what you want | “Make a function” |
| No language specified | Results may be in the wrong language | “Sort numbers” |
| Asking too much at once | Increases risk of errors or incomplete responses | “Make a web app” |
| No input/output description | AI may guess wrong data types or structures | “Write code to convert” |

---

## **💡 Tips for Iteration**

* **Start simple**, then build complexity in follow-up prompts.

* **Ask follow-up questions** like “Can you optimize this?” or “Can you add error handling?”

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

2. Boost productivity

3. Learn programming faster

4. Collaborate with AI as a real coding assistant

5. Building functions from specifications using AI

6. Code generation across different languages (Python, JavaScript, etc.)

7. Hands-on Activity: Create a REST API using AI assistance

8. Assignment: Build a CLI tool with AI help

### **✅ QUIZ: Writing Effective Prompts for Code Generation**

#### **Part 1: Multiple Choice (10 Questions)**

1. **What is the primary reason to be clear and specific in a code generation prompt?**  
    A. To make the prompt longer  
    B. To avoid syntax errors  
    C. To help the AI generate accurate, relevant code  
    D. To use more advanced programming languages

2. **Which of the following is the BEST example of a clear and specific prompt?**  
    A. "Make a function"  
    B. "Sort numbers"  
    C. "Write a Python function to check if a string is a palindrome."  
    D. "Give me code"

3. **What should a well-written prompt include to help the AI understand data handling?**  
    A. File path  
    B. Inputs and outputs  
    C. IDE name  
    D. Code font

4. **Which programming language is missing from this prompt? “Write a function that sorts a list.”**  
    A. Python  
    B. JavaScript  
    C. It’s not specified  
    D. C++

5. **If you want the AI to follow a specific structure like class names or function names, what should you do?**  
    A. Let the AI decide  
    B. Leave it out  
    C. Include it in the prompt  
    D. Ask it afterward

6. **Why is it helpful to include example inputs and outputs in your prompt?**  
    A. To make the code run faster  
    B. To improve accuracy of generated code  
    C. To help you memorize syntax  
    D. To reduce internet usage

7. **Which prompt is most appropriate for refactoring code?**  
    A. "Make a calculator."  
    B. "Translate this code to Python."  
    C. "Refactor this function to be more readable."  
    D. "Explain this class line by line."

8. **What is a good follow-up prompt after asking the AI to generate a function?**  
    A. "Start over"  
    B. "Now add error handling"  
    C. "Tell me a joke"  
    D. "Make it a website"

9. **Which of the following is a code constraint example?**  
    A. "Use recursion to solve the problem"  
    B. "Use dark theme"  
    C. "Make the font bigger"  
    D. "Use emojis"

10. **What tool is NOT typically used for AI-assisted code generation?**  
     A. GitHub Copilot  
     B. ChatGPT  
     C. Microsoft Word  
     D. Google Gemini

---

#### **Part 2: True or False (5 Questions)**

11. **A vague prompt can lead to poor or unrelated code generation.**  
     True / False

12. **You should never mention the programming language in a code prompt.**  
     True / False

13. **Asking the AI to explain code can help you learn faster.**  
     True / False

14. **You should always trust and deploy AI-generated code without testing.**  
     True / False

15. **Prompting is only useful when generating new code, not for debugging or explaining.**  
     True / False

---

#### **Part 3: Scenario-Based (5 Questions)**

16. **You write: “Write a function to process data.” What’s wrong with this prompt?**  
     A. It’s too detailed  
     B. It’s vague and lacks input/output info  
     C. It specifies the language  
     D. It’s too short to process

17. **You want a function that calculates the square of a number in JavaScript, with an example. Choose the best prompt:**  
     A. “Square a number.”  
     B. “Make math function.”  
     C. “Write a JavaScript function that returns the square of a number. Example: input \= 4 → output \= 16.”  
     D. “Square this.”

18. **You’re learning and want the AI to explain code that calculates factorial using recursion. Which is the best prompt?**  
     A. “Just give me the code”  
     B. “Write a commented C++ function to calculate factorial using recursion.”  
     C. “Explain factorial”  
     D. “Make factorial code”

19. **Your prompt says: “Sort this list.” The AI sorts it in ascending order, but you wanted descending. How could you fix the prompt?**  
     A. Add “in descending order” to the prompt  
     B. Use emojis  
     C. Don’t include the word “sort”  
     D. Make the list shorter

20. **You gave a prompt to make a bank account class. Now you want to add interest calculation. What should you do?**  
     A. “Erase everything and add interest.”  
     B. “Now add a method to calculate monthly interest.”  
     C. “Make a website for banking”  
     D. “I’m done.”

**Week 3: AI-Assisted Debugging and Refactoring**

1. Prompting AI to identify and fix bugs

# **Prompting AI to Identify and Fix Bugs in Code**

Artificial intelligence tools like **ChatGPT**, **GitHub Copilot**, **Replit Ghostwriter**, and **Amazon CodeWhisperer** have revolutionized software development. One of their most practical applications is in **debugging** — identifying, understanding, and fixing bugs in code using natural language prompts.

Knowing **how to effectively prompt AI** to help with bugs is a critical skill that can drastically reduce debugging time and improve code reliability.

Youtube link: [https://youtu.be/dYZCYbf9BJA](https://youtu.be/dYZCYbf9BJA) 

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

### **1\. Provide the Full Context**

Include the relevant portion of the code (even better: full function or class) and describe:

* What the code is supposed to do.

* What it is doing instead (actual behavior).

* Any error messages received.

**Example Prompt**:

“Here’s my Python function to calculate averages. It crashes when I pass an empty list. Can you find and fix the bug?”

python

CopyEdit

`def average(nums):`

    `return sum(nums) / len(nums)`

---

### **2\. State the Expected Behavior**

AI tools work better when you tell them what you *want* the code to do.

**Prompt Example**:

“This JavaScript function is supposed to filter even numbers, but it returns odds. What’s wrong and how do I fix it?”

js

CopyEdit

`function filterEven(arr) {`

  `return arr.filter(num => num % 2 === 1);`

`}`

**Fix Explanation**:  
 The condition should be `num % 2 === 0` to return even numbers.

---

### **3\. Include Error Output if Available**

If you have error messages or stack traces, paste them with your code.

**Prompt Example**:

“This code throws a `ZeroDivisionError` when I run it with an empty list. Fix it so that it returns 0 instead.”

---

### **4\. Ask for an Explanation**

If you’re learning, prompt the AI to explain what went wrong and why.

**Prompt Example**:

“Explain why this C++ loop is skipping the first element.”

---

### **5\. Use Follow-up Prompts**

After an initial bug is fixed, you can go further:

* “Now add error handling.”

* “Can you make this more efficient?”

* “Add unit tests to check edge cases.”

---

## **🔄 Common Prompt Templates**

| Purpose | Prompt Example |
| ----- | ----- |
| Find bugs | “Can you find the bug in this function that crashes with null input?” |
| Fix logic error | “This sorting function doesn’t work with negative numbers. Fix it.” |
| Debug with error | “Here’s my code and the error message I get. Help me fix it.” |
| Explain the issue | “Why is this function returning undefined instead of the expected result?” |
| Improve reliability | “Add input validation to this function to avoid runtime errors.” |
| Suggest tests | “Write test cases that might break this function.” |

---

## **🧪 Example Scenarios**

### **🐍 Python Bug Fix**

**Prompt**:

“Fix this Python code that crashes when the list is empty.”

python

CopyEdit

`def get_average(lst):`

    `return sum(lst) / len(lst)`

**AI Response**:

python

CopyEdit

`def get_average(lst):`

    `if not lst:`

        `return 0`

    `return sum(lst) / len(lst)`

---

### **💻 JavaScript Debugging with Explanation**

**Prompt**:

“This code returns NaN when multiplying numbers. What’s wrong?”

js

CopyEdit

`function multiply(a, b) {`

  `return a * b || 0;`

`}`

**AI Response**:

If `a * b` is 0, the `||` operator will return 0 instead of the actual result. Use an explicit check instead.

---

### **🧱 HTML/JS Frontend Debug**

**Prompt**:

“My button doesn’t trigger the function when clicked. Here’s the code.”

html

CopyEdit

`<button onclick="doSomething">Click me</button>`

`<script>`

`function doSomething() {`

  `alert("Hello!");`

`}`

`</script>`

**AI Response**:

The function is not being called. Use `onclick="doSomething()"`.

---

## **⚠️ Common Mistakes in Prompting AI**

| Mistake | Why It’s a Problem | Fix It By... |
| ----- | ----- | ----- |
| Vague request | AI can’t determine the issue | Be clear: describe what’s wrong |
| No code shared | AI can’t analyze without context | Include relevant code snippet |
| No expected behavior given | AI doesn’t know the goal | Explain what should happen when the code works correctly |
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

2\. Diagnose errors faster.

# **Diagnosing Errors Faster with AI and Smart Debugging Techniques**

Diagnosing errors is one of the most time-consuming parts of software development. Errors (bugs, exceptions, or unexpected behavior) can arise from syntax issues, logic flaws, incorrect assumptions, missing dependencies, or environmental factors. Efficient diagnosis involves identifying **what went wrong**, **why**, and **how to fix it quickly**.

With the help of **AI tools like ChatGPT, GitHub Copilot, Replit Ghostwriter, and traditional debugging practices**, developers can now diagnose and resolve issues faster than ever before.

Youtube link: [https://youtu.be/XGKyX\_hH3Pc](https://youtu.be/XGKyX_hH3Pc) 

---

## **🔍 1\. Understanding the Types of Errors**

| Error Type | Description |
| ----- | ----- |
| **Syntax Error** | Code that violates language rules (e.g., missing `;` or parentheses). |
| **Runtime Error** | Errors that occur while code is executing (e.g., division by zero, null pointer). |
| **Logic Error** | Code runs without crashing but produces incorrect results. |
| **Compilation Error** | Occurs during code compilation, often due to type mismatches or missing declarations. |
| **Semantic Error** | Code is syntactically correct but doesn't perform as intended. |

---

## **⚡ 2\. Tools & Techniques for Fast Error Diagnosis**

### **✅ AI-Assisted Debugging**

Tools like **ChatGPT** and **GitHub Copilot** can:

* Interpret error messages or stack traces.

* Suggest fixes based on known patterns.

* Explain code snippets and pinpoint flaws.

📌 **Prompt Example:**

“This Python code throws a `TypeError`. Can you identify and fix it?”  
 *(Then paste the code snippet and error message.)*

### **✅ Integrated Debuggers in IDEs**

Modern IDEs like **Visual Studio Code**, **PyCharm**, and **IntelliJ** come with built-in debuggers:

* Set **breakpoints** to pause execution and inspect variables.

* Use **step-through** to follow the logic line-by-line.

* View **call stacks** to trace the origin of an error.

### **✅ Logging and Console Output**

Use strategically placed **logs** (e.g., `console.log`, `print`, or logging frameworks) to understand program flow and variable values.

💡 **Tip:** Add timestamps and contextual labels to logs for easier tracing.

---

## **🛠️ 3\. Process for Fast Error Diagnosis**

### **Step 1: Read the Error Message**

* Start with the **exact line number** and file location.

* Analyze the **error type** (e.g., `IndexError`, `NullReferenceException`).

### **Step 2: Reproduce the Error**

* Consistent replication is key to reliable debugging.

* Use test inputs or edge cases to provoke the error.

### **Step 3: Use Binary Search Debugging**

* Comment out or isolate blocks of code until the bug disappears.

* Reintroduce pieces gradually to identify the exact failing line.

### **Step 4: Prompt AI with Code & Error**

* Paste the relevant code snippet and error message.

* Ask AI to explain or fix the bug, then verify the output.

### **Step 5: Test Fixes Thoroughly**

* Rerun the fixed code with the same inputs.

* Add **unit tests** to catch regressions in the future.

---

## **🤖 Example: Using AI to Diagnose a Bug**

### **Python Bug Example:**

python

CopyEdit

`def divide(a, b):`

    `return a / b`

`print(divide(10, 0))`

### **Prompt to AI:**

“This Python function crashes when dividing. How do I handle this error?”

### **AI Response:**

Add exception handling:

python

CopyEdit

`def divide(a, b):`

    `try:`

        `return a / b`

    `except ZeroDivisionError:`

        `return "Cannot divide by zero."`

---

## **⚠️ Common Mistakes Slowing Down Error Diagnosis**

* Ignoring detailed error messages

* Fixing symptoms instead of root causes

* Not testing code in isolated environments

* Making multiple changes at once without verifying each step

* Lack of logging or poor log formatting

---

## **🚀 Best Practices to Diagnose Faster**

* **Read and understand stack traces**

* **Use smaller test cases** to isolate issues

* **Write tests** for both working and failing conditions

* **Version control** helps compare changes that introduced bugs

* **Collaborate or ask AI** when stuck for more than 15 minutes

---

## **🧰 Tools That Help Diagnose Faster**

| Tool | Use |
| ----- | ----- |
| **ChatGPT / Copilot** | AI-based bug explanation and code fixes |
| **VS Code Debugger** | Set breakpoints, inspect state |
| **Sentry / LogRocket** | Real-time error monitoring for apps |
| **Stack Overflow / GitHub** | Find common fixes and similar bugs |
| **Unit Test Libraries** (e.g., PyTest, JUnit) | Automated test execution |

---

## **✅ Summary**

Diagnosing errors quickly requires a **systematic approach**, good tooling, and clear thinking. AI assistants now give developers an edge by accelerating the error analysis process through code interpretation, contextual suggestions, and automated fixes. When paired with strong debugging practices, these tools help minimize downtime and increase developer confidence.

By learning to:

1. Interpret errors,

2. Prompt AI correctly,

3. Use debuggers and logs,  
    you can resolve bugs with precision and speed.

4. Understand what’s wrong and why.

5. Apply best practices in debugging and fixing code.

6. Become a better programmer by learning from AI feedback.

### **🧠 Remember:**

"AI is not here to replace you—it’s here to assist you. But only if you know how to talk to it."

2. Optimizing code for performance and readability with AI

# **Optimizing Code for Performance and Readability with AI**

## **✅ Introduction**

AI-assisted coding tools like **ChatGPT**, **GitHub Copilot**, **Replit Ghostwriter**, and **Amazon CodeWhisperer** are not just useful for generating code—they can also **optimize existing code** for better performance and readability. Optimization improves execution speed, memory usage, and code maintainability, which are all essential for high-quality software.

Youtube link: [https://youtu.be/npDCnvUHHwA](https://youtu.be/npDCnvUHHwA) 

## **🎯 Why Optimize Code?**

* **Performance:** Faster execution, better resource management (CPU, memory, disk, etc.).

* **Readability:** Easier to understand, debug, maintain, and collaborate on.

* **Scalability:** Efficient code handles larger datasets and more users.

* **Bug Reduction:** Cleaner code often has fewer logic errors.

---

## **🛠️ Types of Optimization AI Can Help With**

### **1\. Performance Optimization**

AI can:

* Replace inefficient algorithms with faster alternatives (e.g., bubble sort → quicksort).

* Suggest better data structures (e.g., list → set for faster lookups).

* Reduce redundant computations or database queries.

* Parallelize or vectorize operations (e.g., using NumPy or multiprocessing).

* Optimize loops (e.g., list comprehensions in Python).

**Prompt Example:**

"Optimize this Python function to process a large list more efficiently."

### **2\. Readability and Code Style**

AI can:

* Rename variables/functions to more descriptive names.

* Break long functions into smaller ones (modularization).

* Add comments or docstrings.

* Format code according to style guides (PEP8 for Python, ESLint for JS, etc.).

* Eliminate deep nesting and complex conditionals.

**Prompt Example:**

"Refactor this JavaScript code to improve readability and follow best practices."

---

## **🧪 Workflow: Optimizing Code Using AI**

### **Step 1: Identify the Target Code**

Select the code that’s slow, hard to read, or flagged by profiling tools.

### **Step 2: Craft a Clear Prompt**

Include:

* The goal (e.g., “improve performance” or “make this readable”).

* Any constraints (e.g., must support Python 3.6, avoid third-party libs).

**Example:**

"Refactor the following Python code to improve performance without using external libraries."

### **Step 3: Review and Compare**

AI may provide:

* Improved loop structures

* Alternative logic

* Cleaner syntax  
   Manually review or test to ensure functionality hasn’t changed.

### **Step 4: Iterate and Test**

Ask follow-up prompts:

* “Can you make this even faster?”

* “Add comments to explain the logic.”

* “Make this suitable for production use.”

---

## **🧰 Tools That Support AI Code Optimization**

| Tool | Features |
| ----- | ----- |
| **ChatGPT** | Refactoring, explaining, optimizing in conversation |
| **GitHub Copilot** | Inline suggestions in IDEs (VS Code, JetBrains) |
| **Replit Ghostwriter** | Real-time code completion and refactoring help |
| **Amazon CodeWhisperer** | AWS-focused, good for cloud-based performance improvements |
| **Codeium** | Free AI assistant with optimization hints |

---

## **⚠️ Common Pitfalls to Avoid**

| Pitfall | Why It Matters |
| ----- | ----- |
| Over-optimization | Makes code harder to read or maintain |
| Blind trust in AI suggestions | May introduce subtle bugs or regressions |
| Ignoring test coverage | Changes should be validated against unit tests |
| Ignoring readability in favor of speed | Balance is key in production code |

---

## **💡 Best Practices**

* Use **profiling tools** first (e.g., `cProfile`, `perf`, `Chrome DevTools`) to identify real bottlenecks.

* Make **one change at a time** and **benchmark** improvements.

* Use AI to **refactor**, not rewrite, unless the code is trivial.

* Ask AI to explain changes to **learn optimization techniques**.

---

## **📈 Example Use Case**

### **Before Optimization:**

python

CopyEdit

`def find_duplicates(nums):`

    `duplicates = []`

    `for i in nums:`

        `if nums.count(i) > 1 and i not in duplicates:`

            `duplicates.append(i)`

    `return duplicates`

### **Optimized with AI:**

python

CopyEdit

`def find_duplicates(nums):`

    `seen = set()`

    `duplicates = set()`

    `for num in nums:`

        `if num in seen:`

            `duplicates.add(num)`

        `else:`

            `seen.add(num)`

    `return list(duplicates)`

**Improvement:**

* Original time complexity: O(n²)

* Optimized version: O(n)

---

## **✅ Summary**

Optimizing code with AI is a powerful way to:

* Enhance performance (speed, memory, efficiency)

* Improve code quality and maintainability

* Learn better coding practices interactively

* Automate tedious refactoring and formatting tasks

By crafting clear prompts, reviewing AI suggestions, and applying best practices, developers can make AI a powerful ally in writing clean, fast, and scalable code.

3. Refactoring legacy code using AI tools

## **Introduction**

Legacy code refers to older source code that is often poorly documented, hard to maintain, or incompatible with modern standards and tools. Refactoring legacy code is the process of restructuring existing code without changing its external behavior to improve readability, maintainability, and performance.

AI-powered tools like **GitHub Copilot**, **ChatGPT**, **Replit Ghostwriter**, and others have become invaluable for assisting developers in refactoring legacy code efficiently and effectively.

---

## **Challenges of Refactoring Legacy Code**

* **Lack of Documentation:** Legacy code often lacks clear comments or up-to-date documentation.

* **Complex and Spaghetti Code:** Code may be tangled and hard to follow.

* **Outdated Practices:** Use of deprecated libraries, inefficient algorithms, or old design patterns.

* **Fear of Breaking Functionality:** Developers hesitate to change code because of potential bugs.

* **Time Constraints:** Refactoring is time-consuming and can delay feature development.

Youtube link: [https://youtu.be/hycX2OzLsIg](https://youtu.be/hycX2OzLsIg) 

---

## **How AI Tools Help Refactor Legacy Code**

### **1\. Understanding Legacy Code**

* AI tools can explain what a piece of code does in simple language.

* They can provide summaries and highlight potential problems.

* Example prompt: *“Explain what this function does and its input/output.”*

### **2\. Suggesting Modern Patterns and Best Practices**

* AI can suggest converting outdated constructs to modern equivalents.

* They can recommend design patterns that improve modularity and flexibility.

* Example: *“Refactor this procedural code into an object-oriented design.”*

### **3\. Improving Readability and Structure**

* AI can rewrite code with clearer variable names, consistent formatting, and modular functions.

* It can add meaningful comments or documentation blocks.

* Example: *“Rewrite this function with better variable names and add inline comments.”*

### **4\. Automated Code Refactoring**

* AI can generate refactored code snippets for legacy functions or classes.

* It can break down large functions into smaller, reusable components.

* Example: *“Split this 200-line function into smaller functions with single responsibility.”*

### **5\. Bug Detection and Fixing During Refactoring**

* AI can identify hidden bugs or logical errors while refactoring.

* It can fix inefficient loops, redundant code, and security issues.

* Example: *“Find and fix potential bugs or inefficiencies in this code.”*

### **6\. Testing and Validation Support**

* AI can help write unit tests or integration tests for legacy code.

* Testing ensures the refactored code preserves original functionality.

* Example: *“Generate unit tests for this class using pytest.”*

---

## **Best Practices When Using AI for Legacy Code Refactoring**

* **Incremental Refactoring:** Use AI to refactor small portions of code step-by-step.

* **Frequent Testing:** Run automated tests after each change to verify no behavior breaks.

* **Clear Prompts:** Provide AI with detailed instructions including expected inputs, outputs, and coding style preferences.

* **Manual Review:** Always review AI-generated code manually for correctness and security.

* **Backup Code:** Keep a backup or version control checkpoint before major refactoring steps.

---

## **Popular AI Tools for Refactoring Legacy Code**

| Tool | Features | Integration |
| ----- | ----- | ----- |
| **GitHub Copilot** | In-editor real-time suggestions, refactoring code snippets | VS Code, JetBrains IDEs |
| **ChatGPT** | Conversational refactoring guidance, explanations, code generation | Web interface, API, IDE plugins |
| **Replit Ghostwriter** | Context-aware suggestions, code improvement | Replit IDE |
| **Amazon CodeWhisperer** | Code suggestions, security fixes | AWS Cloud9, VS Code |

---

## **Example Workflow for AI-assisted Legacy Code Refactoring**

1. **Load legacy code into IDE** with AI plugin enabled.

2. **Ask AI to explain** complex functions or modules.

3. **Request AI to refactor** specific functions or classes with detailed prompts.

4. **Review AI output** carefully and test with automated test suites.

5. **Iterate** by prompting AI for further improvements, optimizations, or tests.

6. **Commit changes** in version control with descriptive messages.

7. **Document** the new structure and any important changes made.

---

## **Summary**

Refactoring legacy code is essential for maintaining software quality and agility. AI tools empower developers to handle this daunting task more efficiently by offering explanations, modernizing code, improving readability, and automatically refactoring complex sections. Combined with good practices like incremental changes and thorough testing, AI-assisted refactoring can dramatically reduce technical debt and extend the life of legacy systems.

### **Quiz: Refactoring Legacy Code Using AI Tools**

**1\. What is legacy code?**  
 a) Newly written code  
 b) Older source code that is often poorly documented and hard to maintain  
 c) Code written in Python only  
 d) Code that always follows modern standards

**2\. What is the primary goal of refactoring legacy code?**  
 a) Changing the external behavior  
 b) Adding new features  
 c) Restructuring code to improve readability, maintainability, and performance without changing behavior  
 d) Removing all comments

**3\. Which AI tools are commonly used for refactoring legacy code?**  
 a) Photoshop and Illustrator  
 b) GitHub Copilot, ChatGPT, Replit Ghostwriter  
 c) Microsoft Word and Excel  
 d) Blender and Maya

**4\. One challenge of refactoring legacy code is:**  
 a) Too much documentation  
 b) Lack of documentation and unclear comments  
 c) Modern design patterns  
 d) Easy-to-read code

**5\. What does “spaghetti code” refer to?**  
 a) Code that has many pasta-related functions  
 b) Complex, tangled, and hard to follow code  
 c) Code written only in Italian  
 d) Well-structured and modular code

**6\. Why are developers often afraid to refactor legacy code?**  
 a) It is always perfectly written  
 b) Fear of breaking existing functionality  
 c) They don’t have time to write new code  
 d) Legacy code doesn’t need improvements

**7\. How can AI tools help in understanding legacy code?**  
 a) By explaining what a piece of code does in simple language  
 b) By deleting old code automatically  
 c) By compiling code into machine language  
 d) By translating code into another programming language only

**8\. What is an example of a prompt to ask AI to understand code?**  
 a) “Write me a new app”  
 b) “Explain what this function does and its input/output.”  
 c) “Generate random code snippets.”  
 d) “Delete all comments.”

**9\. How can AI assist with modernizing legacy code?**  
 a) Suggest outdated libraries  
 b) Suggest converting old constructs to modern equivalents  
 c) Remove all functions  
 d) Add more spaghetti code

**10\. Which is an example prompt for suggesting design pattern improvements?**  
 a) “Refactor this procedural code into an object-oriented design.”  
 b) “Make code longer.”  
 c) “Delete this code.”  
 d) “Make code spaghetti.”

**11\. How does AI improve readability and structure in legacy code?**  
 a) By adding meaningless variable names  
 b) By rewriting code with clearer variable names and consistent formatting  
 c) By deleting all functions  
 d) By obfuscating code logic

**12\. What is an example prompt for improving code comments?**  
 a) “Remove all comments.”  
 b) “Rewrite this function with better variable names and add inline comments.”  
 c) “Add more bugs.”  
 d) “Make code unreadable.”

**13\. What can AI do in automated code refactoring?**  
 a) Generate refactored code snippets for legacy functions or classes  
 b) Turn code into binary files  
 c) Remove all logic from the code  
 d) Convert code to another language without refactoring

**14\. How can AI help detect and fix bugs during refactoring?**  
 a) By ignoring errors  
 b) By identifying hidden bugs and inefficiencies, and suggesting fixes  
 c) By deleting all error handling code  
 d) By adding random errors

**15\. What type of testing can AI assist with in refactoring?**  
 a) Unit tests and integration tests  
 b) Only manual testing  
 c) No testing at all  
 d) Testing by deleting code

**16\. What is a best practice when using AI for legacy code refactoring?**  
 a) Refactor the entire codebase at once without testing  
 b) Incremental refactoring with frequent testing  
 c) Ignore test results  
 d) Avoid backing up code

**17\. Why should you always manually review AI-generated refactoring code?**  
 a) To verify correctness and security  
 b) To add more bugs  
 c) Because AI never generates any useful code  
 d) To make it unreadable

**18\. Which tool is known for providing in-editor real-time code suggestions and refactoring snippets?**  
 a) Adobe Photoshop  
 b) GitHub Copilot  
 c) Microsoft Excel  
 d) Blender

**19\. What is an example workflow for AI-assisted legacy code refactoring?**  
 a) Load code → delete it → write new code  
 b) Load code → ask AI to explain → refactor with AI → review and test → commit changes  
 c) Write code from scratch every time  
 d) Ignore AI suggestions

**20\. What is the overall benefit of using AI for refactoring legacy code?**  
 a) Increasing technical debt  
 b) Improving code quality, maintainability, and developer productivity  
 c) Making code harder to maintain  
 d) Adding more bugs to the system

4. Hands-on Activity: Debug a broken app with AI

## **Introduction**

Debugging is a critical phase in software development where developers identify and fix errors, bugs, or unexpected behaviors in an application. Traditional debugging can be time-consuming and requires deep understanding of the codebase. AI-powered tools like ChatGPT, GitHub Copilot, Replit Ghostwriter, and Amazon CodeWhisperer have revolutionized this process by enabling developers to debug faster and more efficiently using natural language prompts and intelligent code analysis.

This hands-on activity focuses on leveraging AI tools to debug a broken application, demonstrating practical steps and best practices.

Youtube link: [https://youtu.be/5bNfQle2YR0](https://youtu.be/5bNfQle2YR0) 

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

   “Here is a JavaScript function that should filter out even numbers from an array but it returns incorrect results. Can you find and fix the bug?”

* If possible, provide input and output examples:

   Input: \[1, 2, 3, 4\] → Expected output: \[1, 3\]

### **Step 3: Ask AI to Diagnose the Problem**

* Use an AI tool (like ChatGPT) to analyze the code.

* Request an explanation of what the code does and where the bug might be.

* Example prompt:

   “Explain this Python function and identify any bugs.”

### **Step 4: Request a Fix or Suggestion**

* Ask AI to provide a corrected version of the code.

* Request inline comments explaining the fix.

* Example prompt:

   “Fix this function to correctly handle edge cases and add comments explaining your changes.”

### **Step 5: Test the AI-Provided Solution**

* Implement the suggested fix in your development environment.

* Run automated and manual tests to verify the issue is resolved.

* Check that no new bugs were introduced.

### **Step 6: Iterate if Needed**

* If the bug persists or new issues arise, provide feedback to the AI with updated symptoms or error messages.

* Request further debugging or optimizations.

* Example prompt:

   “The fix you provided solved the main bug, but now it fails with empty input. Can you update the function to handle this case?”

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

Using AI to debug broken applications empowers developers to diagnose issues more quickly and accurately. By crafting clear prompts and working iteratively with AI-generated explanations and fixes, programmers can resolve bugs efficiently, improve code quality, and gain deeper understanding of their codebases. Combining AI assistance with traditional testing and manual review ensures robust and maintainable software.

### **Quiz: Debug a Broken App with AI**

**1\.** What is the primary goal of debugging in software development?  
 a) Writing new features  
 b) Identifying and fixing errors or unexpected behaviors  
 c) Designing user interfaces  
 d) Deploying applications

**2\.** Why can traditional debugging be time-consuming?  
 a) It requires multiple programming languages  
 b) It needs deep understanding of the codebase  
 c) It only uses AI tools  
 d) It is automated

**3\.** Name at least two AI-powered tools that assist in debugging.

**4\.** What should you do first before asking an AI to debug a broken app?  
 a) Write new code  
 b) Identify the bug or problem by running the app and collecting error messages  
 c) Restart your computer  
 d) Ignore error messages

**5\.** When preparing a prompt for AI to debug code, what key information should you include?  
 a) Programming language, code snippet, expected and actual behavior  
 b) Only the programming language  
 c) The color of your IDE  
 d) The size of your screen

**6\.** Why is it helpful to provide example inputs and outputs when debugging with AI?

**7\.** What is a good example of a clear prompt for AI debugging assistance?  
 a) “Fix this code.”  
 b) “Here is a JavaScript function that should filter out even numbers from an array but returns incorrect results. Can you find and fix the bug?”  
 c) “Make my code work.”  
 d) “Do something with this code.”

**8\.** What should you ask AI to do after it diagnoses the problem?  
 a) Suggest a fix with explanations and inline comments  
 b) Delete the code  
 c) Write unrelated code  
 d) Provide marketing tips

**9\.** After AI provides a code fix, what is the next step?  
 a) Ignore the fix  
 b) Test the AI-provided solution with automated and manual tests  
 c) Immediately deploy to production  
 d) Restart the IDE

**10\.** If the bug is not fully fixed after the AI’s first attempt, what should you do?

**11\.** Why is it important to document the fix after debugging?

**12\.** Name two tips for effective AI-assisted debugging.

**13\.** Which of the following is NOT a common debugging scenario AI can help with?  
 a) Syntax errors  
 b) Logical errors  
 c) Designing UI layouts  
 d) Handling edge cases

**14\.** How does AI-assisted debugging improve productivity?

**15\.** What does iterative refinement mean in the context of AI debugging?

**16\.** What are some traditional debugging tools that you should combine with AI assistance?

**17\.** True or False: You should always trust AI-generated code without testing.

**18\.** Why is it recommended to keep a backup of your original code before applying AI fixes?

**19\.** Which AI tool provides conversational debugging and code explanation?  
 a) GitHub Copilot  
 b) ChatGPT  
 c) Amazon CodeWhisperer  
 d) Replit Ghostwriter

**20\.** What is the benefit of providing clear and specific prompts when asking AI for debugging help?

**Week 4: AI-Assisted Documentation and Testing**

1. Generating docstrings and README files

### **Introduction**

Documentation is a crucial part of software development that helps developers and users understand how code works, how to use it, and how to maintain it. Two essential types of documentation in codebases are **docstrings** and **README files**.

* **Docstrings**: Embedded documentation inside source code, usually placed right below functions, classes, or modules to describe their purpose, parameters, return values, exceptions, and usage examples.

* **README files**: Typically markdown files (`README.md`) at the root of a project that provide an overview of the project, installation instructions, usage guides, contribution guidelines, and more.

### **Importance of Docstrings and README Files**

* **Enhance Code Readability:** Docstrings make it easier for other developers (or your future self) to understand the intent and usage of code components without digging into implementation details.

* **Facilitate Maintenance:** Good documentation simplifies troubleshooting, debugging, and updating code.

* **Improve Collaboration:** README files introduce new contributors or users to the project, explaining what it does and how to get started.

* **Support Automation:** Many tools (like Sphinx for Python) generate formal API documentation from docstrings automatically, streamlining documentation efforts.

Youtube link: [https://youtu.be/bwzoDuAnMy8](https://youtu.be/bwzoDuAnMy8) 

---

### **Generating Docstrings**

#### **What to Include in Docstrings**

* **Purpose:** What does the function/class/module do?

* **Parameters:** List input parameters with their types and descriptions.

* **Return Value:** What does the function return? Include type and description.

* **Exceptions:** Document any exceptions that might be raised.

* **Examples:** Optional sample usage demonstrating how to call the function/class.

#### **Common Formats**

* **Google Style**

* **NumPy Style**

* **reStructuredText (reST) Style**

Example (Google Style Python function docstring):

python

CopyEdit

`def add_numbers(a: int, b: int) -> int:`

    `"""`

    `Adds two integers.`

    `Args:`

        `a (int): First number.`

        `b (int): Second number.`

    `Returns:`

        `int: The sum of the two numbers.`

    `Raises:`

        `ValueError: If inputs are not integers.`

    `"""`

    `return a + b`

#### **AI-Assisted Docstring Generation**

AI tools like ChatGPT, GitHub Copilot, and Replit Ghostwriter can automatically generate detailed docstrings by analyzing the code logic. Example prompt to AI:

“Generate a Google style docstring for this Python function that calculates factorial.”

Benefits of AI-generated docstrings:

* Saves time writing repetitive documentation.

* Ensures consistency in style and completeness.

* Helps document legacy code that lacks comments.

---

### **Generating README Files**

#### **Key Sections in a README**

1. **Project Title and Description:** Brief overview of what the project is and its goals.

2. **Installation Instructions:** How to set up and install dependencies.

3. **Usage Guide:** How to run or use the project with examples.

4. **Features:** Highlight main features or functionality.

5. **Contributing Guidelines:** Instructions for those who want to contribute.

6. **License:** License details for the project.

7. **Contact/Support:** How to get help or contact maintainers.

8. **Credits or Acknowledgments:** Recognize contributors or used libraries.

#### **README Best Practices**

* Use markdown for formatting to make README visually clear.

* Keep content concise and user-friendly.

* Include badges (build status, coverage, etc.) for quick status info.

* Update README as the project evolves.

#### **AI-Assisted README Generation**

AI can assist in drafting README files by:

* Summarizing project purpose from code or description.

* Generating installation and usage instructions based on code structure.

* Creating templates that users can customize.

Example prompt to AI:

“Generate a README.md for a Python library that provides image processing functions, including installation and usage examples.”

---

### **Tools and Techniques for Generating Documentation**

* **Integrated Development Environments (IDEs):** Many modern IDEs support docstring templates and generation shortcuts.

* **AI Tools:** ChatGPT, GitHub Copilot, Replit Ghostwriter.

* **Documentation Generators:** Sphinx, JSDoc, Doxygen for generating formal docs from docstrings.

* **Markdown Editors:** Help craft well-formatted README files.

---

### **Summary**

Generating docstrings and README files is essential to creating maintainable, understandable, and user-friendly code projects. AI-powered tools have made this process more efficient by automating the generation of thorough and consistent documentation. Whether documenting individual functions or creating comprehensive project guides, leveraging AI and best practices can greatly enhance developer productivity and collaboration.

### **Generating Docstrings and README Files**

**1\.** What is the primary purpose of docstrings in source code?  
 a) To execute the code  
 b) To embed documentation explaining functions, classes, or modules  
 c) To compile the program faster  
 d) To improve code formatting

**2\.** Where are README files usually located in a project?  
 a) Inside every function  
 b) In the root directory of the project  
 c) In the test folder  
 d) In the user's home directory

**3\.** Which file format is commonly used for README files?  
 a) .txt  
 b) .docx  
 c) .md (Markdown)  
 d) .pdf

**4\.** What key information is typically included in a function’s docstring?  
 a) Only the function name  
 b) Purpose, parameters, return values, exceptions, and examples  
 c) Only the return type  
 d) The function’s runtime performance

**5\.** Which of the following is NOT a common docstring format?  
 a) Google Style  
 b) NumPy Style  
 c) reStructuredText (reST) Style  
 d) YAML Style

**6\.** What is the benefit of generating docstrings using AI tools?  
 a) It makes the code run faster  
 b) Saves time writing repetitive documentation and ensures consistency  
 c) Removes bugs automatically  
 d) Converts code into other languages

**7\.** In a README file, which section would typically describe how to install the project?  
 a) Usage Guide  
 b) Installation Instructions  
 c) License  
 d) Features

**8\.** What does the 'Raises' section in a docstring describe?  
 a) How to run the function  
 b) The exceptions the function might throw  
 c) The return values  
 d) The function's input parameters

**9\.** Which AI tools are commonly used to assist with generating docstrings?  
 a) Photoshop and Illustrator  
 b) ChatGPT, GitHub Copilot, Replit Ghostwriter  
 c) Excel and Word  
 d) Google Docs and Sheets

**10\.** What is the main purpose of the 'Contributing Guidelines' section in a README file?  
 a) To list bugs in the project  
 b) To provide instructions for users on how to contribute to the project  
 c) To explain how to use the project  
 d) To document the project's license

**11\.** What does the 'Return' section of a docstring specify?  
 a) The input arguments  
 b) The output or value the function returns along with its type  
 c) The author of the function  
 d) How to debug the function

**12\.** Why is it important to keep README content concise and user-friendly?  
 a) To reduce file size  
 b) To make it easier for users and contributors to quickly understand and use the project  
 c) To prevent unauthorized access  
 d) To improve code execution speed

**13\.** What does the ‘Examples’ section in a docstring provide?  
 a) Optional sample usage demonstrating how to call the function/class  
 b) The function's memory usage  
 c) The number of lines of code  
 d) The version of the project

**14\.** How can AI assist in generating README files?  
 a) By writing the entire project code  
 b) By summarizing project purpose, generating instructions, and creating templates  
 c) By managing project deadlines  
 d) By installing software dependencies automatically

**15\.** Which of the following is a recommended best practice when writing README files?  
 a) Write README in plain text only  
 b) Use markdown formatting for clarity and structure  
 c) Make README extremely detailed with every line of code explained  
 d) Avoid using any headings or lists

**16\.** What is a common tool used to generate formal API documentation from docstrings?  
 a) Sphinx  
 b) Photoshop  
 c) Microsoft Word  
 d) Docker

**17\.** What should you do before applying AI-generated docstrings or README content in your project?  
 a) Copy and paste without review  
 b) Manually review for accuracy and relevance  
 c) Delete original comments  
 d) Automatically publish without testing

**18\.** What kind of information would you NOT typically find in a README file?  
 a) Project overview and goals  
 b) Installation and usage instructions  
 c) Source code of all functions  
 d) Contribution guidelines

**19\.** How do docstrings improve collaboration among developers?  
 a) By encrypting the code  
 b) By making the code base more understandable without digging into implementation details  
 c) By limiting who can edit the code  
 d) By speeding up the compilation process

**20\.** Which of the following is a benefit of AI-generated docstrings?  
 a) They fix all code bugs automatically  
 b) They guarantee 100% error-free code  
 c) They ensure completeness and uniform style across documentation  
 d) They replace the need for testing code

2. Writing unit and integration tests with AI

## **Introduction**

Testing is a fundamental part of software development that ensures code correctness, robustness, and reliability. Two key types of tests commonly used are **unit tests** and **integration tests**:

* **Unit Tests:** Focus on verifying individual components or functions in isolation to confirm they behave as expected.

* **Integration Tests:** Verify that multiple components or systems work together correctly, testing the interactions between modules.

Traditionally, writing tests can be time-consuming and require a deep understanding of both the codebase and testing frameworks. AI-powered tools have started transforming this process by assisting developers in generating test cases quickly and efficiently, improving test coverage and quality.

Youtube link: [https://www.youtube.com/watch?v=GmfxQUqm2ZQ](https://www.youtube.com/watch?v=GmfxQUqm2ZQ) 

---

## **Benefits of Using AI for Testing**

* **Speed and Efficiency:** AI can automatically generate test cases based on existing code, reducing manual effort.

* **Better Coverage:** AI can suggest edge cases and input variations developers might overlook.

* **Consistent Quality:** Helps maintain uniform style and thoroughness in tests.

* **Learning Aid:** Provides explanations and examples for better understanding of test writing.

* **Legacy Code Testing:** AI can help add tests to older codebases lacking coverage.

* **Supports Multiple Languages and Frameworks:** Works with Python (pytest, unittest), JavaScript (Jest, Mocha), Java (JUnit), and more.

---

## **AI Tools for Writing Tests**

* **ChatGPT:** Conversational AI that can analyze code snippets and generate corresponding unit or integration tests with explanations.

* **GitHub Copilot:** Provides real-time test code suggestions as you write code inside IDEs like VS Code.

* **Replit Ghostwriter:** Context-aware coding assistant that helps generate tests in the Replit environment.

* **Amazon CodeWhisperer:** Suggests tests and code fixes, integrated with popular IDEs.

---

## **Writing Unit Tests with AI: Step-by-Step**

### **Step 1: Identify the Unit to Test**

* Select a single function or method.

* Understand input parameters, expected behavior, and output.

### **Step 2: Provide Clear Code and Context to AI**

* Share the function code with AI.

* Specify the testing framework and language.

* Example prompt:  
   `"Write unit tests using pytest for this Python function that calculates factorial."`

### **Step 3: Review AI-Generated Tests**

* Verify the test cases cover normal inputs, edge cases, and invalid inputs.

* Check for assertions validating output correctness.

### **Step 4: Run Tests and Debug**

* Execute generated tests in your environment.

* Use failures to refine test cases or fix the underlying code.

---

## **Writing Integration Tests with AI: Step-by-Step**

### **Step 1: Identify Interacting Components**

* Determine which modules or services interact.

* Understand the flow and expected outcomes.

### **Step 2: Provide Context and Expected Behavior to AI**

* Share code snippets or describe system interaction.

* Specify environment, dependencies, and testing tools.

### **Step 3: Ask AI to Generate Integration Test Scenarios**

* Example prompt:  
   `"Create integration tests for a REST API endpoint that interacts with the user database, using Jest."`

### **Step 4: Validate and Extend Tests**

* Run tests to verify component integration.

* Add tests for failure modes or boundary conditions.

---

## **Best Practices for AI-Assisted Testing**

* **Be Specific and Clear:** Precise prompts yield better test suggestions.

* **Iterate with AI:** Refine test cases by providing feedback or requesting additional edge cases.

* **Combine AI with Manual Testing:** Always review AI-generated code and test results.

* **Use Mocks and Stubs Appropriately:** For integration tests, isolate external dependencies.

* **Maintain Test Documentation:** Comment on AI-generated tests to clarify purpose and assumptions.

* **Keep Tests Fast and Independent:** Unit tests should run quickly without external dependencies.

---

## **Example AI Prompt for Unit Testing**

python

CopyEdit

`def add(a, b):`

    `return a + b`

**Prompt:**  
 “Generate pytest unit tests for this add function, including tests for positive, negative, and zero values.”

---

## **Example AI Prompt for Integration Testing**

**Scenario:** Testing a user registration API that stores data in a database.

**Prompt:**  
 “Write integration tests using Mocha and Chai for a Node.js user registration API endpoint that saves user info to MongoDB. Include tests for successful registration and handling duplicate emails.”

---

## **Challenges and Limitations**

* **Context Awareness:** AI may miss nuances of complex business logic without sufficient context.

* **False Positives/Negatives:** AI-generated tests might pass/fail incorrectly if assumptions differ.

* **Security and Privacy:** Careful with sharing proprietary or sensitive code with cloud AI tools.

* **Dependency Management:** AI may not always handle test dependencies or environment setup fully.

---

## **Summary**

Using AI to write unit and integration tests empowers developers to automate much of the test generation process, enhancing productivity, code quality, and coverage. By providing clear prompts and iterating on AI outputs, developers can rapidly create meaningful test suites, catch bugs earlier, and maintain robust software. However, human review and domain knowledge remain crucial for validating and maintaining these tests.

### **Writing Unit and Integration Tests with AI**

**1\. What is the primary focus of a unit test?**  
 a) Testing the integration of multiple modules  
 b) Verifying individual components or functions in isolation  
 c) Testing the entire system end-to-end  
 d) Checking the performance of the system

**2\. What do integration tests primarily verify?**  
 a) Single function logic  
 b) User interface responsiveness  
 c) Interactions between multiple components or systems  
 d) Syntax errors in the code

**3\. Why is testing important in software development?**  
 a) To increase code length  
 b) To ensure code correctness, robustness, and reliability  
 c) To confuse developers  
 d) To increase compile time

**4\. Which of the following is a benefit of using AI in test generation?**  
 a) Increased manual coding effort  
 b) Faster and more efficient test case generation  
 c) Increased syntax errors  
 d) Decreased test coverage

**5\. AI-powered tools can help generate tests in which programming languages?**  
 a) Only Python  
 b) Only JavaScript  
 c) Multiple languages including Python, JavaScript, and Java  
 d) Only Java

**6\. Which AI tool provides real-time code suggestions inside IDEs like VS Code?**  
 a) ChatGPT  
 b) GitHub Copilot  
 c) Amazon CodeWhisperer  
 d) Replit Ghostwriter

**7\. What is the first step in writing unit tests with AI?**  
 a) Writing documentation  
 b) Identifying the unit (function or method) to test  
 c) Running integration tests  
 d) Deploying the application

**8\. When providing a prompt to AI for generating unit tests, which information is most important?**  
 a) The programming language and testing framework  
 b) The color of the code editor  
 c) The operating system version  
 d) The user's favorite food

**9\. What should you verify when reviewing AI-generated tests?**  
 a) Test case coverage including normal, edge, and invalid inputs  
 b) The font size of the code  
 c) The user's login credentials  
 d) The time it took AI to generate tests

**10\. Which of the following is a common testing framework in Python?**  
 a) Mocha  
 b) JUnit  
 c) pytest  
 d) Jest

**11\. What is an important practice when running AI-generated tests?**  
 a) Execute them without review  
 b) Review test results and debug failures  
 c) Ignore failures as false positives  
 d) Delete all existing tests

**12\. For integration tests, what is a key aspect to consider?**  
 a) Only testing UI elements  
 b) Testing interaction and data flow between multiple modules or services  
 c) Only running on local machines  
 d) Writing tests without context

**13\. When writing integration tests with AI, what should you provide to the AI?**  
 a) No information  
 b) Code snippets or descriptions of system interaction and environment details  
 c) Only the project title  
 d) The weather forecast

**14\. What is a best practice when using AI for testing?**  
 a) Always trust AI output blindly  
 b) Provide clear, specific prompts and iterate on test cases  
 c) Never run AI-generated tests  
 d) Avoid combining AI with manual testing

**15\. Why should mocks and stubs be used in integration testing?**  
 a) To slow down test execution  
 b) To isolate external dependencies and avoid side effects  
 c) To confuse developers  
 d) To generate random failures

**16\. What is a potential limitation of AI-generated tests?**  
 a) AI understands complex business logic perfectly every time  
 b) AI may miss nuances without sufficient context  
 c) AI never produces incorrect tests  
 d) AI replaces the need for human testers entirely

**17\. Which step is important after AI generates test cases?**  
 a) Documenting the test cases and assumptions  
 b) Ignoring test cases  
 c) Deleting AI-generated tests  
 d) Hiding tests from the team

**18\. How can AI help with legacy code testing?**  
 a) By ignoring legacy code  
 b) By generating tests to add coverage to codebases lacking tests  
 c) By removing legacy code  
 d) By replacing legacy code with AI code

**19\. What kind of tests are typically fast and independent?**  
 a) Integration tests  
 b) Unit tests  
 c) System tests  
 d) Performance tests

**20\. What is an example of a clear prompt for AI to generate unit tests?**  
 a) “Write some code”  
 b) “Generate pytest unit tests for this add function, including positive, negative, and zero values.”  
 c) “Make the code faster”  
 d) “Delete all bugs”

3. Creating data and mocks for testing

### **Overview**

Creating reliable and representative test data and using mocks are critical practices in software testing. They ensure that tests run predictably, independently, and accurately reflect real-world scenarios without the overhead or complexity of using real external systems or data.

youtube link: [https://youtu.be/ORxTs1sDyNM](https://youtu.be/ORxTs1sDyNM) 

---

## **1\. Why Create Test Data?**

* **Control and Predictability:** Tests need consistent data to ensure repeatable and reliable results.

* **Isolation:** Tests should be independent, so data used in one test doesn’t affect others.

* **Coverage:** Well-designed test data covers normal cases, edge cases, and invalid inputs.

* **Performance:** Generating or seeding test data can speed up testing by avoiding slow real-world data fetching or calculations.

* **Security:** Avoid using sensitive real data in tests.

---

## **2\. Types of Test Data**

### **a. Static Data**

* Hardcoded data within the test code.

* Simple and fast for small or fixed datasets.

* Example: Fixed user names, fixed numbers for calculations.

### **b. Dynamic Data**

* Generated programmatically during test setup.

* Useful for large datasets or randomized inputs.

* Tools like Faker (Python), Factory Bot (Ruby), or Mockaroo can generate realistic fake data.

### **c. Seeded Data**

* Data pre-populated into databases or systems before tests run.

* Used to simulate a state of the system with known content.

---

## **3\. What are Mocks, Stubs, and Fakes?**

These are types of **test doubles** — objects that replace real components in tests.

### **a. Mocks**

* Objects that simulate and verify interactions (calls, parameters) with external dependencies.

* Useful to confirm the system under test behaves correctly by checking calls made to dependencies.

### **b. Stubs**

* Provide predefined responses to calls made during tests.

* Don’t assert behavior, just replace real implementations with canned responses.

### **c. Fakes**

* Fully functional implementations, but simplified (e.g., in-memory database instead of real DB).

* Useful for faster and simpler testing without external dependencies.

---

## **4\. Why Use Mocks?**

* **Isolation:** Avoid tests depending on external systems (like databases, APIs).

* **Speed:** Tests run faster without real network or disk I/O.

* **Deterministic:** Control exactly what external dependencies return.

* **Test Behavior:** Verify that correct interactions (method calls, data sent) happen.

---

## **5\. How to Create Mocks**

* Use mocking frameworks (e.g., `unittest.mock` in Python, Mockito in Java, Sinon in JavaScript).

* Replace real dependencies with mocks in test setup.

* Configure expected inputs and outputs on mocks.

* Optionally verify if mocked methods were called as expected.

### **Example in Python (unittest.mock):**

python

CopyEdit

`from unittest.mock import Mock`

`# Create a mock object`

`mock_db = Mock()`

`# Define return value for a method`

`mock_db.get_user.return_value = {'id': 1, 'name': 'Test User'}`

`# Use mock in your test`

`user = mock_db.get_user(1)`

`assert user['name'] == 'Test User'`

`# Verify method call`

`mock_db.get_user.assert_called_once_with(1)`

---

## **6\. Best Practices for Creating Data and Mocks**

* **Keep test data minimal but sufficient:** Use only necessary data to keep tests clear and fast.

* **Use factories for data creation:** Tools like Factory Boy (Python) or Factory Bot (Ruby) help generate reusable, flexible test data.

* **Mock external systems only:** Avoid mocking internal code to ensure tests verify real behavior.

* **Clean up after tests:** Reset mocks and remove temporary data to avoid cross-test contamination.

* **Name mocks clearly:** Use descriptive names for clarity on what’s being mocked.

* **Test edge cases:** Include nulls, empty strings, large inputs, and invalid values.

* **Document assumptions:** Explain why certain mock behaviors or data values are chosen.

---

## **7\. Tools and Libraries for Test Data and Mocks**

* **Test Data Generation:**

  * Faker (Python, JS, Ruby, etc.) — Generate realistic fake names, addresses, numbers.

  * Factory Boy (Python) / Factory Bot (Ruby) — Define blueprints for creating test data objects.

  * Mockaroo — Online service for generating datasets.

* **Mocking Frameworks:**

  * Python: `unittest.mock`, `pytest-mock`

  * Java: Mockito, EasyMock

  * JavaScript: Sinon.js, Jest mocks

  * C\#: Moq, NSubstitute

---

## **8\. Using Mocks with AI-Assisted Testing**

* AI tools can suggest mock setups based on the code context.

* Provide AI with code snippets and specify which dependencies to mock.

* AI can generate example mock configurations and test data factories.

---

## **Summary**

Creating proper test data and effectively using mocks are essential for building reliable, maintainable, and fast tests. Test data ensures tests run with consistent inputs and cover a wide range of scenarios. Mocks isolate the system under test from external dependencies, enabling deterministic and speedy tests. Leveraging tools, frameworks, and AI-assisted approaches can streamline the process and improve test quality.

### **Creating Data and Mocks for Testing**

4. **What is the primary purpose of creating test data in software testing?**  
    a) To slow down tests  
    b) To ensure predictable and repeatable test outcomes  
    c) To replace production data permanently  
    d) To confuse developers

5. **Which type of test data is generated programmatically during test execution?**  
    a) Static data  
    b) Seeded data  
    c) Dynamic data  
    d) Hardcoded data

6. **What is a mock in the context of software testing?**  
    a) A tool for generating user interface  
    b) A fake object that simulates behavior and verifies interactions  
    c) A type of real database  
    d) A manual test case

7. **How does a stub differ from a mock?**  
    a) Stubs simulate interactions, mocks do not  
    b) Stubs provide predefined responses, mocks verify calls and behavior  
    c) Mocks provide data, stubs delete data  
    d) They are the same

8. **What is a fake object in testing?**  
    a) A fully functional but simplified implementation replacing a real component  
    b) A broken code snippet  
    c) A test case that fails intentionally  
    d) A mock that always throws exceptions

9. **Why should tests avoid using real production data?**  
    a) It’s too slow  
    b) It risks exposing sensitive information and makes tests unpredictable  
    c) Production data is always outdated  
    d) It costs too much

10. **Which Python library is commonly used for mocking objects?**  
     a) Flask  
     b) unittest.mock  
     c) requests  
     d) numpy

11. **What does it mean to “seed” data in a test environment?**  
     a) Generate data dynamically during the test  
     b) Pre-populate the database with known data before running tests  
     c) Remove all data from the database  
     d) Encrypt test data

12. **Which tool helps create reusable blueprints for generating test data objects in Python?**  
     a) Factory Boy  
     b) Pytest  
     c) Selenium  
     d) Jenkins

13. **When using mocks, what is important to verify in your tests?**  
     a) That mocks never get called  
     b) That the mock objects have the expected methods called with correct arguments  
     c) That mocks are replaced by real objects  
     d) That mocks crash the system

14. **Which of the following is NOT a benefit of using mocks?**  
     a) Isolate system under test from external dependencies  
     b) Increase test execution speed  
     c) Ensure tests depend on the real network or database  
     d) Make tests deterministic

15. **What is a common problem when using insufficient or incorrect test data?**  
     a) Tests become too fast  
     b) Tests may pass incorrectly or miss edge cases  
     c) The code compiles faster  
     d) Tests become more secure

16. **What kind of test data would you use to simulate realistic user names and addresses?**  
     a) Static hardcoded data  
     b) Fake data generated by tools like Faker  
     c) Empty strings only  
     d) Real production data

17. **Why is it important to clean up test data or reset mocks after a test?**  
     a) To prevent side effects affecting other tests  
     b) To slow down the test suite  
     c) To confuse future developers  
     d) It’s not important

18. **Which of the following best describes “dynamic data”?**  
     a) Fixed values hardcoded in tests  
     b) Data generated on the fly during test execution  
     c) Data copied from production  
     d) Data encrypted for security

19. **What does “test isolation” mean in relation to mocks and test data?**  
     a) Tests depend on other tests’ data  
     b) Tests run independently without side effects from other tests  
     c) Tests must share the same database  
     d) Tests should fail if mocks are used

20. **Which statement is true about using AI tools for generating mocks or test data?**  
     a) AI can generate test data and mocks quickly but always requires human review  
     b) AI completely replaces manual testing  
     c) AI only generates invalid test cases  
     d) AI tools do not support mocking

21. **In Java, which framework is commonly used for mocking?**  
     a) JUnit  
     b) Mockito  
     c) Spring Boot  
     d) Hibernate

22. **What is a common practice to maintain clarity when using mocks?**  
     a) Use generic names for mocks like `mock1`, `mock2`  
     b) Use descriptive names to indicate what dependency is mocked  
     c) Never document mocks  
     d) Avoid resetting mocks between tests

23. **Which type of test double is best suited when you want to verify interactions but not provide functional behavior?**  
     a) Stub  
     b) Mock  
     c) Fake  
     d) Real object

24. Hands-on Activity: Document and test a mini project using AI

25. Assignment: Create a fully documented and tested module

**Week 5: Building Custom AI Coding Tools**

* Basics of NLP in coding assistants

## **📍 Introduction**

**Natural Language Processing (NLP)** is a field of artificial intelligence that enables computers to understand, interpret, and generate human language. In coding assistants like ChatGPT, GitHub Copilot, and Amazon CodeWhisperer, NLP plays a pivotal role in bridging human instructions and machine-executable code.

These tools leverage NLP to enhance software development workflows by:

* Interpreting natural language prompts.

* Generating relevant code snippets.

* Explaining code in plain language.

* Suggesting improvements or fixes.

Youtube link: [https://youtu.be/bN2ZZieBXsE](https://youtu.be/bN2ZZieBXsE) 

---

## **💡 What is NLP?**

**Natural Language Processing (NLP)** combines **linguistics**, **computer science**, and **machine learning** to process and analyze large amounts of natural language data.

In coding assistants, NLP is used to:

* Translate plain English queries into programming logic.

* Summarize code functionality.

* Predict and complete code based on context.

---

## **🧩 Core NLP Components Used in Coding Assistants**

1. **Tokenization**

   * Splitting text into words, phrases, or symbols (tokens).

   * Helps the model understand individual components of user input and code.

2. **Named Entity Recognition (NER)**

   * Identifies important elements like variable names, function names, file paths.

3. **Intent Detection**

   * Determines what the user wants to achieve (e.g., “generate a login function”).

4. **Text-to-Code Translation**

   * Converts natural language descriptions into actual code using deep learning models.

5. **Code Summarization**

   * NLP models can summarize code behavior into human-readable descriptions.

6. **Autocomplete and Code Prediction**

   * Language models predict the next block of code based on context.

---

## **⚙️ NLP Techniques Powering Coding Assistants**

1. **Transformer Architecture**

   * Backbone of tools like GPT, Copilot.

   * Uses attention mechanisms to understand relationships between words and code tokens.

2. **Pretraining and Fine-Tuning**

   * Large models are pretrained on diverse datasets including code and natural language.

   * Fine-tuned on specific tasks like bug fixing or comment generation.

3. **Contextual Embeddings**

   * Understands meaning based on surrounding words/code, enabling smart suggestions.

---

## **🧠 Capabilities of NLP-Based Coding Assistants**

| Feature | Description |
| ----- | ----- |
| 💬 Natural Language to Code | Converts plain language prompts into code. |
| 📖 Code Explanation | Describes what a code block does in simple terms. |
| 🧪 Test Case Generation | Creates unit or integration tests based on code. |
| 🔍 Bug Detection | Identifies possible errors and suggests fixes. |
| 🛠 Refactoring | Rewrites or optimizes existing code. |

---

## **📘 Example Prompts and Responses**

| Prompt | Response from NLP Model |
| ----- | ----- |
| "Write a function to check if a number is prime in Python" | Generates the appropriate function |
| "Explain what this function does" | Summarizes the function’s logic |
| "Add error handling to this API call" | Injects try-except or error checking |

---

## **🧠 Benefits of NLP in Coding**

* **Speeds up development** by reducing repetitive tasks.

* **Assists new developers** in understanding and writing code.

* **Improves code quality** by encouraging best practices.

* **Enhances collaboration** by enabling natural language explanations.

---

## **🛑 Limitations and Challenges**

| Challenge | Description |
| ----- | ----- |
| ❓ Ambiguity | Natural language can be vague, leading to incorrect code generation. |
| 🔒 Security | NLP models may inadvertently expose vulnerabilities if not monitored. |
| 📐 Domain-Specific Logic | Complex business logic may require human review. |
| 🧠 Context Retention | Models may lose track of full project context in large files. |

---

## **🧰 Popular Tools Using NLP in Code Assistants**

* **ChatGPT (OpenAI)**: Conversational assistant for code generation, explanation, and debugging.

* **GitHub Copilot**: AI pair programmer that offers code suggestions inline.

* **Amazon CodeWhisperer**: AI coding companion integrated with IDEs for AWS development.

* **Replit Ghostwriter**: Cloud IDE-based assistant that generates and explains code.

---

## **🔮 Future of NLP in Coding**

* **Multi-modal understanding** (e.g., combining code, images, and diagrams).

* **Deeper IDE integration** for real-time, context-aware assistance.

* **Cross-language support** for translating logic between programming languages.

* **Team-aware collaboration** with shared understanding of team coding conventions.

---

## **✅ Summary**

NLP forms the brain of modern coding assistants. By understanding natural language and converting it into structured, executable instructions, these tools empower developers of all levels to write, understand, and debug code faster and more efficiently. While not perfect, they represent a major leap toward making software development more accessible and intelligent.

### **🧠 Basics of NLP in Coding Assistants — Quiz**

#### **🔹 Multiple Choice (MCQs)**

1. **What does NLP stand for in the context of AI and coding assistants?**  
    a) Neural Logic Programming  
    b) Natural Language Processing  
    c) Node Language Protocol  
    d) Non-Linear Programming

2. **Which architecture powers most modern coding assistants like ChatGPT and Copilot?**  
    a) CNN  
    b) RNN  
    c) Transformer  
    d) Decision Tree

3. **Which of the following is NOT a task NLP helps with in coding assistants?**  
    a) Code translation  
    b) Code compilation  
    c) Code summarization  
    d) Natural language to code conversion

4. **What is the role of tokenization in NLP?**  
    a) Encrypt data  
    b) Split text/code into smaller parts  
    c) Translate text  
    d) Merge multiple languages

5. **Which technique is used to identify important elements like function names in code using NLP?**  
    a) Tokenization  
    b) Named Entity Recognition (NER)  
    c) Intent Detection  
    d) Syntax Tree Analysis

6. **What is ‘intent detection’ in the context of NLP coding tools?**  
    a) Tracking how code performs  
    b) Detecting security vulnerabilities  
    c) Understanding what a user wants to achieve  
    d) Formatting code blocks

7. **What does ‘text-to-code translation’ refer to?**  
    a) Converting pseudocode to text  
    b) Translating comments between languages  
    c) Turning natural language into programming code  
    d) Translating code from Python to Java

8. **Which of the following is an example of a prompt that an NLP-based coding assistant can respond to?**  
    a) “Generate a REST API in Flask.”  
    b) “Compile this code.”  
    c) “Upload a Git repo.”  
    d) “Configure a GPU.”

9. **Which of these is a common output of code summarization?**  
    a) Performance metrics  
    b) Syntax trees  
    c) Human-readable descriptions of code  
    d) Code snippets

10. **Which of the following tools uses NLP to provide inline code suggestions in IDEs like VS Code?**  
     a) TensorFlow  
     b) GitHub Copilot  
     c) Firebase  
     d) Selenium

---

#### **🔹 True or False (T/F)**

11. **NLP models can generate unit tests based on plain language prompts.**  
     True / False

12. **Code prediction using NLP only works with Python.**  
     True / False

13. **NLP can be used to refactor and improve code quality.**  
     True / False

14. **One limitation of NLP-based assistants is that they may misunderstand complex business logic.**  
     True / False

15. **Transformer models allow NLP systems to understand context more effectively than older models.**  
     True / False

---

#### **🔹 Fill in the Blanks**

* **\_\_\_\_\_\_\_\_\_\_ is the process of splitting text into individual words, symbols, or tokens.**

* Coding assistants like ChatGPT use NLP to translate \_\_\_\_\_\_\_\_\_\_ language instructions into code.

* **Named Entity Recognition (NER)** helps identify key elements such as \_\_\_\_\_\_\_\_\_\_ and function names in code.

* An NLP coding assistant might use \_\_\_\_\_\_\_\_\_\_ embeddings to understand how a word or token relates to its surrounding context.

* A prompt like **“Explain what this function does”** is an example of using NLP for \_\_\_\_\_\_\_\_\_\_.

* Using APIs (OpenAI, Hugging Face) for code-related tasks

### **📌 Introduction**

APIs from AI platforms like **OpenAI** and **Hugging Face** have revolutionized how developers write, debug, and understand code. These APIs provide access to powerful machine learning models—especially language models—that can perform complex code-related tasks, such as:

* Generating or completing code

* Explaining or refactoring code

* Detecting bugs

* Writing documentation and tests

* Translating code between languages

* Performing code search or summarization

By integrating these APIs into development workflows or custom tools, developers can enhance productivity, improve code quality, and automate repetitive programming tasks.

---

### **🔧 Key APIs and Their Capabilities**

#### **🟡 OpenAI API (ChatGPT / Codex / GPT-4)**

* **Text Completion/Chat API**:

  * Accepts natural language prompts and returns text/code completions.

  * Used to generate code, docstrings, SQL queries, etc.

* **Function calling & tool usage**:

  * Models can interact with external tools or APIs via structured JSON outputs.

* **Code interpreter (Python)**:

  * Runs code snippets for reasoning, visualization, and analysis.

**Popular Use Cases**:

* Auto-generating functions from descriptions

* Converting code between Python, JavaScript, Java, etc.

* Writing docstrings and README files

* Generating unit/integration tests

#### **🔵 Hugging Face Transformers & Inference API**

* Offers hosted models like **StarCoder**, **CodeT5**, **Salesforce CodexGLUE**, etc.

* Allows model inference via REST API or SDK (🤗 Transformers).

* Can be self-hosted or run in browser with WebAssembly (for smaller models).

**Popular Use Cases**:

* Code summarization (e.g., “Explain this function”)

* Code completion and bug detection

* Natural language to code generation (from prompts)

* Fine-tuning for domain-specific code assistance

---

### **🧪 Code-Related Tasks with These APIs**

| Task | Description | Tools |
| ----- | ----- | ----- |
| 🧑‍💻 Code Generation | Generate code snippets from prompts or docstrings. | OpenAI, Hugging Face (CodeGen, StarCoder) |
| 🧪 Test Generation | Automatically generate unit tests, integration tests. | OpenAI, CodeT5+, Codex |
| 📖 Code Explanation | Convert complex code into plain English explanations. | GPT-4, CodeBERT, StarCoder |
| 🔁 Code Translation | Translate code between programming languages. | Codex, TransCoder, CodeT5 |
| 🧼 Code Refactoring | Suggest better variable names, restructure logic. | OpenAI GPT-4, Refact |
| 📄 Docstring/README Generation | Generate documentation for codebases. | GPT-4, CodeT5 |
| 🐛 Bug Detection & Fixing | Identify and fix syntax or logic errors. | OpenAI, CodeBERT |

---

### **📦 How to Use the APIs**

#### **🔑 Prerequisites**

* API key (from [https://platform.openai.com](https://platform.openai.com) or [https://huggingface.co](https://huggingface.co))

* Python or JavaScript environment

* REST client (Postman, cURL) or SDK (like `openai`, `transformers`)

#### **🧩 Example: Using OpenAI API to Generate Python Function**

python

CopyEdit

`import openai`

`openai.api_key = "YOUR_API_KEY"`

`response = openai.ChatCompletion.create(`

  `model="gpt-4",`

  `messages=[`

    `{"role": "system", "content": "You are a helpful assistant."},`

    `{"role": "user", "content": "Write a Python function to check if a number is prime."}`

  `]`

`)`

`print(response['choices'][0]['message']['content'])`

#### **🧩 Example: Using Hugging Face Inference API (Code Summary)**

python

CopyEdit

`import requests`

`API_URL = "https://api-inference.huggingface.co/models/facebook/codegen-350M-mono"`

`headers = {"Authorization": "Bearer YOUR_API_KEY"}`

`payload = {"inputs": "def add(a, b): return a + b"}`

`response = requests.post(API_URL, headers=headers, json=payload)`

`print(response.json())`

---

### **🧠 Benefits of Using AI Code APIs**

* **Time Savings**: Automate documentation, testing, and repetitive tasks.

* **Improved Code Quality**: Get consistent and accurate suggestions.

* **Cross-Language Support**: Translate code or work in unfamiliar languages.

* **Education & Learning**: Learn better practices via AI explanations.

---

### **⚠️ Challenges and Considerations**

* **Security and Privacy**: Avoid sending sensitive code to third-party APIs.

* **Accuracy**: Always review AI-generated code for logic, security, and correctness.

* **Rate Limits**: Be aware of API quotas and pricing tiers.

* **Context Awareness**: Larger context windows yield better results—manage prompt size.

---

### **🧩 Popular Code-Centric Models on Hugging Face**

| Model Name | Use Case | Language |
| ----- | ----- | ----- |
| **StarCoder** | Code generation, completion | Multi-language |
| **CodeT5 / CodeT5+** | Code summarization, docstring generation | Python, Java, etc. |
| **CodeBERT** | Classification, explanation | Multi-language |
| **SantaCoder** | Fine-tuned for Python and JavaScript | Python, JS |
| **Salesforce/codet5p-220m** | Doc generation and test creation | Python |

---

### **🧾 Summary**

Using OpenAI and Hugging Face APIs for code-related tasks allows developers to:

* Automate coding, explanation, and testing

* Improve collaboration and documentation

* Integrate AI into their development pipelines

* Learn and code more effectively

These APIs are powerful tools that, when used with care and review, can significantly improve software development workflows.

### **✅ Quiz: Using APIs (OpenAI, Hugging Face) for Code-Related Tasks**

#### **Multiple Choice (1 point each)**

1. **What is the primary purpose of using OpenAI and Hugging Face APIs in software development?**  
    A) To manage cloud storage  
    B) To generate and analyze source code using AI  
    C) To compile and run Python code  
    D) To test network latency

2. **Which model from OpenAI is commonly used for advanced code generation and explanation?**  
    A) GPT-2  
    B) GPT-4  
    C) BERT  
    D) RoBERTa

3. **What language is supported by most code-related Hugging Face models like CodeT5 and StarCoder?**  
    A) Python  
    B) C\#  
    C) HTML  
    D) Ruby

4. **What does the Hugging Face Inference API return?**  
    A) Executable code  
    B) Docker containers  
    C) Model-generated text or structured data  
    D) Code compilers

5. **Which of the following tasks can be performed using OpenAI’s ChatCompletion API?**  
    A) Hosting databases  
    B) Code generation and explanation  
    C) Internet routing  
    D) SSL encryption

6. **What is one advantage of using OpenAI’s function-calling feature in code workflows?**  
    A) It compiles code directly  
    B) It allows AI to return structured JSON suitable for automation  
    C) It sends emails  
    D) It sets up virtual machines

7. **Which Hugging Face model is best suited for code summarization?**  
    A) BERT  
    B) CodeT5  
    C) YOLO  
    D) LLaMA

8. **Which programming language is typically used to call these APIs?**  
    A) Python  
    B) Assembly  
    C) COBOL  
    D) Shell

9. **What must you have to access either OpenAI or Hugging Face APIs?**  
    A) Username only  
    B) GitHub account  
    C) API key/token  
    D) CLI tool only

10. **Which of the following is NOT a common use case for AI-powered code APIs?**  
     A) Code generation  
     B) Bug detection  
     C) Code hosting  
     D) Documentation writing

---

#### **True or False (1 point each)**

* T/F: You can use Hugging Face models offline by downloading and hosting them locally.

* T/F: OpenAI’s GPT models can directly execute Python code on your local machine.

* T/F: AI-generated code should always be manually reviewed for security and accuracy.

* T/F: CodeT5 is a text-to-image transformer model designed for use in graphics generation.

* T/F: OpenAI’s Chat API can generate SQL queries based on user prompts.

* T/F: Hugging Face APIs allow you to switch models by simply changing the endpoint URL.

* T/F: AI models like GPT-4 can identify logical bugs in code and suggest corrections.

* T/F: Using these APIs can help with legacy code documentation and refactoring.

* T/F: Both OpenAI and Hugging Face APIs support real-time collaborative coding sessions.

* T/F: StarCoder is an open-source model suitable for multi-language code generation.

* Designing a command-line AI coding assistant

### **📌 Introduction**

A **command-line AI coding assistant** is a tool that interacts with users through the terminal to assist with coding tasks using AI. It leverages natural language processing (NLP) and AI APIs (like OpenAI or Hugging Face) to provide services such as:

* Generating or explaining code

* Debugging errors

* Writing unit tests

* Creating documentation

* Refactoring functions

This assistant acts as a personal developer companion that enhances productivity directly from the command line.

Youtube link: [https://youtu.be/6OJm5afun8k](https://youtu.be/6OJm5afun8k) 

---

### **🔧 Core Components**

#### **1\. Command-Line Interface (CLI)**

The user-facing part of the tool that takes natural language input and displays results.

* Built with tools like `argparse`, `click`, or `Typer` in Python.

* Can include commands like:

  * `generate`: Generate code from prompt

  * `explain`: Explain the purpose of a code snippet

  * `test`: Generate tests

  * `doc`: Create docstrings

#### **2\. NLP Backend (AI API Integration)**

Handles language understanding and code generation.

* Common APIs used:

  * **OpenAI GPT-4/3.5**

  * **Hugging Face Transformers** (like CodeT5, StarCoder)

* API integration via HTTP requests (`requests` in Python) or SDKs.

#### **3\. Prompt Engineering Layer**

* Translates user intent into effective prompts for the AI.

Example:

 vbnet  
CopyEdit  
`Prompt: "Write a Python function to calculate Fibonacci numbers."`

`AI Prompt: "Generate a Python function that returns the Nth Fibonacci number using recursion."`

* 

#### **4\. Input/Output Processing**

* Supports file input: e.g., `assistant explain my_script.py`

* Formats output (with syntax highlighting using `rich` or `pygments`).

* Can output directly to a file if needed.

#### **5\. Error Handling and Fallbacks**

* Captures API or parsing errors.

* Suggests alternative prompts or corrections if something fails.

---

### **⚙️ Common Features**

| Feature | Description |
| ----- | ----- |
| **Code Generation** | Takes a task description and returns usable code in a specified language |
| **Code Explanation** | Breaks down code logic in plain English |
| **Docstring & Comment Insertion** | Generates inline comments or docstrings |
| **Test Case Generation** | Creates unit or integration tests |
| **Refactoring Suggestions** | Suggests or applies code improvements |
| **Bug Fixing** | Identifies potential errors and suggests fixes |
| **Documentation Creation** | Generates README or API docs from code |

---

### **🧠 AI Prompt Examples**

Generate code:

 vbnet  
CopyEdit  
`Prompt: assistant generate "Python function to convert Celsius to Fahrenheit"`

* 

Explain code:

 makefile  
CopyEdit  
`Prompt: assistant explain my_code.py`

* 

Write unit tests:

 bash  
CopyEdit  
`Prompt: assistant test "Function that calculates factorial using recursion"`

* 

---

### **🛠️ Tech Stack Suggestions**

* **Language**: Python (for rapid prototyping)

* **Libraries**:

  * `click` or `Typer` for CLI interface

  * `requests` or `openai` SDK for API access

  * `rich` for colored terminal output

* **Optional Add-ons**:

  * File system access: Allow file-based inputs

  * Shell integration: Aliases or terminal shortcuts

  * Cache history of prompts/responses for review

---

### **🔐 Security & Ethics**

* Be mindful of uploading **proprietary or sensitive code** to cloud APIs.

* Mask or remove confidential data before sending code to the AI.

* Include a disclaimer and privacy note for users.

---

### **🔄 Workflow Diagram**

plaintext

CopyEdit

`User Input --> CLI Parser --> Prompt Builder --> AI API -->`

                            `<-- AI Response <-- Result Formatter <-- Output`

---

### **✅ Best Practices**

* **Use descriptive and specific prompts** for better AI results.

* **Limit tokens/response size** for performance and cost.

* **Log interactions** for improvement or debugging.

* **Keep it modular**, so you can replace APIs or features later.

---

### **📦 Deployment Options**

* **Local Installation** (via pip or GitHub)

* **Dockerized CLI Assistant** for portability

* **Standalone Executable** (via PyInstaller)

---

### **📘 Example Use Case**

bash

CopyEdit

`$ assistant generate "Create a Python function to check for prime numbers"`

python

CopyEdit

`def is_prime(n):`

    `"""Check if a number is prime."""`

    `if n <= 1:`

        `return False`

    `for i in range(2, int(n**0.5) + 1):`

        `if n % i == 0:`

            `return False`

    `return True`

---

### **📌 Conclusion**

A command-line AI coding assistant offers a fast, focused, and highly accessible way for developers to leverage AI in everyday tasks. With the right combination of NLP, APIs, and UX design, such a tool can significantly boost productivity, especially for solo developers, educators, or teams working in terminal-heavy environments.

### **🧪 Quiz: Designing a Command-Line AI Coding Assistant**

#### **Multiple Choice (1–15)**

1. **What is the primary purpose of a command-line AI coding assistant?**  
    A) Compile source code  
    B) Provide AI-powered help with coding tasks via the terminal  
    C) Replace programming languages  
    D) Run operating system commands

2. **Which Python library is commonly used to build command-line interfaces?**  
    A) NumPy  
    B) Flask  
    C) Click  
    D) Requests

3. **Which AI platform is commonly integrated into coding assistants to understand and generate code?**  
    A) OpenCV  
    B) Hugging Face  
    C) Firebase  
    D) MongoDB

4. **What is prompt engineering?**  
    A) Writing database queries  
    B) Structuring API routes  
    C) Crafting effective inputs for AI models  
    D) Designing hardware interfaces

5. **Which module would you use to send HTTP requests to an AI API in Python?**  
    A) OpenAI  
    B) Math  
    C) Requests  
    D) Pygame

6. **Which of the following is a common feature of AI coding assistants?**  
    A) Creating databases  
    B) Explaining code  
    C) Deploying websites  
    D) Compressing files

7. **What is the role of the ‘rich’ or ‘pygments’ libraries in CLI tools?**  
    A) Performing AI computations  
    B) Rendering syntax-highlighted output  
    C) Building neural networks  
    D) Fetching URLs

8. **Which of these tools is used for AI-assisted code generation in IDEs?**  
    A) GitHub Copilot  
    B) Git  
    C) Postman  
    D) MySQL

9. **A CLI assistant that generates unit tests should:**  
    A) Provide test results only  
    B) Only test integration logic  
    C) Create tests for individual functions or methods  
    D) Access internet history

10. **In which scenario would you use the `assistant explain` command?**  
     A) To delete files  
     B) To run performance tests  
     C) To get a natural language explanation of a code snippet  
     D) To install packages

11. **What is the first step in designing a CLI AI assistant?**  
     A) Buying a domain  
     B) Choosing a UI framework  
     C) Defining user commands and use cases  
     D) Creating a SQL database

12. **Which file format is typically used to configure secrets like API keys?**  
     A) .exe  
     B) .env  
     C) .jpg  
     D) .xml

13. **What does CLI stand for?**  
     A) Code Link Interface  
     B) Command Language Instruction  
     C) Command-Line Interface  
     D) Common Logic Infrastructure

14. **How can you secure user input before sending it to an AI API?**  
     A) Ignore it  
     B) Encrypt it using machine learning  
     C) Sanitize or mask sensitive data  
     D) Compile it first

15. **Which of the following is NOT a common output format of a CLI coding assistant?**  
     A) JSON  
     B) XML  
     C) Binary Executable  
     D) Markdown

---

#### **True/False (16–20)**

* **A CLI assistant can generate code documentation such as README files and docstrings.**  
   ✅ True / ❌ False

* **The only language supported by OpenAI's coding assistant tools is Python.**  
   ✅ True / ❌ False

* **Using AI reduces the need for manually written unit tests.**  
   ✅ True / ❌ False

* **You must always have internet access to use an AI-based CLI coding assistant.**  
   ✅ True / ❌ False

* **CLI-based assistants are not useful in modern development environments.**  
   ✅ True / ❌ False

* Hands-on Activity: Build a mini AI coding assistant

## **📌 Overview**

In this hands-on activity, you will **build a simple command-line AI coding assistant** that uses natural language prompts to generate, explain, and refactor code. The assistant will interact with the user through the terminal and utilize an AI model (like OpenAI's GPT or Hugging Face's transformers) via API calls.

This project introduces key AI integration concepts such as:

* Natural Language Processing (NLP)

* Command-line interfaces (CLI)

* API usage

* Prompt engineering

* Code generation and refactoring

Youtube link: [https://youtu.be/6OJm5afun8k](https://youtu.be/6OJm5afun8k) 

---

## **🧰 Prerequisites**

Before you begin, ensure you have:

* Python 3.7+

* An API key from [OpenAI](https://platform.openai.com/) or [Hugging Face](https://huggingface.co/)

* Basic Python programming skills

`requests` or `openai` Python library installed:

 bash  
CopyEdit  
`pip install openai`

* 

---

## **🏗️ Step-by-Step: Build Your Mini Coding Assistant**

### **1\. Set Up Your Project**

Create a directory and file:

bash

CopyEdit

`mkdir ai-coding-assistant`

`cd ai-coding-assistant`

`touch assistant.py`

### **2\. Import Required Libraries**

python

CopyEdit

`import openai`

`import os`

### **3\. Configure the API**

Set your API key securely:

python

CopyEdit

`openai.api_key = os.getenv("OPENAI_API_KEY")`

Or directly (for testing only):

python

CopyEdit

`openai.api_key = "your-api-key-here"`

### **4\. Define the Prompt and API Call Function**

python

CopyEdit

`def get_ai_response(prompt):`

    `response = openai.ChatCompletion.create(`

        `model="gpt-3.5-turbo",  # Or "gpt-4" if available`

        `messages=[{"role": "user", "content": prompt}],`

        `temperature=0.5`

    `)`

    `return response['choices'][0]['message']['content']`

### **5\. Create CLI Interface**

python

CopyEdit

`def main():`

    `print("🤖 Welcome to Mini AI Coding Assistant")`

    `while True:`

        `user_input = input("🧠 Ask me to generate, explain or refactor code (or 'exit'): ")`

        `if user_input.lower() == "exit":`

            `break`

        `response = get_ai_response(user_input)`

        `print("\n🛠️ Assistant:\n", response)`

`if __name__ == "__main__":`

    `main()`

---

## **🧪 Example Interactions**

* **Prompt:** "Write a Python function to check if a string is a palindrome."

* **Prompt:** "Explain what this function does: `def factorial(n)`..."

* **Prompt:** "Refactor the following code to use a list comprehension..."

---

## **⚙️ Optional Enhancements**

* Add support for **saving responses** to a file

* Enable syntax highlighting with libraries like `pygments`

* Allow **copy-paste of code snippets** into files

* Add support for **context/history**

---

## **✅ Learning Outcomes**

By the end of this activity, you should be able to:

* Understand how AI coding assistants interpret prompts

* Utilize NLP APIs in a real Python project

* Implement and expand a CLI-based tool

* Perform basic prompt engineering

* Integrate AI into development workflows

---

## **🧠 Tips for Prompt Engineering**

* Be clear and specific with instructions.

* Use structured prompts: e.g., “Refactor this to use recursion: \[code\]”

* Use delimiters (like triple backticks) for code inputs.

---

## **🔐 Ethical and Practical Considerations**

* **Rate limits** and **token usage** apply—watch your API usage.

* Avoid sharing **sensitive or private code** with cloud-based AI models.

* Always **review AI-generated code** before using in production.

---

## **🎯 Summary**

A mini AI coding assistant is a lightweight tool that brings the power of NLP and AI into the terminal, helping developers write, understand, and modify code faster. This activity not only reinforces your understanding of AI APIs and prompt design but also shows how to make productivity-boosting tools using real-world technologies.

### **🧪 Quiz: Building a Mini AI Coding Assistant**

#### **Multiple Choice Questions (MCQs)**

1. **What is the primary purpose of a mini AI coding assistant?**  
    A. To replace compilers  
    B. To interact with APIs  
    C. To assist developers with code generation, explanation, and refactoring  
    D. To format Python code

    ✅ **Answer:** C

2. **Which language is commonly used to build a CLI AI coding assistant?**  
    A. Java  
    B. Python  
    C. C++  
    D. JavaScript

    ✅ **Answer:** B

3. **Which OpenAI model is typically used for conversational AI coding assistants?**  
    A. davinci-002  
    B. text-curie-001  
    C. gpt-3.5-turbo  
    D. bert-base

    ✅ **Answer:** C

4. **What environment variable is commonly used to store API keys securely?**  
    A. `SECRET_KEY`  
    B. `TOKEN`  
    C. `API_TOKEN`  
    D. `OPENAI_API_KEY`

    ✅ **Answer:** D

5. **What does `temperature` control in OpenAI API responses?**  
    A. Code execution speed  
    B. Randomness of the output  
    C. Memory usage  
    D. Token limit

    ✅ **Answer:** B

6. **Which Python module is used to access environment variables?**  
    A. `sys`  
    B. `configparser`  
    C. `os`  
    D. `dotenv`

    ✅ **Answer:** C

7. **What is the role of prompt engineering in an AI assistant?**  
    A. Installing libraries  
    B. Creating concise and clear input for accurate responses  
    C. Encrypting prompts  
    D. Automating Git operations

    ✅ **Answer:** B

8. **What should the assistant do if the user types "exit"?**  
    A. Save the session  
    B. Raise an error  
    C. Restart the assistant  
    D. Terminate the program

    ✅ **Answer:** D

9. **Which package must be installed to use OpenAI’s GPT API in Python?**  
    A. `openai`  
    B. `gpt3`  
    C. `chatgpt`  
    D. `api-ai`

    ✅ **Answer:** A

10. **What does CLI stand for?**  
     A. Client Library Interface  
     B. Command Language Interface  
     C. Common Layer Instruction  
     D. Command Line Interface

     ✅ **Answer:** D

---

#### **True or False**

11. **The assistant can both generate and explain code.**

     ✅ **Answer:** True

12. **You must share sensitive code with the AI model to get accurate responses.**

     ✅ **Answer:** False

13. **You should always review AI-generated code before deploying it.**

     ✅ **Answer:** True

14. **AI assistants are a replacement for all human developers.**

     ✅ **Answer:** False

15. **The assistant's effectiveness improves with specific and detailed prompts.**

     ✅ **Answer:** True

---

#### **Fill in the Blanks**

* The method `__name__ == "__main__"` is used to indicate the \_\_\_\_\_\_\_\_\_\_ point of a Python script.

   ✅ **Answer:** entry

* To install the OpenAI library in Python, you use the command `__________`.

   ✅ **Answer:** pip install openai

* The AI assistant should use the \_\_\_\_\_\_\_\_\_\_ function to get user input in Python CLI.

   ✅ **Answer:** input()

* The function used to call OpenAI’s chat model is `__________`.

   ✅ **Answer:** openai.ChatCompletion.create

* A mini coding assistant typically helps improve \_\_\_\_\_\_\_\_\_\_ and productivity in development.

   ✅ **Answer:** efficiency

**Week 6: Ethics, Limitations & Real-World Applications**

* Intellectual property, code plagiarism, and licensing

**Intellectual Property** refers to creations of the mind, including inventions, literary and artistic works, designs, symbols, names, and images used in commerce. In software development, IP covers source code, algorithms, designs, documentation, and other creative outputs.

### **Key Aspects:**

* **Copyright:** Automatically protects original works like code, documentation, and graphics. It gives the author exclusive rights to reproduce, distribute, display, or perform the work.

* **Patents:** Protect novel inventions or processes. Software patents are controversial but can protect specific algorithms or technical innovations.

* **Trademarks:** Protect branding elements like names, logos, and slogans.

* **Trade Secrets:** Protect confidential business information (like proprietary algorithms or techniques) as long as secrecy is maintained.

Youtube link: [https://www.youtube.com/watch?v=Hoow9-rmmuM](https://www.youtube.com/watch?v=Hoow9-rmmuM) 

### **Importance of IP in Software:**

* Encourages innovation by protecting creators’ rights.

* Defines ownership of code, which affects usage and distribution.

* Critical in commercial projects and open source.

---

## **2\. Code Plagiarism**

**Code Plagiarism** is the unethical or illegal practice of copying someone else's code without permission or proper attribution, presenting it as one’s own.

### **Forms of Code Plagiarism:**

* Copying entire files or large chunks of code.

* Minor edits or renaming variables but largely copying logic.

* Using code snippets without citing the source.

* Using proprietary code in open projects without authorization.

### **Consequences:**

* Legal repercussions, including lawsuits and penalties.

* Damage to reputation and credibility.

* Academic sanctions in educational contexts.

* Loss of trust in professional environments.

### **How to Avoid Code Plagiarism:**

* Write original code or thoroughly understand and rewrite referenced code.

* Always give credit to original authors.

* Use proper citations in comments or documentation.

* Use plagiarism detection tools (e.g., MOSS, Turnitin).

* Follow project licensing terms strictly.

---

## **3\. Software Licensing**

Software licensing is a legal instrument governing how software can be used, modified, and distributed. It defines the rights and restrictions for users and developers.

### **Types of Software Licenses:**

#### **A. Proprietary Licenses**

* Software is closed-source.

* Users have limited rights (e.g., use but no modification).

* Examples: Microsoft Windows, Adobe Photoshop.

#### **B. Open Source Licenses**

* Source code is made available.

* Users can modify and redistribute under license terms.

* Promote collaboration and transparency.

### **Popular Open Source License Types:**

| License Name | Permissions | Restrictions | Compatibility Notes |
| ----- | ----- | ----- | ----- |
| **MIT License** | Use, modify, distribute freely | Must include copyright notice | Very permissive, compatible widely |
| **Apache 2.0** | Use, modify, distribute, patent grant | Must include notice, state changes | Compatible with GPLv3 |
| **GPL (GNU General Public License)** | Use, modify, distribute under same license (copyleft) | Must distribute derivative works under GPL | Strong copyleft; enforces sharing |
| **BSD Licenses** | Use, modify, distribute freely | Attribution required | Permissive |

---

### **Key Licensing Concepts:**

* **Copyleft:** Requires derivative works to adopt the same license (e.g., GPL).

* **Permissive Licenses:** Allow more freedom with fewer restrictions (e.g., MIT, BSD).

* **Dual Licensing:** Offering software under both open source and proprietary licenses.

* **License Compatibility:** Determines if code under one license can be combined with code under another.

---

## **4\. Best Practices for Developers**

* Always check the license of any third-party code or library before use.

* Include license headers in your source files.

* When sharing code publicly, choose a license that aligns with your goals.

* Respect license terms to avoid legal issues.

* Attribute sources when using others' code or ideas.

* Use license management tools in larger projects for compliance.

---

## **Summary**

Understanding **Intellectual Property, Code Plagiarism, and Licensing** is essential for ethical and legal software development. It protects creators' rights, promotes fair use and sharing, and avoids legal complications. Adhering to licensing terms and avoiding plagiarism builds trust and sustains the software ecosystem.

### **Quiz: Intellectual Property, Code Plagiarism, and Licensing**

* **What type of intellectual property protects original source code automatically upon creation?**  
   a) Patent  
   b) Trademark  
   c) Copyright  
   d) Trade Secret

* **Which intellectual property protects inventions or specific technical processes?**  
   a) Trademark  
   b) Patent  
   c) Copyright  
   d) Trade Secret

* **What is the unethical practice of copying someone else’s code without permission or attribution called?**  
   a) Licensing  
   b) Forking  
   c) Plagiarism  
   d) Debugging

* **Which license requires that derivative works also be distributed under the same license?**  
   a) MIT License  
   b) Apache License  
   c) GPL (General Public License)  
   d) BSD License

* **What does “copyleft” mean in the context of software licenses?**  
   a) Code cannot be modified  
   b) Derivative works must use the same license  
   c) Code is public domain  
   d) Code cannot be distributed

* **Which license is considered very permissive and requires only attribution?**  
   a) GPL  
   b) MIT  
   c) Proprietary  
   d) Creative Commons

* **True or False: It is acceptable to copy code from the internet and use it in your project without credit if you change variable names.**

* **Which of the following is NOT typically protected by intellectual property law?**  
   a) Source code  
   b) Logos and branding  
   c) Algorithms  
   d) Public domain code

* **What type of license allows you to freely use, modify, and distribute code but requires you to include the original copyright notice?**  
   a) Proprietary License  
   b) MIT License  
   c) GPL License  
   d) No license

* **What should you do before using third-party code in your project?**  
   a) Use it freely without checking  
   b) Review and comply with its license terms  
   c) Rewrite it completely  
   d) Remove all comments

* **Which intellectual property protects a company’s confidential code or algorithms if they are kept secret?**  
   a) Patent  
   b) Copyright  
   c) Trade Secret  
   d) Trademark

* **True or False: Using an AI tool to generate code eliminates the risk of code plagiarism.**

* **What is the risk of ignoring software licenses in a commercial project?**  
   a) Faster development  
   b) Legal penalties and lawsuits  
   c) Better code quality  
   d) Easier collaboration

* **Which license is compatible with commercial use and requires providing a patent grant?**  
   a) Apache 2.0 License  
   b) GPL License  
   c) Proprietary License  
   d) BSD License

* **What is a common way to give credit when using someone else’s code?**  
   a) Removing their comments  
   b) Adding a citation or attribution in your code comments  
   c) Encrypting their code  
   d) Publishing your project without mentioning them

* **What legal instrument typically governs how software can be used, modified, and shared?**  
   a) User Manual  
   b) Software License  
   c) Programming Language  
   d) API Documentation

* **True or False: Patents are often used to protect specific software algorithms or processes.**

* **Which of the following licenses is most restrictive in terms of requiring sharing of derivative works?**  
   a) MIT License  
   b) Apache License  
   c) GPL License  
   d) BSD License

* **What is the best practice when incorporating open-source code into a proprietary project?**  
   a) Ignore the license and use the code  
   b) Check license compatibility and comply accordingly  
   c) Delete all license files  
   d) Hide the source code

* **Which intellectual property type protects a company’s name and logo?**  
   a) Copyright  
   b) Patent  
   c) Trademark  
   d) Trade Secret

* Limitations and biases in AI-generated code

## **Introduction**

AI-generated code refers to source code automatically produced by artificial intelligence models like ChatGPT, GitHub Copilot, or other code synthesis tools. While AI-powered code generation can boost productivity and assist developers, it has inherent limitations and biases that must be understood and managed to ensure code quality, security, and fairness.

Youtube link: [https://www.youtube.com/watch?v=BGZB9dn0GV4](https://www.youtube.com/watch?v=BGZB9dn0GV4) 

---

## **1\. Limitations of AI-Generated Code**

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

## **2\. Biases in AI-Generated Code**

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

## **3\. Mitigation Strategies**

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

## **4\. Summary**

While AI-generated code is a powerful aid for developers, it has important limitations including incomplete logic, security risks, and lack of full context. Additionally, biases embedded in training data can manifest in generated code, affecting quality and inclusiveness. Developers must apply careful review, testing, and ethical considerations when using AI to write code to ensure robust, secure, and fair software development.

### **Quiz: Limitations and Biases in AI-Generated Code**

* **What is one common limitation of AI-generated code regarding logic?**  
   A) It always produces fully tested code  
   B) It may contain incomplete or incorrect logic  
   C) It guarantees perfect security  
   D) It only writes comments

* **Why might AI-generated code contain syntax errors?**  
   A) Because AI doesn’t understand programming languages at all  
   B) Because AI sometimes produces imperfect or partial code snippets  
   C) Because the AI is designed to produce errors  
   D) None of the above

* **What does it mean that AI lacks "context awareness" in code generation?**  
   A) It ignores variable names  
   B) It doesn't fully understand the entire codebase or runtime environment  
   C) It can only generate code for one language  
   D) It only understands English

* **Which of the following is a security risk often found in AI-generated code?**  
   A) Proper input validation  
   B) Injection flaws like SQL injection  
   C) Automatic encryption  
   D) Comprehensive logging

* **How does over-reliance on AI-generated code negatively affect software development?**  
   A) It removes the need for testing  
   B) Developers might skip reviewing and understanding the code  
   C) It increases manual coding time  
   D) It guarantees code quality

* **Why can training data bias affect AI-generated code?**  
   A) Because AI models generate code randomly  
   B) Because the training data may include outdated or insecure coding practices  
   C) Because AI models only understand simple code  
   D) Because training data is always perfect

* **Which languages are AI models typically better at generating code for?**  
   A) Languages with more representation in training data, like Python and JavaScript  
   B) Rare and emerging languages only  
   C) Only low-level assembly languages  
   D) None of the above

* **What type of bias might cause AI to generate offensive or insensitive comments in code?**  
   A) Syntax bias  
   B) Ethical and inclusivity bias from training data  
   C) Logical bias  
   D) Language bias

* **What is the best way to ensure the security of AI-generated code?**  
   A) Trust AI-generated code blindly  
   B) Manually review and test the code thoroughly  
   C) Ignore all AI suggestions  
   D) Use AI only for comments

* **What is a recommended practice when using AI to generate code?**  
   A) Use AI outputs as final, ready-to-deploy code  
   B) Combine AI-generated code with human review and testing  
   C) Avoid using AI tools completely  
   D) Skip documentation since AI generates it automatically

* **What does "human-in-the-loop" mean in the context of AI-generated code?**  
   A) AI writes code without any human involvement  
   B) Humans review and approve AI-generated code before use  
   C) AI replaces all developers  
   D) AI only generates comments

* **How can developers reduce bias in AI-generated code?**  
   A) Use outdated training datasets  
   B) Use diverse and curated training data  
   C) Ignore ethical guidelines  
   D) Use only one programming language

* **Which of the following is NOT a typical limitation of AI code generation?**  
   A) Incomplete understanding of business logic  
   B) Generating perfect, bug-free code every time  
   C) Producing security vulnerabilities  
   D) Lack of adherence to coding style guidelines

* **Why is testing AI-generated code crucial?**  
   A) To verify correctness and catch hidden bugs  
   B) To avoid writing any code manually  
   C) Because AI code never works otherwise  
   D) Testing is not necessary with AI-generated code

* **What is a typical sign that AI has produced biased code?**  
   A) Code uses inclusive and neutral language  
   B) Code or comments include offensive or culturally insensitive terms  
   C) Code runs faster  
   D) Code has more documentation

* **Which AI tool is known for generating code snippets based on natural language prompts?**  
   A) GitHub Copilot  
   B) Microsoft Word  
   C) Adobe Photoshop  
   D) Google Chrome

* **What is one limitation when AI attempts to generate code involving external systems?**  
   A) AI fully understands all API specifications  
   B) AI may fail to correctly handle side effects or asynchronous operations  
   C) AI never generates asynchronous code  
   D) AI replaces external dependencies automatically

* **How can developers improve the quality of AI-generated code suggestions?**  
   A) Provide detailed and specific prompts  
   B) Use vague prompts to get diverse code  
   C) Ignore the context of the project  
   D) Use only default AI settings

* **Why should developers avoid blindly trusting AI-generated code?**  
   A) AI never makes mistakes  
   B) AI might produce inaccurate or insecure code due to lack of understanding  
   C) AI understands business rules perfectly  
   D) AI always tests the code for you

* **Which of the following best summarizes how AI-generated code should be treated?**  
   A) As a helpful starting point requiring review, testing, and refinement  
   B) As the final product, ready for deployment without changes  
   C) As irrelevant and unusable code  
   D) As a replacement for all human developers

* Case studies: AI in real-world dev workflows

### **Introduction**

Artificial Intelligence (AI) has increasingly become an integral part of software development workflows, revolutionizing how developers write, test, and maintain code. By automating routine tasks, improving code quality, and accelerating delivery, AI tools enhance productivity and collaboration. This note explores real-world case studies demonstrating AI's impact on development workflows across various industries and organizations.

---

### **1\. GitHub Copilot at Microsoft and Open Source Projects**

* **Context:**  
   GitHub Copilot, powered by OpenAI Codex, is an AI pair programmer integrated within code editors like Visual Studio Code.

* **Use Case:**  
   Developers at Microsoft and many open-source projects use Copilot to generate code snippets, complete functions, and suggest test cases in real-time.

* **Impact:**

  * Reduced boilerplate coding time by up to 30%.

  * Enhanced developer productivity, allowing focus on complex problem-solving rather than repetitive coding.

  * Improved onboarding experience for new developers by providing instant coding suggestions.

* **Lessons Learned:**

  * AI suggestions require human oversight to catch context-specific bugs or security issues.

  * Effective prompt engineering improves code relevance and quality.

---

### **2\. AI-Powered Testing at Google**

* **Context:**  
   Google employs AI to automate test generation and bug detection across its large-scale codebases.

* **Use Case:**  
   Using AI-driven tools, Google automatically generates unit tests and integration tests for new code commits, especially focusing on edge cases.

* **Impact:**

  * Increased test coverage, catching subtle bugs before deployment.

  * Reduced manual testing effort and cycle times.

  * Enabled continuous integration pipelines to run faster and with higher confidence.

* **Lessons Learned:**

  * AI aids in maintaining legacy systems by retrofitting tests where documentation is sparse.

  * Collaboration between AI tools and human QA engineers ensures quality.

---

### **3\. AI in Code Review at Facebook (Meta)**

* **Context:**  
   Facebook integrates AI models into its code review processes.

* **Use Case:**  
   AI analyzes pull requests to flag potential security vulnerabilities, coding standard violations, and performance issues.

* **Impact:**

  * Faster turnaround times for code reviews.

  * Higher detection rate of security flaws early in development.

  * Reduced cognitive load on human reviewers.

* **Lessons Learned:**

  * AI complements but does not replace human judgment in critical code review decisions.

  * Continuous retraining of AI models on internal codebase patterns improves relevance.

---

### **4\. AI-Assisted DevOps at Amazon Web Services (AWS)**

* **Context:**  
   AWS uses AI to optimize infrastructure deployment and monitoring.

* **Use Case:**  
   AI analyzes application logs and metrics to predict system failures and suggest code fixes or configuration changes.

* **Impact:**

  * Proactive detection of performance bottlenecks and outages.

  * Automated remediation workflows reduce downtime.

  * Enhanced collaboration between development and operations teams.

* **Lessons Learned:**

  * Integration of AI insights into developer workflows requires good UX design.

  * Transparency in AI recommendations builds developer trust.

---

### **5\. AI for Documentation and Knowledge Management at IBM**

* **Context:**  
   IBM leverages AI to generate documentation and knowledge base articles from code repositories.

* **Use Case:**  
   AI tools automatically produce API documentation, usage examples, and developer guides.

* **Impact:**

  * Up-to-date and consistent documentation without heavy manual effort.

  * Faster onboarding for new developers and customers.

  * Improved developer satisfaction and reduced support tickets.

* **Lessons Learned:**

  * AI-generated documentation needs editorial review to ensure clarity and accuracy.

  * Combining AI with domain experts creates high-value content.

---

### **Common Benefits Across Case Studies**

* **Increased Productivity:** Automating repetitive tasks and code generation speeds up development cycles.

* **Improved Code Quality:** AI identifies bugs, security risks, and style issues early.

* **Better Collaboration:** AI tools facilitate communication between developers, testers, and operations teams.

* **Learning and Onboarding:** AI accelerates learning curves by providing examples, explanations, and suggestions.

---

### **Challenges and Considerations**

* **Trust and Verification:** Developers must verify AI outputs to avoid introducing errors.

* **Context Sensitivity:** AI tools sometimes miss nuanced business logic or edge cases.

* **Security and Privacy:** Sharing proprietary code with cloud-based AI requires caution.

* **Model Bias and Limitations:** AI can inherit biases from training data, affecting suggestions.

---

### **Conclusion**

AI is transforming real-world development workflows by acting as an intelligent assistant that complements human expertise. These case studies show that while AI boosts efficiency and quality, successful integration depends on human oversight, continuous improvement, and thoughtful adoption strategies. As AI technologies evolve, their role in software development is expected to deepen, fostering innovation and more reliable software products.

### **Quiz: AI in Real-World Development Workflows**

* **What AI tool is integrated within Visual Studio Code to assist developers by generating code snippets?**  
   a) Amazon CodeWhisperer  
   b) GitHub Copilot  
   c) Replit Ghostwriter  
   d) OpenAI Codex

* **Which company is known for using AI to automatically generate unit and integration tests to increase test coverage?**  
   a) Facebook  
   b) Google  
   c) Microsoft  
   d) IBM

* **In Facebook’s AI-assisted code review process, what types of issues does AI primarily help to detect?**  
   a) UI design problems  
   b) Security vulnerabilities and coding standard violations  
   c) Marketing strategies  
   d) Customer feedback

* **What is a key benefit of using AI-powered testing in large codebases?**  
   a) Reducing developer salaries  
   b) Increasing test coverage and catching subtle bugs  
   c) Removing all human testers  
   d) Slowing down deployment pipelines

* **Which workflow does AI assist with at Amazon Web Services (AWS)?**  
   a) Writing blog posts  
   b) Optimizing infrastructure deployment and monitoring  
   c) Customer support calls  
   d) Manual debugging of code

* **How does AI improve the developer onboarding process in Microsoft’s Copilot tool?**  
   a) By automatically assigning tasks  
   b) By providing instant coding suggestions and examples  
   c) By replacing onboarding managers  
   d) By limiting access to documentation

* **What is a common challenge when integrating AI-generated code or tests into development workflows?**  
   a) AI always writes perfect code  
   b) Developers must verify AI outputs to avoid errors  
   c) AI can replace human creativity entirely  
   d) AI slows down the development process

* **What role does human oversight play in AI-assisted code review?**  
   a) None; AI replaces humans fully  
   b) Humans review AI suggestions for context and correctness  
   c) Humans only approve AI-generated documentation  
   d) Humans design logos for AI tools

* **Which company uses AI to automatically generate API documentation and developer guides?**  
   a) Google  
   b) IBM  
   c) Facebook  
   d) Microsoft

* **Why is transparency in AI recommendations important in development workflows?**  
   a) It makes AI run faster  
   b) It builds developer trust and acceptance  
   c) It increases sales of AI tools  
   d) It reduces the need for documentation

* **What is one way AI can help with legacy codebases?**  
   a) Rewrite all legacy code automatically  
   b) Generate tests where coverage is missing  
   c) Remove legacy code from repositories  
   d) Convert code to a new language instantly

* **In AI-powered DevOps workflows, what type of data do AI tools analyze to predict system failures?**  
   a) Developer emails  
   b) Application logs and performance metrics  
   c) Marketing reports  
   d) Social media posts

* **Which AI technology powers GitHub Copilot?**  
   a) OpenAI Codex  
   b) Amazon SageMaker  
   c) Google TensorFlow  
   d) IBM Watson

* **What is one limitation of AI in real-world development workflows?**  
   a) It can understand complex business logic perfectly  
   b) It might miss context-specific nuances without enough data  
   c) It replaces all human developers  
   d) It does not require any training

* **How does AI contribute to improved collaboration in development teams?**  
   a) By automating HR processes  
   b) By facilitating communication with code suggestions and explanations  
   c) By replacing team meetings  
   d) By handling customer complaints

* **What kind of testing can AI tools automatically generate to help developers?**  
   a) Only manual test plans  
   b) Unit tests and integration tests  
   c) Marketing tests  
   d) Hardware compatibility tests

* **How does AI help reduce downtime in production environments?**  
   a) By suggesting configuration changes and automating remediation  
   b) By deleting logs  
   c) By limiting access to servers  
   d) By sending emails to customers

* **Why is editorial review necessary for AI-generated documentation?**  
   a) AI documents are always inaccurate  
   b) To ensure clarity, accuracy, and domain-specific correctness  
   c) To translate it into other languages  
   d) To shorten the documentation length

* **What is a common theme among all the case studies regarding AI in software development?**  
   a) AI replaces all development jobs  
   b) AI tools augment human expertise and improve productivity  
   c) AI slows down software releases  
   d) AI only works for small projects

* **Which practice is essential when adopting AI tools in development workflows?**  
   a) Relying fully on AI without any human checks  
   b) Combining AI assistance with human review and iteration  
   c) Using AI only for non-technical tasks  
   d) Avoiding AI due to security risks

**Assessments:**

* Weekly quizzes and practical coding exercises

* Peer-reviewed assignments

* Capstone Project with evaluation rubric

**Tools & Platforms Required:**

* GitHub Copilot

* ChatGPT

* Tabnine

* VS Code / JetBrains IDE

* Programming Languages: Python, JavaScript (Node.js)

* OpenAI API access

**LMS Integration Recommendations:**

* Format quizzes using LMS quiz tools (Moodle, Canvas, etc.)

* Upload hands-on activity instructions as downloadable PDF/Markdown files

* Embed video tutorials or screencasts

* Use discussion boards for peer reviews and idea exchange

* Enable assignment upload and grading modules

**Completion Criteria:**

* Minimum 70% score across all quizzes

* Submission of all weekly assignments

* Peer-reviewed final project with instructor approval

