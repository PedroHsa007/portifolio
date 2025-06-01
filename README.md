# Pedro Henrique - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg)

## Features

- Interactive UI with smooth animations using Framer Motion
- Responsive design that works on all device sizes
- Contact form with email notifications
- Courses, skills, education, and experience sections
- Floating social media links

## Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- Lucide React

### Backend
- Node.js
- Express
- Nodemailer
- CORS

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Setting Up the Project

1. Clone this repository

```bash
git clone <repository-url>
cd portfolio-pedro-henrique
```

2. Install dependencies

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```
# Server configuration
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
EMAIL_FROM=your-email@gmail.com
VITE_EMAIL_RECEIVER=your-email@gmail.com

# Frontend configuration
VITE_API_URL=http://localhost:3001
```

> **Note**: For Gmail, you'll need to use an "App Password" rather than your regular password. You can generate one in your Google Account settings.

## Running the Project

### Development Mode

1. Start the frontend development server:

```bash
npm run dev
```

2. In a separate terminal, start the backend server:

```bash
npm run server
```

The frontend will be available at http://localhost:5173 and the backend at http://localhost:3001.

### Production Build

1. Build the frontend:

```bash
npm run build
```

2. Preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-pedro-henrique/
├── public/               # Static files
├── server/               # Backend server
│   └── index.js          # Express server setup
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .env                  # Environment variables (create this)
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Deployment

### Frontend Deployment

You can deploy the frontend to services like Netlify, Vercel, or GitHub Pages:

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` directory to your hosting service.

### Backend Deployment

For the backend, you can use services like Heroku, Railway, or Render:

1. Make sure your environment variables are set up in your hosting platform.
2. Deploy the `server` directory.
3. Update the `VITE_API_URL` in your frontend deployment to point to your backend URL.

## License

[MIT](LICENSE)

## Contact

Pedro Henrique - pedrohenrisa21@gmail.com