import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Particles from 'react-particles-js';
import { simple } from './data/particlesJsParams';

export default function App() {
  return (
    <div className="App">
      <Particles
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
        }}
        params={simple}
      />

      <TodoList />
    </div>
  );
}
