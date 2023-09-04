import './CharacterList.scss';

const CharcterList = (props) => {

    const marvelTotalCharList = [];
    const hardCodeMaxChar = 100;

    for (let i=1; i<hardCodeMaxChar+1; i++) {
        marvelTotalCharList.push(`Character ${i}`)
    }

    console.log(marvelTotalCharList)

    return ( 
        <div className='CharacterListBody'>
            <h2>List of Marvel Characters</h2>
            <button onClick={props.onClose}>Close</button>
            <div className='ListContainer'>
                <ul>
                {marvelTotalCharList.map((x , idx)  => (
                    <li>{x}</li>
                ))}
                </ul>
            </div>

        </div>
     );
}
 
export default CharcterList;