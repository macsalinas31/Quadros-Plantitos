import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"


function Mainlayout() {
    return (
        <>
            <Outlet></Outlet>
            <Footer></Footer>
        </>

    )
}
export default Mainlayout;