import React from 'react';
import ReactDOM from 'react-dom/client';
import Puck from './Puck.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!); // <- `!` говорит TS, что элемент точно есть

root.render(
  <React.StrictMode>
    <Puck />
  </React.StrictMode>
);