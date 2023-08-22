import { useState } from "react";


const Char1SearchForm = ({name1 , setName1}) => {

    function submitName1Search(e) {
        e.preventDefault();
        // console.log(name1)
        console.log(name1)
      }

    return ( 
        <>
            <form onSubmit={submitName1Search}>
                <input type="text" placeholder="name" value={name1} onChange={(e) => {setName1(e.target.value)}}/>
                <input type="submit" />
            </form>
        </>
     );
}
 
export default Char1SearchForm;