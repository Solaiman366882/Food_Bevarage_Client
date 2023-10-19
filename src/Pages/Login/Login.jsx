import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section>
            <div className=" max-w-screen-xl mx-auto px-5" >
                <div className="py-10">
                    <div className="title-area">
                        <h4>Please ,</h4>
                        <h2>Log<span>In</span></h2>
                    </div>
                    <div className="form-area max-w-3xl">
                        <form className="flex flex-col gap-5">
                            <div className="single-input">
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="single-input">
                                <input type="password" name="password" placeholder="Enter your password" />
                            </div>
                            <div className="submit-btn-area">
                                <input className="form-btn w-full" type="submit" value="Login" />

                                <div className="ask-to-go">
                                    <p>Don not have account, please <Link to='/register'><span>Register</span></Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;