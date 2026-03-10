# Align Care

A complete React Native mobile application with Node.js backend for sustainable aligner care management.

## Project Structure

```
├── aligncare/          # Frontend (React Native/Expo)
│   ├── app/            # App screens and navigation
│   ├── screens/        # Screen components
│   ├── config/         # API configuration
│   ├── constants/      # App constants
│   └── assets/         # Images and static files
│
├── server/             # Backend (Node.js/Express)
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── config/         # Database configuration
│   └── .env            # Environment variables
│
└── README.md           # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- MongoDB Atlas account

### Backend Setup

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to aligncare directory:
   ```bash
   cd aligncare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update API URL in `config/api.js` if needed:
   ```javascript
   export const API_URL = 'http://localhost:5000/api';
   ```

4. Start the Expo development server:
   ```bash
   npx expo start
   ```

## Features

- **Authentication System**: Complete signup/login with role-based access
- **Role Management**: Support for Admin, Clinic, Aligner, Delivery, and Recycler roles
- **Secure Backend**: bcrypt password hashing and MongoDB integration
- **Mobile-First Design**: Clean, eco-friendly UI with React Native
- **API Integration**: RESTful API with comprehensive error handling

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication

## Technologies Used

### Frontend
- React Native
- Expo
- Expo Router
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- CORS for cross-origin requests

## Development

The project is structured with separate frontend and backend folders for better organization and deployment flexibility.