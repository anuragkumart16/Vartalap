# ChatApp

## Overview
ChatApp is a modern web application designed for seamless communication. It features a frontend built with React and Vite, and a backend powered by Node.js and Express. The application supports real-time chat functionality, user authentication, and more.

## Features
- **User Authentication**: Secure login and signup functionality.
- **Real-Time Chat**: Engage in real-time conversations.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Audio and Video Calls**: Integrated support for audio and video communication.
- **Password Management**: Features like password reset and change.

## Project Structure

### Frontend
The frontend is located in the `Frontend/` directory and is built using React and Vite.

#### Key Directories:
- `components/`: Contains reusable UI components categorized into atoms, molecules, and organisms.
- `context/`: Manages global state using React Context API.
- `pages/`: Contains page-level components like `Chat`, `Login`, `Signup`, etc.
- `utils/`: Utility functions for API calls and validations.

#### Important Files:
- `App.jsx`: The main application component.
- `vite.config.js`: Configuration file for Vite.

### Backend
The backend is located in the `Backend/` directory and is built using Node.js and Express.

#### Key Directories:
- `controllers/`: Contains logic for handling API requests.
- `models/`: Defines database schemas.
- `routes/`: Contains route definitions for the application.
- `utils/`: Utility functions for error handling, responses, etc.

#### Important Files:
- `app.js`: The main entry point for the backend application.
- `db/index.js`: Database connection setup.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Chatapp
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd Frontend && npm install
   cd ../Backend && npm install
   ```

## Running the Application

### Frontend
To start the frontend development server:
```bash
cd Frontend
npm run dev
```

### Backend
To start the backend server:
```bash
cd Backend
npm start
```

## Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries or support, please contact [your-email@example.com].
