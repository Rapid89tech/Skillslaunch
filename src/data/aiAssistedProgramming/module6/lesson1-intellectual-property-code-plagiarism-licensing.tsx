import React from 'react';
import { VideoLesson } from '@/types/course';

const lesson1: VideoLesson = {
  id: 1,
  title: 'Intellectual property, code plagiarism, and licensing',
  duration: '45 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/watch?v=Hoow9-rmmuM',
    textContent: `# Intellectual Property, Code Plagiarism, and Licensing

## **1. Intellectual Property**

**Intellectual Property** refers to creations of the mind, including inventions, literary and artistic works, designs, symbols, names, and images used in commerce. In software development, IP covers source code, algorithms, designs, documentation, and other creative outputs.

### **Key Aspects:**

* **Copyright:** Automatically protects original works like code, documentation, and graphics. It gives the author exclusive rights to reproduce, distribute, display, or perform the work.

* **Patents:** Protect novel inventions or processes. Software patents are controversial but can protect specific algorithms or technical innovations.

* **Trademarks:** Protect branding elements like names, logos, and slogans.

* **Trade Secrets:** Protect confidential business information (like proprietary algorithms or techniques) as long as secrecy is maintained.

### **Importance of IP in Software:**

* Encourages innovation by protecting creators' rights.
* Defines ownership of code, which affects usage and distribution.
* Critical in commercial projects and open source.

---

## **2. Code Plagiarism**

**Code Plagiarism** is the unethical or illegal practice of copying someone else's code without permission or proper attribution, presenting it as one's own.

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

## **3. Software Licensing**

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

### **Key Licensing Concepts:**

* **Copyleft:** Requires derivative works to adopt the same license (e.g., GPL).
* **Permissive Licenses:** Allow more freedom with fewer restrictions (e.g., MIT, BSD).
* **Dual Licensing:** Offering software under both open source and proprietary licenses.
* **License Compatibility:** Determines if code under one license can be combined with code under another.

---

## **4. Best Practices for Developers**

* Always check the license of any third-party code or library before use.
* Include license headers in your source files.
* When sharing code publicly, choose a license that aligns with your goals.
* Respect license terms to avoid legal issues.
* Attribute sources when using others' code or ideas.
* Use license management tools in larger projects for compliance.

---

## **Summary**

Understanding **Intellectual Property, Code Plagiarism, and Licensing** is essential for ethical and legal software development. It protects creators' rights, promotes fair use and sharing, and avoids legal complications. Adhering to licensing terms and avoiding plagiarism builds trust and sustains the software ecosystem.`
  }
};

export default lesson1;
