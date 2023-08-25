import { useEffect, useState } from "react";


const Char1SearchForm = (props) => {
    
    function submitName1Input(e) {
        e.preventDefault()
        props.setName1(props.name1)
    }

    
    return ( 
        <>
            <form onSubmit={submitName1Input}>
                <input type="text" placeholder="name" onChange={(e) => props.setName1(e.target.value)}/>
                <input type="submit" value='search' />
            </form>
        </>
     );
}
 
export default Char1SearchForm;