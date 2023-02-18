import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"


function AdminLayout() {
    return (

        <>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
        </>

    )
}
export default AdminLayout;