import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"


export default function BasicLayout() {
    return (
        <>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </>

    )
    }