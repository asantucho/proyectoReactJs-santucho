import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDictcTC4_V6E-I7HBcYxOEIeIWG-mr7xs',
  authDomain: 'thebeautybox-coderhouse.firebaseapp.com',
  projectId: 'thebeautybox-coderhouse',
  storageBucket: 'thebeautybox-coderhouse.appspot.com',
  messagingSenderId: '957373963662',
  appId: '1:957373963662:web:a7f424390ad761bc71d8df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
