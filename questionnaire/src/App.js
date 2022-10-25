import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowQuestionnaire from './components/ShowQuestionnaire/ShowQuestionnaire';


function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <ShowQuestionnaire /> 
    </div>
  );
}

export default App;
