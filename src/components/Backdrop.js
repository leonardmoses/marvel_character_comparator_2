import "./Backdrop.scss"

const Backdrop = (props) => {

    function closeModals() {
        props.onBackDropInstructions();
        props.onBackdropCharList();
    }

    return ( 
        <div className="Backdrop" onClick={closeModals}/> 
        );
}
 
export default Backdrop;