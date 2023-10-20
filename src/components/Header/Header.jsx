import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo-2.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import './Header.css'

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }


    return (
        <section className="header-section bg-white shadow-xl">
            <div className=" max-w-screen-xl mx-auto px-3">
                <div className="py-5 flex justify-between items-center">
                    <div className="logo-area">
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav className="">
                        <ul className="flex gap-5 menu">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/add_product"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/my_cart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    >
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    >
                                    Register
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="login">
                    {
                        user ? <button onClick={handleLogOut} className=" c-btn">Logout</button>
                        :<Link to='/login' className=" c-btn">Login</Link>
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;