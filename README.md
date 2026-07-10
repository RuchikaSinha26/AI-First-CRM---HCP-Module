# AI-First-CRM---HCP-Module
An AI-powered CRM application designed for pharmaceutical sales representatives to manage Healthcare Professional (HCP) interactions using Generative AI, LangGraph, FastAPI, React, Redux, and MySQL.
# AI First CRM - HCP Interaction Module

## Project Overview

This project is an AI-based CRM application developed for managing Healthcare Professional (HCP) interactions. It allows users to enter interaction details in natural language, and the system automatically extracts the required information and fills the CRM form.

The application is built using React for the frontend, FastAPI for the backend, LangGraph for workflow management, and MySQL for storing interaction records.

---

## Features

### AI Interaction

Users can describe an HCP meeting in normal English.

Example:

Today I met Dr. John at Apollo Hospital. We discussed CardioX and planned a follow-up next Monday.

The application extracts:

- HCP Name
- Hospital
- Interaction Date
- Interaction Type
- Products Discussed
- Meeting Summary
- Follow-up

The extracted data is automatically displayed in the interaction form.

---

### Edit Existing Interaction

Users can modify previously extracted information using natural language.

Example:

Actually the hospital was Fortis Hospital.

Only the required field is updated without changing the remaining information.

---

### Search Previous Interactions

Users can search interaction history.

Example:

Show history of Dr. John

The application retrieves the stored interaction from the database and displays it in the form.

---

### Save Interaction

Users can save interaction details into the MySQL database after verification.

---

### Dashboard

The dashboard displays:

- Total HCPs
- Total Interactions
- Follow-up Count
- Products Discussed

---

## Technology Stack

### Frontend

- React
- Redux Toolkit
- Material UI
- JavaScript

### Backend

- FastAPI
- Python
- LangGraph
- Pydantic

### Database

- MySQL

---

## Project Structure

```
AI-First-CRM-HCP-Module

backend/
│
├── agents/
├── database/
├── routes/
├── tools/
├── graph.py
└── main.py

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── redux/
```

---

## Backend Setup

Move to backend folder

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate virtual environment

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend server

```bash
uvicorn main:app --reload --port 8001
```

Backend runs at

```
http://127.0.0.1:8001
```

---

## Frontend Setup

Move to frontend folder

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run application

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

## Database

Create database

```sql
CREATE DATABASE ai_first_crm;
```

Create table

```sql
CREATE TABLE interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hcp_name VARCHAR(100),
    hospital VARCHAR(100),
    interaction_date VARCHAR(50),
    interaction_type VARCHAR(50),
    products_discussed VARCHAR(100),
    meeting_summary TEXT,
    follow_up VARCHAR(100)
);
```

---

## Workflow

```
User Input

↓

React Frontend

↓

FastAPI Backend

↓

LangGraph

↓

Extract / Edit / Search

↓

MySQL Database

↓

Updated CRM Form
```

---

## Future Improvements

- User Authentication
- Role-based Access
- Cloud Deployment
- Analytics Dashboard
- Email Follow-up

---

## Author

Developed as part of the AI First CRM HCP Module assignment.
