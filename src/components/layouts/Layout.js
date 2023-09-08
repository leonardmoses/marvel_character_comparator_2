import Footer from "./Footer";
import MainNav from "./MainNav";


const Layout = (props) => {
    return ( 
        <>
            <MainNav/>
            <main>{props.children}</main>
            <Footer/>
        </>
     );
}
 
export default Layout;