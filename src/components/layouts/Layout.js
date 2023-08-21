import MainNav from "./MainNav";


const Layout = (props) => {
    return ( 
        <div>
            <MainNav/>
            <main>{props.children}</main>
        </div>
     );
}
 
export default Layout;