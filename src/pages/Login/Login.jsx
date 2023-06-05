/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {

    const [disable, setDisable] = useState(true);



    const captchaRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const vallidateCapctha = () => {
        const user_value = captchaRef.current.value;
        console.log(user_value);
        if (vallidateCapctha(user_value)) {
            {
                setDisable(false);
            }

        }
    }


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Start Your journey with us</p>
                </div>
                <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter capctha</span>
                            </label>

                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input type="password" ref={captchaRef} name='capcha' placeholder="password" className="input input-bordered" />
                            <button onClick={vallidateCapctha} className='btn btn-outline btn-xs mt-2'> Vallidate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" disabled={disable} type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;