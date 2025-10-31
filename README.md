# 💬 Real-Time Chat App (Expo + Node.js + MySQL)

A modern **real-time chat application** built with **React Native (Expo)**, **Redux Toolkit**, and a **Node.js + MySQL + Socket.IO** backend.  
Users can join instantly by entering a name and exchange messages that appear in real-time across all connected devices.


<img width="1500" height="1125" alt="iPhone 16 Pro" src="https://github.com/user-attachments/assets/4eb38700-7788-4805-9557-339e6704a50e" />

---

## 🚀 Features
- ⚡ Real-time communication using **Socket.IO**
- 💾 State persistence with **Redux Persist + AsyncStorage**
- 🧠 Integration of REST API and WebSockets
- 🎨 Clean mobile UI with **NativeWind (Tailwind CSS)**
- 🕓 Data storage in MySQL for users and messages

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | Expo React Native (TypeScript), Expo Router, Redux Toolkit, Redux Persist, Axios, NativeWind, Toast Message |
| **Backend** | Node.js, Express, Socket.IO, MySQL, CORS, dotenv |

---

## 📦 Setup Guide

### 1. Clone Repository
```bash
git clone https://github.com/it-21360978/Comchat-Mobile-App.git
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Create `.env`
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=chatdb
```

### 4. Create Database
Use the provided SQL schema to create `chatdb` in MySQL.

### 5. Run Backend Server
```bash
npm start
```

### 6. Frontend Setup
```bash
cd ../comchat-app
npm install
```

### 7. Configure API
```ts
const BACKEND_HOST = "http://YOUR_LOCAL_IP:5000";
```

### 8. Run Expo App
```bash
npx expo start
```

---

## 🎥 Demo
Demo Video - [Add Link Here](https://drive.google.com/file/d/1lkuLgbMjpU1Z2Pg6mCZ9GntJ2--klL3T/view?usp=sharing)

---

## ⚠️ Notes & Trade-offs
- Authentication is simplified to name-only (no passwords)
- Basic offline detection using `@react-native-community/netinfo`
- MySQL stores users and messages; Socket.IO handles live sync

---

## 👨‍💻 Author
Gihan Serasinghe  
- Portfolio: [https://gihandev.vercel.app/](https://gihandev.vercel.app/)  
- GitHub: [https://github.com/it-21360978](https://github.com/it-21360978)

---

If you like this project, please give it a ⭐!

