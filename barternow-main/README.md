# BarterNow - Full Stack Platform

BarterNow is a comprehensive platform for brands and creators to forge authentic partnerships through AI-driven sponsorships and barter matching.

## 🚀 Architecture Overview

- **Frontend (`/frontend`)**: React (built with Vite), styled with TailwindCSS.
- **Backend (`/backend`)**: Node.js & Express API, serving JWT-based authentication.
- **Database**: MySQL (Managed externally).

## 🛠️ Local Development Guide

### 1. Backend Setup

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `/backend` folder. **Do not commit this file.**
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=barternow
   DB_PORT=3306
   JWT_SECRET=your_super_secret_jwt_key
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the server:
   ```bash
   npm start
   ```
   _(Server should run on `http://localhost:5000`)_

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `/frontend` folder.
   ```env
   VITE_API_URL=http://localhost:5000
   ```
   _(Note: Vite strictly uses `VITE_` instead of `NEXT_PUBLIC_` for environment variables)._
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🌍 Production Deployment

### Frontend (Vercel)

The frontend is pre-configured with a `vercel.json` routing fallback.

1. Connect this GitHub repository to Vercel.
2. Important: Set the Vercel **Root Directory** to `frontend`.
3. In Vercel Environment Variables, add:
   - `VITE_API_URL` = `https://api.barternow.com` _(or your Railway backend URL)._

### Backend & Database (Railway)

The backend is secured with `helmet`, `express-rate-limit`, and restricted `cors`.

1. Provision a MySQL Database on Railway and extract the connection variables.
2. Connect this GitHub repository to a new Railway Service.
3. Important: Set the Railway **Root Directory** to `backend` (Notice the lack of a preceding slash).
4. Add all Backend `.env` variables (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET) to the Railway service variables.
5. Set the `FRONTEND_URL` variable to your generated Vercel domain (e.g., `https://app.barternow.com`).

---

## 🔒 Security Posture

- **Secrets Isolated**: All passwords and API keys are strictly driven by environment variables. `.env` files are explicitly excluded via `.gitignore`.
- **CORS Restricted**: The API denies unknown cross-origin requests. It only whitelists the `FRONTEND_URL` defined in the environment.
- **DDoS Protection**: Rate-limiting is enabled on the backend to suppress brute-force login attempts.
- **Transport Security**: Vercel and Railway both enforce automatic SSL (HTTPS). `helmet` headers protect the Express backend against XSS and sniffing.
