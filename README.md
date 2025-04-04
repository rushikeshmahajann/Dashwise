# 🚀 Dashwise – Enterprise Dashboard Assignment for Datawise

Dashwise is a feature-rich, responsive enterprise dashboard built using React.js. Developed as part of a front-end assignment for [Datawise](https://datawise.com), it demonstrates key concepts like responsive UI design, component-based architecture, state management, and interactive user experiences.

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
| Deployment Ready    | Mobile-Responsive & Optimized   |

---

## 📁 Project Structure

```bash
dashboard/
├── components/
├── icons/
├── lib/
├── pages/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│   └── App.css
│   └── index.css
├── .gitignore
├── package.json
└── README.md

