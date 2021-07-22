import React from 'react';
import Form from './components/Form';
import './App.css';

export const CVContext = React.createContext();

function App() {


  return (
    <div className="App">
      <header className="App-header">
        CV Creator
      </header>
      <div className="Form-container">
        <div className="Form"> 
        
        <Form />
        
        </div>
      </div>


    </div>
  );
}

export default App;
