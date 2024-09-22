import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/ionic.bundle.css';

// Configura Ionic React
setupIonicReact();

// Define elementos personalizados de Ionic
defineCustomElements(window);

// Crea el root para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
