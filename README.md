# ⏱️ Time Master – Study Planner & Pomodoro App

**Time Master** is a full-stack web application designed to help students organize, manage, and track their study sessions using the **Pomodoro Technique**.

The application provides secure user authentication, task management, Pomodoro study sessions, progress tracking, break notifications, and personalized user settings. The system is developed using the **MERN stack** and containerized with **Docker**, with infrastructure provisioned using **Terraform** and deployment automation handled using **Ansible** on an **AWS EC2 instance**.

---

## 📌 Project Overview

Time Master helps users improve their productivity by combining task management with structured Pomodoro study sessions.

Users can:

* Register and securely log in
* Create, update, and delete study tasks
* Start and manage Pomodoro sessions
* Track completed study sessions
* Receive break and session completion notifications
* Monitor study progress
* Manage their profile and preferences
* Access the application through a responsive web interface

The application follows a full-stack architecture where the React frontend communicates with the Node.js/Express backend through REST APIs, while MongoDB provides persistent data storage.

---

## ✨ Features

### 🔐 User Authentication

* User registration
* Secure login
* Authentication and authorization
* Protected user functionality
* User profile management
* Session management

### 📝 Task Management

Users can:

* Create study tasks
* Update existing tasks
* Delete tasks
* Track task completion
* Organize study activities

### ⏱️ Pomodoro Timer

The application provides a built-in Pomodoro timer that supports:

* Study sessions
* Short breaks
* Session completion tracking
* Automatic transition between study and break periods
* Break reminders
* Session completion notifications

### 📊 Progress Tracking

Users can monitor their study activity through:

* Completed Pomodoro sessions
* Completed breaks
* Study progress
* Session history

### 👤 User Profile

Users can manage:

* Profile information
* Application preferences
* Study-related settings
* Personalized productivity experience

### 📱 Responsive UI

The frontend is designed to work across:

* Desktop
* Tablet
* Mobile devices

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Tailwind CSS
* JavaScript
* Axios
* React State Management
* Timer Libraries

## Backend

* Node.js
* Express.js
* REST APIs
* JavaScript

## Database

* MongoDB

## Authentication

* User Authentication
* Authorization
* Protected API Routes

## DevOps & Deployment

* Docker
* Terraform
* Ansible
* AWS EC2
* GitHub
* GitHub Actions

---

# 🏗️ System Architecture

```text
                         ┌──────────────────┐
                         │      User        │
                         │  Web Browser     │
                         └────────┬─────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │     Tailwind CSS        │
                    └────────────┬────────────┘
                                 │
                              Axios
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Node.js + Express    │
                    │       REST APIs         │
                    └───────────┬─────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
                    ▼                       ▼
          ┌──────────────────┐     ┌──────────────────┐
          │     MongoDB      │     │ Authentication   │
          │   User / Tasks   │     │ & Authorization  │
          │ Session Data     │     └──────────────────┘
          └──────────────────┘
```

---

# ☁️ Deployment Architecture

The application is containerized using Docker and deployed on an AWS EC2 instance.

Infrastructure provisioning is automated using Terraform, while Ansible is used for server configuration and deployment automation.

```text
                         GitHub Repository
                                │
                                ▼
                         Application Code
                                │
                                ▼
                         ┌─────────────┐
                         │   Docker    │
                         │ Containers  │
                         └──────┬──────┘
                                │
                                ▼
                    ┌──────────────────────┐
                    │      AWS EC2         │
                    │                      │
                    │  Time Master App     │
                    │                      │
                    │  Frontend Container  │
                    │  Backend Container   │
                    └──────────┬───────────┘
                               │
                               ▼
                         ┌─────────────┐
                         │   MongoDB   │
                         └─────────────┘

          Terraform → Infrastructure Provisioning
          Ansible   → Server Configuration & Deployment
          Docker    → Application Containerization
```

---

# 📂 Project Structure

A typical project structure is:

```text
Time-Master-Study-Planner-App/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── ...
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── ...
│
├── ansible/
│   ├── inventory/
│   ├── playbook.yml
│   └── ...
│
├── Dockerfile
├── docker-compose.yml
├── .gitignore
└── README.md
```

> The exact directory structure may vary depending on the implementation in the repository.

---

# 🚀 Getting Started

Follow these steps to run Time Master locally.

## 1. Prerequisites

Install the following software:

* Node.js
* npm
* Git
* MongoDB
* Docker
* Docker Compose

For cloud deployment:

* AWS account
* AWS EC2 instance
* Terraform
* Ansible
* SSH access to the EC2 instance

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Git:

```bash
git --version
```

Verify Docker:

```bash
docker --version
```

Verify Terraform:

```bash
terraform --version
```

Verify Ansible:

```bash
ansible --version
```

