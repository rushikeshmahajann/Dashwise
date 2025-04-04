
# 🚀 Dashwise – Enterprise Dashboard Assignment for Datawise
Dashwise is a feature-rich, responsive enterprise dashboard built using React.js. Developed as part of a front-end assignment for [Datawise](https://trydatawise.com), it demonstrates key concepts like responsive UI design, component-based architecture, state management, and interactive user experiences.
---
## 📋 Table of Contents
- [📖 Overview](#-overview)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [📦 Installation](#-installation)
- [🚀 Usage](#-usage)
- [📌 Notes](#-notes)
- [📄 License](#-license)
---
## 📖 Overview
### Demo: 🔗[Dashwise](https://dashwise-psi.vercel.app/)
Dashwise mimics a project management and analytics tool with multiple integrated widgets and views to simulate enterprise-level UI design. While this version focuses on the front-end, it contains fully functional components that interact with APIs and leverage third-party libraries for drag-and-drop, calendar scheduling, and more.
The dashboard is fully responsive and performs seamlessly on desktops, tablets, and mobile devices.
---
## ✨ Features
### 📊 Analytics Dashboard
- **Tasks Manager Widget** – Manage and view current tasks.
- **Upcoming Meetings Widget** – Displays upcoming scheduled meetings.
- **Project Status Pie Chart** – Visual overview of projects categorized into:
  - ✅ Completed
  - ⏳ Ongoing
  - ⌛ Pending
- **Expense vs Income Chart** – Bar chart comparing income and expense stats.
- **Live API Integration** – Dynamic data fetched for charts.
### 📌 Kanban Board
- Fully **drag-and-drop** enabled using `@dnd-kit`.
- Drag entire columns or individual tasks between sections.
### 📅 Calendar View
- Integrated calendar using `@schedule-x`.
- **Draggable Events** – Reschedule by dragging events to another day.
- Clean and intuitive UI to manage and visualize time-based tasks.
### 🧠 Flow Designer
- Create and visualize **node graphs** to simulate workflows or pipelines.
- Demonstrates canvas-based interaction and graph structures.
### 🔍 Command Menu (CMD + K)
- Integrated using `cmdk` library.
- Allows quick navigation and search (UI ready but not functional due to time constraints).
### 🔐 Authentication
- User authentication powered by **Clerk**.
- Features: Sign-up, Login, Logout, and route protection.
---
## 🛠 Tech Stack
| Category            | Tech / Library                  |
|---------------------|----------------------------------|
| Frontend Framework  | React.js                        |
| Routing             | React Router                    |
| Styling             | Tailwind CSS                    |
| Auth                | Clerk.dev                       |
| Drag & Drop         | dnd-kit, swapy                  |
| Charts              | Chart.js                        |
| Search Menu         | cmdk                            |
| Calendar            | schedule-x                      |
| State Management    | React Hooks, Context API        |
| API Requests        | Fetch                           |
| Deployment          | Vercel                          |
---
## 📁 Project Structure
```bash
dashwise/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```
---
## 📦 Installation
⚠️ You'll need **Node.js >= 14.x** and **npm** installed.
1. **Clone the repository**

```bash
git clone https://github.com/rushikeshmahajann/Dashwise
cd dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Clerk Auth (Optional)**
You'll need a Clerk project and publishable key.
Create a `.env` file in the root and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. **Run the app**

```bash
npm run dev
```
---
## 🚀 Usage
Once the app starts, you can:
* ✅ Sign up if you are new user/Login if you already have account with Clerk.
* 📊 Land on the **Dashboard** with analytics widgets and charts.
* 🗂 Navigate between **Kanban**, **Calendar**, and **Flow Designer** using the sidebar.
* 🔄 Drag and drop tasks or calendar events to update their state/date.
* ⌨️ Press **CMD + K** to open the search menu (UI demo only).
---
## 📌 Notes
* This project was built within **1 week** as part of the **Front-End Developer Assignment for Datawise**.
* Backend functionalities are mocked or placeholders due to front-end focus.
* Some advanced features like CMDK search are UI-only due to time constraints.
* The entire dashboard is **fully mobile-optimized**, using **Flexbox**, **CSS Grid**, and **Tailwind**.
---
## 📄 License
This project is licensed for demonstration purposes as part of a job assignment. All content is © Rushikesh Mahajan.

Made with ❤️ for **Datawise**