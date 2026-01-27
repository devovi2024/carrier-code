import { Outlet } from "react-router";
import Navbar from "../pages/Shared/navbar";
import Footer from "../pages/Shared/footer";
import Banner from "../pages/Home/banner";


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default RootLayout;