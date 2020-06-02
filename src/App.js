import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import "bootstrap/dist/css/bootstrap.css";

const App = (props)=> {
  return (
    <div className="container">
      <div className="App">
      <header className="App-header">
        <h2>Counter App</h2>
      </header>
       
      <Counter />
    </div></div>
    
  );
}
const ButtonThree = (props) => {
  function handleClick() {
      alert("You clicked me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

export default App;
