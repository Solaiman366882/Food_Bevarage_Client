import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo-2.png'
import './Header.css'

const Header = () => {
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
                        </ul>
                    </nav>
                    <div className="login">
                        <Link to='/login'>
                            <button className="c-btn">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;