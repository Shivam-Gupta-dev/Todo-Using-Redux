# React + Vite + Redux Toolkit Todo App

This project is a **simple Todo application** built with **React**, **Redux Toolkit**, and **Vite**. It demonstrates how to manage global state using Redux Toolkit and interact with that state through a clean and responsive UI. It also features HMR (Hot Module Replacement) and basic ESLint configuration for better development experience.

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) (for utility-first styling)
- [ESLint](https://eslint.org/) (basic linting setup)

---

## 🚀 Features

- ✅ Add todos
- 🔁 Edit/update existing todos
- ❌ Delete todos
- 🔃 Dynamic input placeholder and button text based on app state
- 🧠 Uses Redux Toolkit with slices and actions
- ⚡ Fast Refresh with Vite for a snappy development experience

---

## 📁 Project Structure
.
├── app/
│ └── store.js # Redux store setup
├── components/
│ ├── AddTodo.jsx # Input form for adding/updating todos
│ └── Todos.jsx # List view of todos with edit/delete
├── features/
│ └── todo/
│ └── todoSlice.js # Redux slice managing todo logic
├── App.jsx # Main app component
├── main.jsx # Entry point; wraps App in Redux Provider
├── index.css # Global styles (includes Tailwind)
├── App.css # Local styles (optional)
└── README.md # Project documentation
