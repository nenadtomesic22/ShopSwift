import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UpdateProvider } from "./components/UpdateContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UpdateProvider>
      <App />
    </UpdateProvider>
  </StrictMode>
)