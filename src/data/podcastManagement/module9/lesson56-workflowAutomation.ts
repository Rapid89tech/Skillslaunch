
import { Lesson } from '@/types/course';

export const lesson56WorkflowAutomation: Lesson = {
  id: 56,
  title: 'Workflow Automation',
  duration: '40 minutes',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/0R0G6N_vHp4',
    textContent: `
# Workflow Automation

## Learning Objectives:
- Understand the power of workflow automation for podcasting
- Identify tasks that can be automated
- Master automation tools and best practices
- Create efficient automated workflows

## 🤖 What is Workflow Automation?

Workflow automation is the use of tools and systems to complete repetitive tasks with minimal manual input.

### 🔹 Why It Matters
- **Saves time and reduces human error**
- **Ensures consistency** across episodes or projects
- **Frees up creative energy** for content rather than admin
- **Helps teams collaborate** more efficiently

**"Automation allows you to scale without burning out."**

## 🧩 Types of Tasks to Automate in Podcasting

### ✅ Pre-Production
- Episode planning templates
- Guest outreach and confirmation emails
- Scheduling recordings

### ✅ Production
- Setting task reminders (editing, intro/outro insertion)
- File naming and folder organization
- Standard editing checklists

### ✅ Post-Production
- Publishing workflows (upload + show notes entry)
- Social media promo scheduling
- Email newsletter distribution

## 🛠 Recommended Tools for Automation

| Tool | Purpose | Best For |
|------|---------|----------|
| **Zapier** | Connects apps (e.g., Google Drive → Asana) | Non-coders |
| **Asana** | Workflow automation + task management | Teams |
| **Trello** | Automate cards/lists with Butler | Visual planners |
| **Notion** | Templates and linked databases | Flexible creators |
| **Buffer / Hootsuite** | Schedule social posts | Marketing |
| **Calendly + Zoom** | Auto-schedule guest recordings | Interview-based shows |

## 🔄 Examples of Automated Workflows

### 🎙 Podcast Episode Release Workflow

**Trigger:** New episode file added to Google Drive

**Zapier Workflow:**
1. Copy file link → Asana task → Assign to editor
2. Post-edit: Automatically move task to "Publish" column
3. Trigger Buffer → Schedule social post with title + link
4. Update Notion database with episode metadata

### 🧠 Template-Based Planning (in Notion or Asana)

Episode template includes:
- Script section
- Guest info
- Task checklist (edit, upload, promote)
- Deadline tracker

## 🧠 Best Practices for Workflow Automation

- **Start simple:** Automate one task at a time
- **Use templates** wherever possible
- **Keep human checkpoints** in creative steps
- **Review automation monthly** to improve or fix bugs
- **Always test automations** before going live

## ⚠️ Common Pitfalls

- **Over-automation:** Not all tasks should be automated (e.g., custom guest emails)
- **Ignoring context:** Automated posts that don't match platform tone
- **Poor naming or file structure:** Leads to confusion
- **Lack of documentation:** Team can't understand or update the system

## 🚀 Key Takeaways

- Automation is about **efficiency + consistency**, not removing creativity
- Choose tools that **integrate well** with your workflow
- Focus on **high-impact, repeatable tasks** first
- Regularly **refine and adapt** your automation based on feedback and team needs

### 💡 Suggested Activity
Map out your own podcast workflow, then identify 3 tasks you could automate using a tool of your choice (e.g., Trello, Notion, Asana, or Zapier).
    `
  }
};
