# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeB9Cp__-EfLjNBzKo50w3yZVW6pYlXzw",
  authDomain: "coffee-store-efd2f.firebaseapp.com",
  projectId: "coffee-store-efd2f",
  storageBucket: "coffee-store-efd2f.firebasestorage.app",
  messagingSenderId: "657723250829",
  appId: "1:657723250829:web:70ce41f609cf3d45d0aac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
