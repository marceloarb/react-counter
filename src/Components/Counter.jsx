import React, {useState} from 'react';
import  "./DisplayCss.css";
import Display from "../Components/Display"
import ButtonPad from './ButtonPad';


const Counter=()=> {
    const [count, setCount] = useState(0);
    const [list, setList]= useState([]);
    const handleCount = (handle)=>{
        if(handle == 0){
            setCount(0)
            setList([0])
            return 
        }
        setCount(count+handle);
        let newItem = count+handle;
        let newList = list;
        newList.push(newItem);
        setList(newList);
        
    }
    return (
        <div className="counter">
            <Display displayCount={count} listCount={list} />
            <ButtonPad 
            onIncremente={(e)=>{
                e.nativeEvent.stopImmediatePropagation()
                handleCount(1)
            }}
            onIncrementeTwo={()=>handleCount(2)}
            onIncrementeFive={()=>handleCount(5)}
            onDecremente={()=>handleCount(-1)}
            onReset={()=>handleCount(0)}
            />
        </div>
    )
}




export default Counter;