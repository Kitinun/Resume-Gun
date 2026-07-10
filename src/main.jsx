import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const easterEgg = `
  _  ___ _   _                  
 | |/ (_) | (_)                 
 | ' / _| |_ _ _ __  _   _ _ __ 
 |  < | | __| | '_ \\| | | | '_ \\
 | . \\| | |_| | | | | |_| | | | |
 |_|\\_\\_|\\__|_|_| |_|\\__,_|_| |_|
 
 Hello there, fellow developer! 👋
 Looks like you're inspecting the code. 
 If you like what you see, let's connect!
`;
console.log(
  "%c" + easterEgg,
  "color: #3b82f6; font-family: monospace; font-size: 14px;"
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
