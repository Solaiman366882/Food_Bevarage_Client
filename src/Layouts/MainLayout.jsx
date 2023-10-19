import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import '../assets/css/custom.css'


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;