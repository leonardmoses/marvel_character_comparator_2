import { useRef } from "react";

import "./CharSearch.scss"

const Char1SearchForm = (props) => {
    //Initate useRef for inputing the name. 
    // This method is better than onChange and avoides rerenders    
    const inputName1Ref=useRef()

    //Function to be called when form is submitted
    function onSearchClick(e) {
        e.preventDefault()
        props.submitName1Input(inputName1Ref.current.value)
        props.setUrl1(props.baseURL+inputName1Ref.current.value)
        props.setSelectedCharacter1(props.charData1?.[0])
        // inputName1Ref.current.value = ''
    }

    return ( 
        <>
            <form onSubmit={onSearchClick} className="CharSearchForm">
                <div className="SearchInputAndSubmit">
                    <input className="Input" type="text" placeholder="Superhero Name" ref={inputName1Ref} />
                    <input className="SearchSubmit" type="submit" value='search' />
                </div>
            </form>
        </>
     );
}

export default Char1SearchForm;