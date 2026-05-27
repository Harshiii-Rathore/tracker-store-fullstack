# Tracker Store Fullstack

A full stack productivity tracker application built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, and Mongoose.

## Features

- Responsive frontend UI
- Task creation and management
- MongoDB database integration
- REST API endpoints
- CRUD operations
- Dynamic task rendering

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Project Structure

```bash
tracker-store-fullstack/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md

Installation
Clone Repository
git clone <repository-link>

Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string

Start backend server:
node server.js

Frontend Setup

Open frontend/index.html using Live Server.

API Endpoints
Get Tasks

GET /tasks

Create Task

POST /tasks

Delete Task

DELETE /tasks/:id

Author

Harshita Rathore
