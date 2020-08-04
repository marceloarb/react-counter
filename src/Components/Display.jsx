import React from 'react';
import "./DisplayCss.css";
import "bootstrap/dist/css/bootstrap.css";
import AnimatedNumber from 'react-animated-number';

function Display(props) {
    
    
    return (
        <div  className="Display" >
            <h1 className="tag" ><AnimatedNumber
							style={{
								transition: '0.5s ease-out',
								transitionProperty: 'background-color, color'
							}}
							frameStyle={perc =>
								perc === 100
									? {}
									: { backgroundColor: 'blue' }
							}
							stepPrecision={0}
							value={props.displayCount}
						/></h1>
                    <ul>
                        {props.listCount.map((val,idx)=> <li key={idx} >{val}</li>)}
                    </ul>
        </div>
        
    )


}


export default Display;

