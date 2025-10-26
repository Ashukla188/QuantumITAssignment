# 🚀 Quantum Assignment — Full Stack (React + Node + MongoDB)

A complete full-stack **Login & Registration system** built using **React.js**, **Node.js**, and **MongoDB**, following the given assignment specifications. After successful authentication, users can access a **protected dashboard** displaying user information in a well-designed table layout.

---

## 🌐 Live Demo  
🔗 **Live Link:** [Click Here](YOUR_LIVE_LINK_HERE)

---

## 📋 Features
✅ User Registration with validation  
✅ Secure Login using JWT Authentication  
✅ Password hashing with bcrypt  
✅ MongoDB integration for user storage  
✅ Protected routes (dashboard access only after login)  
✅ LocalStorage-based session handling  
✅ Fully responsive and modern UI using Tailwind CSS  
✅ Clean project structure (frontend + backend separation)  
✅ Hosted live using **Render** (both backend and frontend)

---

## 🏗️ Project Structure
Quantum_Assignment/
├── backend/        # Node.js + Express + MongoDB + JWT
│   ├── config/     
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── frontend/       # React (Vite) + Tailwind CSS
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── api.js
    └── tailwind.config.js

---

## 🧰 Tech Stack
| Layer | Technologies |
|-------|---------------|
| **Frontend** | React (Vite), Tailwind CSS, React Router DOM, Axios |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, dotenv, cors |
| **Database** | MongoDB Atlas |
| **Deployment** | Render (Frontend + Backend) |

---

## ⚙️ Environment Variables

### Backend (/backend/.env)
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/quantumDB  
JWT_SECRET=supersecretkey123  
PORT=10000  
CORS_ORIGIN=https://quantum-frontend.onrender.com  

### Frontend (/frontend/.env)
VITE_API_BASE_URL=https://quantum-backend.onrender.com/api

---

## 💻 Installation & Setup (Local)

### 1️⃣ Clone the repository
git clone https://github.com/<your-username>/Quantum_Assignment.git  
cd Quantum_Assignment

### 2️⃣ Backend Setup
cd backend  
npm install  
npm run dev  
➡ Server runs on http://localhost:5000

### 3️⃣ Frontend Setup
cd ../frontend  
npm install  
npm run dev  
➡ App runs on http://localhost:5173

---

## 🚀 Deployment (Render)
- **Backend (Web Service)** → https://quantum-backend.onrender.com  
- **Frontend (Static Site)** → https://quantum-frontend.onrender.com  
- **Database** → MongoDB Atlas (Cloud)

---

## 🖥️ Application Flow
1️⃣ User registers → details saved to MongoDB  
2️⃣ Backend returns a JWT token and user info  
3️⃣ Data is stored in localStorage  
4️⃣ Authenticated user can access /dashboard  
5️⃣ Dashboard displays:  
   - Name  
   - Date of Birth  
   - Email  
   - Password (for demo)

---

## 🪄 UI Highlights
- Gradient backgrounds  
- Soft shadows & hover transitions  
- Rounded card-style forms  
- Fully responsive design  
- Consistent color palette (blue-indigo theme)

---

## 🧠 Folder Breakdown (Backend)
| Folder | Description |
|---------|-------------|
| config/ | MongoDB connection setup |
| controllers/ | Business logic (register, login) |
| models/ | Mongoose schema definitions |
| routes/ | Express route definitions |
| server.js | App entry point |

---

## 🔐 Security Notes
- Passwords are hashed using bcrypt before saving.  
- JWT tokens are used for authentication.  
- Sensitive data (like DB URI & JWT Secret) is stored in .env.  
- Passwords are only returned in API responses for **demo purposes** (as per assignment instructions).

---

## 📸 Screenshots (Add later)
You can include screenshots of your UI here.

| Page | Screenshot |
|------|-------------|
| Login | ![Login](assets/login.png) |
| Register | ![Register](assets/register.png) |
| Dashboard | ![Dashboard](assets/dashboard.png) |

---

## 👨‍💻 Developer
**Ayush Shukla**  
🔗 GitHub: https://github.com/<your-username>  
📧 ayush@example.com  

---

## 🏁 Summary
✔️ Completed as per assignment document  
✔️ Frontend & backend hosted on Render  
✔️ JWT-based authentication with protected dashboard  
✔️ Fully responsive & interactive UI built using Tailwind only
