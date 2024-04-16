import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js"



const SharedLayout = () =>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}


export default SharedLayout;