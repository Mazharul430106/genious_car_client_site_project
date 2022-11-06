import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegisterForm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email, password);

        createUser(email,password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err=> console.log(err))

    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-32">
                <div className="text-center lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <h1 className="text-4xl text-center font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;