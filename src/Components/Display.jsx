import React from 'react';
import "/Users/marcelobarbosa/Documents_copy/teksystems/react-counter/src/Components/Display.css";
import "bootstrap/dist/css/bootstrap.css";

function Display(props) {
    

    return (
        <div  className="Display" >
            <h1 className="tag" >{props.displayCount}</h1>
        </div>
        
    )


}



export default Display;