---

# 📥 2. Clone the Repository

Clone the GitHub repository:

```bash
git clone https://github.com/KumeshaRashmi/Time-Master-Study-Planner-App.git
```

Move into the project:

```bash
cd Time-Master-Study-Planner-App
```

---

# 📦 3. Install Backend Dependencies

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

# 📦 4. Install Frontend Dependencies

Open another terminal and navigate to the frontend:

```bash
cd Time-Master-Study-Planner-App/frontend
```

Install dependencies:

```bash
npm install
```

---

# 🔐 5. Configure Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
```

Replace the values with your own configuration.

### Example MongoDB Local Configuration

```env
MONGODB_URI=mongodb://localhost:27017/time-master
```

### MongoDB Atlas

If using MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/time-master
```

---

# ⚠️ Protect Environment Variables

Never commit sensitive information to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
.env.local
*.pem
```

Never expose:

* MongoDB passwords
* JWT secrets
* AWS credentials
* Private SSH keys

---

# ▶️ 6. Run the Backend

Navigate to the backend:

```bash
cd backend
```

Start the server:

```bash
npm start
```

Or, if a development script is configured:

```bash
npm run dev
```

The backend should run on:

```text
http://localhost:5000
```

---

# ▶️ 7. Run the Frontend

Open another terminal:

```bash
cd frontend
```

Start the React application:

```bash
npm start
```

The frontend will normally be available at:

```text
http://localhost:3000
```

Open the URL in your browser.

---

# 🔄 Application Workflow

The basic workflow is:

```text
User
 │
 ▼
React + Tailwind CSS
 │
 │ Axios
 ▼
Express REST API
 │
 ├───────────────┐
 ▼               ▼
MongoDB      Authentication
 │
 ▼
Tasks / Users / Sessions
```

For a Pomodoro session:

```text
User
 │
 ▼
Select Task
 │
 ▼
Start Pomodoro
 │
 ▼
Study Timer
 │
 ▼
Session Completed
 │
 ▼
Break Notification
 │
 ▼
Break Timer
 │
 ▼
Next Study Session
 │
 ▼
Progress Updated
```

---

# ⏱️ Pomodoro Session

The Pomodoro Technique divides study time into focused sessions followed by breaks.

Time Master provides a built-in timer allowing users to:

1. Select a study task.
2. Start a Pomodoro session.
3. Focus during the study period.
4. Receive a notification when the session finishes.
5. Take the recommended break.
6. Receive a notification when the break ends.
7. Start another study session.
8. Track the completed session.

The timer state is managed on the React frontend using React state and timer functionality.

---

# 📡 REST API Communication

The React frontend communicates with the Express backend using Axios.

Example request:

```javascript
axios.post("/api/tasks", {
    title: "Study Computer Networks",
    description: "Review lecture notes"
});
```

The backend processes the request and stores the relevant information in MongoDB.

```text
React
  │
  │ Axios
  ▼
Express REST API
  │
  ▼
MongoDB
```

---

# 🐳 Docker

The application can be containerized using Docker.

Build the Docker image:

```bash
docker build -t time-master .
```

Run the container:

```bash
docker run -p 3000:3000 time-master
```

If Docker Compose is configured:

```bash
docker-compose up --build
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop the containers:

```bash
docker-compose down
```

Check running containers:

```bash
docker ps
```

---

# ☁️ AWS EC2 Deployment

Time Master can be deployed to an **AWS EC2 instance** using Docker.

The general deployment process is:

```text
Local Development
       │
       ▼
    GitHub
       │
       ▼
AWS EC2 Instance
       │
       ▼
     Docker
       │
       ├───────────────┐
       ▼               ▼
 Frontend           Backend
       │               │
       └───────┬───────┘
               ▼
            MongoDB
```

---

# 🏗️ Infrastructure Provisioning with Terraform

Terraform is used to automate AWS infrastructure provisioning.

Initialize Terraform:

```bash
terraform init
```

Review the infrastructure plan:

```bash
terraform plan
```

Apply the configuration:

```bash
terraform apply
```

After confirming the deployment:

```text
yes
```

Terraform can be used to provision the required AWS infrastructure such as the EC2 instance and associated configuration defined by the project.

To remove the provisioned infrastructure:

```bash
terraform destroy
```

> The exact AWS resources depend on the Terraform configuration included in the repository.

---

# ⚙️ Server Configuration with Ansible

Ansible is used to automate server configuration and application deployment on the AWS EC2 instance.

A typical deployment flow is:

```text
Terraform
    │
    ▼
AWS EC2 Instance
    │
    ▼
Ansible
    │
    ├── Configure server
    ├── Install required packages
    ├── Configure Docker
    ├── Deploy application
    └── Start containers
```

