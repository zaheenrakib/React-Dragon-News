import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password, name, photo);


        // create user 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                 console.log(err);
             })

    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className='text-3xl my-10 text-center'>Please Register</h2>

                <div className="card shrink-0 md:w-3/4 mx-auto lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center mt-4'>Already have an Account? <Link className="text-blue-600 font-bold" to="/login" >Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;