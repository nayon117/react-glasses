import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className='2xl:container mx-auto'>
            <NavBar />
            <Outlet />
            <Footer />
            <Toaster/>
    </div>
    );
};

export default MainLayout;