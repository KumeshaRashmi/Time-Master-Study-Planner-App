# ⏱️ Time Master – Study Planner & Pomodoro App

Time Master is a full-stack study planner and Pomodoro application built using the **MERN stack**. It helps students manage study tasks, track Pomodoro sessions, monitor progress, and manage study preferences.

The app is containerized with **Docker**, built and deployed automatically through a **Jenkins CI/CD pipeline**, with infrastructure provisioned using **Terraform** on **AWS EC2**.

---

## ✨ Features

- User registration and login
- Task management (create, update, delete, complete)
- Pomodoro timer with study/break cycles
- Break and session-completion notifications
- Study session and progress tracking
- User profile and preferences
- Responsive UI (desktop, tablet, mobile)

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS, Axios

**Backend:** Node.js, Express.js, REST API

**Database:** MongoDB

**DevOps & Cloud:** Docker, Jenkins, Docker Hub, Terraform, AWS EC2, GitHub

---

## 🏗️ Architecture

```text
User
  │
  ▼
React.js Frontend
  │
  │ REST API (Axios)
  ▼
Node.js + Express Backend
  │
  ▼
MongoDB
```

---

## 📂 Project Structure

```text
Time-Master-Study-Planner-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── package.json
│   └── Dockerfile
│
├── terraform-aws/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/KumeshaRashmi/Time-Master-Study-Planner-App.git
cd Time-Master-Study-Planner-App
```

### 2. Configure the backend

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

### 3. Run with Docker

```bash
docker-compose up --build
```

Stop the application:

```bash
docker-compose down
```

---

## 🐳 Docker

Separate Docker images are built for the frontend, backend, and MongoDB.

```bash
docker build -t time-master-frontend ./frontend
docker build -t time-master-backend ./backend
```

---

## 🔄 CI/CD Pipeline

Jenkins automates the build, test, and deployment process end-to-end.

```text
Developer → GitHub → Jenkins
                        │
                        ├── Checkout Code
                        ├── Build Frontend & Backend Images
                        ├── Pull MongoDB Image
                        ├── Login to Docker Hub
                        ├── Push Docker Images
                        ├── Terraform Init
                        ├── Terraform Plan
                        ├── Terraform Apply
                        ▼
                     AWS EC2
                        │
                        ▼
                 Docker Containers
                 (Frontend, Backend, MongoDB)
```

### Pipeline Stages

1. **Checkout** – Pull the latest code from GitHub.
2. **Build Images** – Build frontend and backend Docker images; pull the MongoDB image (runs in parallel).
3. **Docker Hub Login** – Authenticate using Jenkins credentials.
4. **Push Images** – Push all images to Docker Hub (runs in parallel).
5. **Terraform Init/Plan/Apply** – Provision or update AWS infrastructure.
6. **Cleanup** – Remove unused Docker resources and log out of Docker Hub.

---

## ☁️ Infrastructure (Terraform)

```bash
cd terraform-aws
terraform init
terraform plan
terraform apply
```

To tear down infrastructure:

```bash
terraform destroy
```

## 🔒 Security

- Store all secrets using Jenkins Credentials.
- Never commit `.env` files, AWS keys, or Docker Hub passwords.
- Use environment variables for sensitive configuration.
- Restrict AWS Security Group ports to only what's needed (22, 80, 443).

---

## 🎯 Learning Outcomes

This project provided practical experience with:

- MERN stack development & REST APIs
- Docker containerization
- Jenkins CI/CD pipelines
- Docker Hub image management
- Terraform (Infrastructure as Code)
- AWS EC2 deployment
- Git and GitHub

---

