import { useEffect, useRef, useState } from "react";


const Char1SearchForm = (props) => {
    
    const inputNameRef=useRef()

    function  onSubmit(e) {
        e.preventDefault()
        props.submitName1Input(inputNameRef.current.value)
    }
    
    return ( 
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Superhero Name" ref={inputNameRef} />
                <input type="submit" value='search' />
            </form>
        </>
     );
}
 
export default Char1SearchForm;