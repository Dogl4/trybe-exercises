import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
      </label>
      <input id="id-email" type="email" />
      <input id="id-email" type="button" value="Enviar" />
    </div>
  );
}

export default App;
