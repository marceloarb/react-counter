import React, {useState} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


const Counter=()=> {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <Display displayCount={count}  />
            <ButtonPad 
            onIncremente={() => setCount(count + 1)}
            onDecremente={() => setCount(count - 1)}
            />
        </div>
    )
}




export default Counter;