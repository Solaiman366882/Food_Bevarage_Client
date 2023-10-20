import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {


    const {createUser,handleGoogleLogin} = useContext(AuthContext);
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

    const handleRegister = e => {
        e.preventDefault();
        // const name  = e.target.name.value;
        const password  = e.target.password.value;
        const email  = e.target.email.value;
        // const img  = e.target.img.value;

        // reg expression for password validation
        const validatePassword = (password)  =>{
            const pattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/;
            return pattern.test(password);
        }
        //password validation condition
        if(!validatePassword(password)){
           return Swal.fire(
            'Invalid Password',
            'Your password must have at least 6 character and uppercase letter and special character',
            'error'
          )
        }

        createUser(email,password)
        .then( () => {
            Swal.fire(
                    'Congrats',
                    'User created successfully',
                    'success'
                  )
            navigate( location?.state ? location.state : '/')
        })
        .catch( err => {
            // Swal.fire(
            //     'Sorry',
            //     'This email already exist',
            //     'error'
            //   )
            console.log(err);
            }
        )
    }








    return (
        <section>
        <div className=" max-w-screen-xl mx-auto px-5" >
            <div className="py-10">
                <div className="title-area">
                    <h4>Please ,</h4>
                    <h2>Regist<span>er</span></h2>
                </div>
                <div className="form-area max-w-3xl">
                    <form onSubmit={handleRegister} className="flex flex-col gap-5">
                        <div className="single-input">
                            <input type="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="single-input">
                            <input type="password" name="password" placeholder="Enter your password" />
                        </div>
                        <div className="submit-btn-area">
                            <input className="form-btn w-full" type="submit" value="Register" />

                            <div className="ask-to-go">
                                <button onClick={() => handleSocialLogin(handleGoogleLogin)} className="form-btn w-full mt-5" type="button">Login with google</button>
                                    <p>Don not have account, please <Link to='/login'><span>Login</span></Link></p>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Register;