Run an Ansible playbook using:

```bash
ansible-playbook -i inventory playbook.yml
```

The exact command depends on the inventory and playbook files configured in the project.

---

# 🔑 AWS EC2 SSH Configuration

To connect to an EC2 instance:

```bash
ssh -i your-key.pem ec2-user@YOUR_EC2_PUBLIC_IP
```

For Ubuntu-based EC2 instances:

```bash
ssh -i your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

Make sure the private key has appropriate permissions:

```bash
chmod 400 your-key.pem
```

---

# 🔥 AWS Security Group

The EC2 security group should allow only the ports required by the application.

Common ports include:

```text
22    → SSH
80    → HTTP
443   → HTTPS
3000  → Frontend (if directly exposed)
5000  → Backend (if directly exposed)
```

For production deployment, it is preferable to expose the application through standard HTTP/HTTPS ports rather than publicly exposing development ports.

---

# 🧪 Testing Checklist

### Authentication

* [ ] Register a new account
* [ ] Login
* [ ] Logout
* [ ] Protected routes
* [ ] Profile management

### Task Management

* [ ] Create task
* [ ] View tasks
* [ ] Update task
* [ ] Delete task
* [ ] Mark task as completed

### Pomodoro

* [ ] Start timer
* [ ] Pause timer
* [ ] Resume timer
* [ ] Complete study session
* [ ] Start break
* [ ] Receive break notification
* [ ] Track completed sessions

### Progress

* [ ] View completed sessions
* [ ] View break history
* [ ] Track study progress

### Deployment

* [ ] Docker build
* [ ] Docker container
* [ ] Terraform provisioning
* [ ] Ansible configuration
* [ ] AWS EC2 deployment

---

# 🐛 Troubleshooting

## MongoDB Connection Error

Check your `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
```

Make sure MongoDB is running and accessible.

---

## Backend Not Connecting to Frontend

Check:

* Backend server is running.
* Correct backend URL is configured.
* Axios configuration is correct.
* CORS configuration allows the frontend origin.
* Required environment variables are available.

---

## Docker Container Not Starting

Check running containers:

```bash
docker ps
```

View container logs:

```bash
docker logs <container_id>
```

Rebuild the image:

```bash
docker-compose up --build
```

---

## EC2 Deployment Issues

Check:

* EC2 instance is running.
* Security group allows required ports.
* SSH key is correct.
* Docker is installed.
* Ansible inventory contains the correct EC2 host.
* EC2 public IP is correct.

---

# 🔒 Security Considerations

The application should follow secure deployment practices:

* Store secrets in environment variables.
* Do not commit `.env` files.
* Do not commit AWS private keys.
* Use authentication for protected resources.
* Validate API requests.
* Restrict AWS Security Group access.
* Use HTTPS for production deployments.
* Keep Docker images and dependencies updated.

---

# 📈 Future Improvements

Potential future improvements include:

* 📊 Advanced study analytics
* 📈 Weekly/monthly productivity charts
* 🔔 Browser push notifications
* 📱 Progressive Web App (PWA)
* 🌙 Dark mode
* 📅 Calendar integration
* 🎯 Study goals
* 🏆 Gamification and achievements
* 🔄 Cloud synchronization
* 🔐 OAuth authentication
* 🐳 Production Docker Compose configuration
* 🔒 HTTPS with Nginx
* 🚀 CI/CD deployment pipeline
* 📉 Productivity reports

---

# 🎯 Learning Outcomes

This project provided practical experience in:

* Full-stack MERN development
* React.js application development
* Tailwind CSS
* REST API development
* Axios-based API communication
* MongoDB database integration
* User authentication
* State management
* Timer-based application logic
* Responsive web development
* Docker containerization
* AWS EC2 deployment
* Terraform infrastructure as code
* Ansible configuration management
* Cloud deployment automation
* Git and GitHub

---

# 👥 Contributors

### Kumesha Rashmi

GitHub:
https://github.com/KumeshaRashmi

### Oshani Ranathunga

GitHub:
https://github.com/OshaniKR

---

# 📄 License

This project was developed as an academic/personal software development project.

---

# ⭐ Project Summary

**Time Master** combines productivity management, task tracking, and the Pomodoro Technique into a single full-stack web application.

### Core Technologies

```text
Frontend       → React.js + Tailwind CSS
Backend        → Node.js + Express.js
Database       → MongoDB
Communication  → Axios + REST APIs
Authentication → Secure User Authentication
Timer          → React State + Timer Libraries
Container      → Docker
Infrastructure → Terraform
Automation     → Ansible
Cloud          → AWS EC2
```

The project demonstrates end-to-end software engineering skills, from **MERN application development and database management to containerization, infrastructure as code, configuration automation, and AWS cloud deployment**.

