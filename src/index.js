import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

import './style.css';
import Button from './Components/Button/Button.jsx';

function App() {
  return (
    <>
      <h1>This yo is my React App!</h1>
      <Button />
      <Button />
    </>
  );
}

root.render(<App tab="home" />);
