import { useState } from "react";


const Char1SearchForm = ({onName1Search}) => {
    const [ name1Input , setName1Input ] = useState('')

    function submitName1Input(e) {
        e.preventDefault();
        onName1Search(name1Input)
        setName1Input('')
        console.log(name1Input)
      }

     function onChangeName1Input(e) {
        setName1Input(e.target.value)
     }


    return ( 
        <>
            <form onSubmit={submitName1Input}>
                <input type="text" placeholder="name" value={name1Input} onChange={onChangeName1Input}/>
                <input type="submit" value='search' />
            </form>
        </>
     );
}
 
export default Char1SearchForm;