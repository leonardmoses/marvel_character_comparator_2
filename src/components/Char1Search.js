import { useEffect, useState } from "react";


const Char1SearchForm = (props) => {
    


    
    return ( 
        <>
            <form onSubmit={props.submitName1Input}>
                <input type="text" placeholder="Superhero Name" onChange={(e) => props.setName1(e.target.value)}/>
                <input type="submit" value='search' />
            </form>
        </>
     );
}
 
export default Char1SearchForm;