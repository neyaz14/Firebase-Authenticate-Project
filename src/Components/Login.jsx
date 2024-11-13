import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {singInUser} = useContext(AuthContext) 
    const navigate = useNavigate();
    const handleLogin =e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singInUser(email, password)
        .then(res =>{console.log('Login success full',res.user)
            e.target.reset();
            navigate('/order')
        })
        .catch(err => {console.log(err.message)})

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col gap-6">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
{/* form content start from here */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                {/* email  */}
                            <input 
                            name='email'
                            type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
            {/* password */}
                            <input 
                            name='password'
                            type="password" placeholder="password" className="input input-bordered" required />
            {/* forget pw */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
            {/* login button  */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        
                    </form>
                    <div className=" p-5 mt-6">
                            <p className='mb-3'>New here ? </p>
                            <button className="btn  btn-wide"><Link to='/register'>Register</Link></button>
                        </div>
{/*  ---------------------------------------------------------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default Login;