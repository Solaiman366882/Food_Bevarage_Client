import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {


    const {userLogin,handleGoogleLogin}  = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = media => {

        media()
        .then( result => {
            console.log(result);
            Swal.fire(
                'Good job!',
                'Successfully login with google',
                'success'
              )
            navigate( location?.state ? location.state : '/')
        })
        
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password =  e.target.password.value;

        const validatePassword = (password)  =>{
            const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/;
            return pattern.test(password);
        }

        if(!validatePassword(password)){
           return Swal.fire(
            'Sorry !',
            'Invalid Password',
            'error'
          );
        }

        userLogin(email,password)
        .then(result => {

            //redirect after successfull login
            navigate( location?.state ? location.state : '/')
            console.log(result)
            Swal.fire(
                'Good job!',
                'Login Successfully',
                'success'
              )
        })
        .catch(err => console.log(err))
        console.log(email,password);



    }








    return (
        <section>
            <div className=" max-w-screen-xl mx-auto px-5" >
                <div className="py-10">
                    <div className="title-area">
                        <h4>Please ,</h4>
                        <h2>Log<span>In</span></h2>
                    </div>
                    <div className="form-area max-w-3xl">
                        <form onSubmit={handleLogin} className="flex flex-col gap-5">
                            <div className="single-input">
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="single-input">
                                <input type="password" name="password" placeholder="Enter your password" />
                            </div>
                            <div className="submit-btn-area">
                                <input className="form-btn w-full" type="submit" value="Login" />

                                <div className="ask-to-go">
                                <button onClick={() => handleSocialLogin(handleGoogleLogin)} className="form-btn w-full mt-5" type="button">Login with google</button>
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