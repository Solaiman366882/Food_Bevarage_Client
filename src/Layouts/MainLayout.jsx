import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import '../assets/css/custom.css'


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-4xl niconne-font">This is main layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;