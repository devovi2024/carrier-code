import { Outlet } from "react-router";
import Navbar from "../pages/Shared/navbar";
import Footer from "../pages/Shared/footer";


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default RootLayout;