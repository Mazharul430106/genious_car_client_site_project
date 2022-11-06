import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import  { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            alert('user sccessfully login');

            navigate(from, { replace: true });

        })
        .catch(error=> console.log('error', error));
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-32">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='my-5'>All Ready Have An Account <Link to='/register' className='text-red-400'>Please Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;