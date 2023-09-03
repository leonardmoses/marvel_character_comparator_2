import MainNav from "./MainNav";


const Layout = (props) => {
    return ( 
        <div>
            <MainNav openDirections={props.openDirections}/>
            <main>{props.children}</main>
        </div>
     );
}
 
export default Layout;