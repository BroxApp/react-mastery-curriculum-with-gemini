import { useState } from "react";

export default function useToggle (initialValue = false){
    const [state, setState] = useState(initialValue);
    
    function toggle(){
        setState(previousState => !previousState);
    }

    function setTrue (){
        setState(true);
    }

    function setFalse (){
        setState(false);
    }

    return{
        state,
        toggle,
        setTrue,
        setFalse
    };
    
}