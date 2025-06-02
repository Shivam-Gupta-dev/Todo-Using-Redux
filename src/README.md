# Redux Toolkit Todo App

A simple React Todo application that uses **Redux Toolkit** for state management. It supports adding, updating, and deleting todos with a dynamic UI.

## 🚀 Features

- Add new todos
- Edit existing todos
- Delete todos
- Dynamic button label and placeholder based on action (add/update)
- Built with modern React (hooks) and Redux Toolkit

## 🛠️ Tech Stack

- React
- Redux Toolkit
- JavaScript (ES6+)
- TailwindCSS (for styling)

## 📁 Project Structure
├── components/
│ ├── AddTodo.jsx # Form to add or update a todo
│ └── Todos.jsx # Lists all todos with edit/delete options
├── features/
│ └── todo/
│ └── todoSlice.js # Redux slice managing todo state
├── app/
│ └── store.js # Redux store configuration
├── App.jsx # Main app component
├── main.jsx # React entry point with Redux provider