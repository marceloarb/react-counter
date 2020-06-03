import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "/Users/marcelobarbosa/Documents_copy/teksystems/react-counter/src/Components/Display.css";
import ReactCSSTransitionGroup from 'react-transition-group';

export default function ButtonPad(props) {
    return (
        <div className="Display"  >
            <button className="badge badge-dark m-3" onClick={props.onIncrementeFive}  ><img src="https://img.icons8.com/dusk/64/000000/unity-5.png"/></button>
            <br></br>
            <button className="badge badge-dark m-3"  onClick={props.onIncremente}
             ><svg className="bi bi-plus-circle " width="8.4em" height="8.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  </svg></button>
            <button className="badge badge-dark m-3" onClick={props.onDecremente}
            ><svg className="bi bi-dash-circle" width="8.4em" height="8.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
</svg></button>
<br></br>
<button className="badge badge-dark m-3"  onClick={props.onIncrementeTwo} ><img src="https://img.icons8.com/plasticine/100/000000/2-c.png"/></button>
        <button className="badge badge-dark m-3" onClick={props.onReset} ><svg className="bi bi-bootstrap-reboot" width="8.4em" height="8.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"/>
</svg></button>
</div>
        
    )
    

}

    
    
