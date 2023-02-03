// Code Keypad Component Here
import React from "react";

function Keypad (props){
    // console.log(props)
    
    function handleChange(e) {
        // console.log(e.target.value)
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input type="password" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;