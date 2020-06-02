import React from 'react';
import './App.css';
import Counter from './Components/Counter';

const App = (props)=> {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter App</h2>
      </header>
      <ButtonThree/>
       
      <Counter />
    </div>
  );
}
const ButtonThree = (props) => {
  function handleClick() {
      alert("You clicked me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}
const Increment = () =>{
    
}
export default App;
