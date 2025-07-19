# Expense Tracker - MERN Stack Application

A full-stack financial management application with authentication, transaction tracking, and data visualization.

## Features
- User authentication (Register/Login)
- Income/Expense tracking
- Dashboard with financial analytics
- Data visualization using Recharts
- Responsive UI with Tailwind CSS

## Technologies
- MongoDB
- Express.js
- React
- Node.js
- JWT Authentication
- Tailwind CSS
- Recharts

## Installation

### Prerequisites
- Node.js v18+ 
- MongoDB (Local or Atlas URI)
- Git

### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file with:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```
4. Start server:
```bash
npm start
```

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd frontend/expense-tracker
```
2. Install dependencies:
```bash
npm install
```
3. Start development server:
```bash
npm run dev
```

## Environment Variables
Backend requires:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token generation
- `PORT`: Server port (default: 5000)

## API Reference
Available endpoints in backend/routes:
- Auth: `/api/auth/*`
- Transactions: `/api/expense/*` & `/api/income/*`
- Dashboard: `/api/dashboard/*`

