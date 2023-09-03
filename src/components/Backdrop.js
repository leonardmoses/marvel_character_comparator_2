import "./Backdrop.scss"

const Backdrop = (props) => {
    return ( 
        <div className="Backdrop" onClick={props.onBackdrop}/> 
        );
}
 
export default Backdrop;