import { useRef } from "react";

import "./CharSearch.scss"

const Char2SearchForm = (props) => {
    //Initate useRef for inputing the name. 
    // This method is better than onChange and avoides rerenders    
    const inputName2Ref=useRef()

    //Function to be called when form is submitted
    function onSearchClick(e) {
        e.preventDefault()
        props.submitName2Input(inputName2Ref.current.value)
        props.setUrl2(props.baseURL+inputName2Ref.current.value)
        props.setSelectedCharacter2(props.charData2?.[0])
        // inputName2Ref.current.value = ''
    }

    return ( 
        <>
            <form onSubmit={onSearchClick} className="CharSearchForm">
                <div className="SearchInputAndSubmit">
                    <input className="Input" type="text" placeholder="Superhero Name" ref={inputName2Ref} />
                    <input className="SearchSubmit" type="submit" value='search' />
                </div>
            </form>
        </>
     );
}

export default Char2SearchForm;