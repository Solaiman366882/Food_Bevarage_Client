import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h1 className="text-center text-4xl">This is main layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;