# AI-First-CRM---HCP-Module
An AI-powered CRM application designed for pharmaceutical sales representatives to manage Healthcare Professional (HCP) interactions using Generative AI, LangGraph, FastAPI, React, Redux, and MySQL.
## 🚀 Features

### 🤖 AI Interaction Assistant
- Understands natural language input
- Automatically extracts HCP interaction details
- Uses LLM-based information extraction

Example:

Input:

Today I met Dr. John at Apollo Hospital. We discussed CardioX. Follow up next Monday.


AI extracts:

- HCP Name
- Hospital
- Interaction Date
- Interaction Type
- Products Discussed
- Meeting Summary
- Follow Up


---

### ✏️ AI Edit Interaction

Users can update existing information using natural language.

Example:


Actually hospital was Fortis Hospital.


AI automatically updates only the required field.

---

### 🔍 Interaction History Search

Search previous HCP interactions:

Example:


Show history of Dr. John


System:

- Finds previous interaction from MySQL
- Automatically fills CRM form


---

### 💾 Database Management

Stores interaction records in MySQL.

Stored information:

- Doctor Name
- Hospital
- Date
- Interaction Type
- Products
- Summary
- Follow Up


---

### 📊 Dashboard

Displays:

- Total Doctors
- Total Interactions
- Follow Ups
- Products Discussed


---

## 🏗️ Tech Stack

### Frontend

- React.js
- Redux Toolkit
- Material UI
- JavaScript


### Backend

- FastAPI
- LangGraph
- Python
- Pydantic


### Database

- MySQL


### AI

- Generative AI
- LLM based extraction
- LangGraph workflow


---

# 📂 Project Structure


ai-first-crm-hcp

│
├── backend
│
│── agents
│ ├── graph.py
│ ├── nodes.py
│ └── edit_node.py
│
│── database
│ ├── db.py
│ ├── save_interaction.py
│ └── search_interaction.py
│
│── routes
│ ├── chat.py
│ ├── save.py
│ └── dashboard.py
│
│── tools
│ └── hcp.py
│
│── main.py
│
│
└── frontend
├── src
├── components
├── pages
└── redux


---

# ⚙️ Installation

## Backend Setup

Go to backend:


cd backend


Create virtual environment:


python -m venv venv


Activate:

Windows:


venv\Scripts\activate



Install dependencies:


pip install -r requirements.txt



Run server:


uvicorn main:app --reload --port 8001



Backend:


http://127.0.0.1:8001



---

# Frontend Setup


Go to frontend:


cd frontend



Install packages:


npm install



Run:


npm run dev



Frontend:


http://localhost:5173



---

# 🗄️ Database Setup

Create database:

```sql
CREATE DATABASE ai_first_crm;

Create table:

CREATE TABLE interactions(
id INT AUTO_INCREMENT PRIMARY KEY,
hcp_name VARCHAR(100),
hospital VARCHAR(100),
interaction_date VARCHAR(50),
interaction_type VARCHAR(50),
products_discussed VARCHAR(100),
meeting_summary TEXT,
follow_up VARCHAR(100)
);
🔄 Workflow
User Input

      ↓

React Chat Interface

      ↓

FastAPI Backend

      ↓

LangGraph Router

      ↓

 ┌───────────────┐
 │ Extract Node  │
 │ Edit Node     │
 │ Search Node   │
 └───────────────┘

      ↓

MySQL Database

      ↓

Auto Updated CRM Form
📸 Screenshots

Add screenshots:

Dashboard
AI Chat
Auto Fill Form
Database Output
👨‍💻 Author

AI First CRM Project

Built using:
React + FastAPI + LangGraph + MySQL + Generative AI

⭐ Future Improvements
Authentication
Role Based Access
Deployment
Advanced Analytics
Email Follow-up Automation

---

# 2) backend/requirements.txt

Create:


backend/requirements.txt


Paste:

```txt
fastapi
uvicorn
langgraph
langchain
langchain-openai
pydantic
mysql-connector-python
python-dotenv
3) .gitignore

Root folder me:

.gitignore

Paste:

# Python
__pycache__/
*.pyc
venv/

# Environment
.env

# Node
node_modules/
dist/

# IDE
.vscode/

# Logs
*.log
GitHub Upload Commands

Root folder me terminal:

git init
git add .
git commit -m "AI First CRM HCP Module completed"

GitHub repo banane ke baad:

git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
