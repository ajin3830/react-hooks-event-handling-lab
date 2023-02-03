// Code EyesOnMe Component Here
import React from "react";

// when the button is clicked, it's received focus 
// when anywhere else outside the button is clicked, it's losed focus
function EyesOnMe() {

    function handleFocus() {
        console.log('Good!')
        // this event fires when it receives focus
    }
    function handleBlur() {
        console.log('Hey! Eyes on me!')
        // this event fires when it loses focus
    }

    return (
        <>
            <button onFocus={handleFocus} onBlur={handleBlur}>
                Eyes on me
            </button>
        </>
    )
}

export default EyesOnMe;

