import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/loginimg.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    useTitle('LogIn');

    const {googleProviderLogin, signIn, setLoading} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    // After Login Navigation Variable
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // const [refresh, setRefresh] = useState(false);

    // Login Form Submition Handler Function
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoading(false);
            form.reset();
            navigate(from, {replace: true});
            toast.success('Successfully Logged In');
        })
        .catch(error => {
            console.error(error);
            setError(error.code);
            toast.error(error.code);
        })
    }


    // Google Sign In Login Form  Handler Function
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success("Successfully SignUp With Google");
            navigate(from, {replace: true});
        })
        .catch(error => {
            toast.error(error);
            console.error(error);
        })
    }

    return (
    <div className="max-w-[900px] my-10 mx-auto lg:px-0 md:px-0 px-3">
        <div className=" grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left flex items-center">
                <img className='lg:w-3/4 md:w-3/4 w-1/3 mx-auto' src={loginimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow bg-base-100  border border-gray-100 p-8">
                <h2 className=" md:text-5xl text-3xl text-center font-bold text-[#0A5078]">Login</h2>

                <form  onSubmit={handleFormSubmit} className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold  sm:text-lg text-md">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold  sm:text-lg text-md">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-2">
                        <input className="py-2 px-3 rounded-lg bg-[#0A5078] hover:bg-[#0e6597]  duration-300   text-white capitalize text-xl font-bold shadow-lg cursor-pointer " type="submit" value="Log In" />
                        <p className='text-center mt-2'>New to FitiFy? Please <Link className='text-[#0A5078] font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </form>
                {/* Normal Sign In Form end */}

                {/* Social SignIn */}
                <div className='text-center mt-2'>
                    <p className='font-semibold'>-----Or-----</p>
                    <div className='flex justify-center  mt-2'>
                        <button onClick={handleGoogleSignIn } className='btn capitalize btn-sm text-md  border bg-white shadow  duration-200 hover:bg-gray-100  text-black rounded-md'>Log In With Google<FcGoogle className=' ml-2 text-lg'></FcGoogle></button>
                    </div>
                </div>
                {/* Social SignIn End*/}
            </div>
        </div>
    </div>
    );
};

export default Login;