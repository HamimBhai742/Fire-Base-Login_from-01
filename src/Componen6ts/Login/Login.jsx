import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import app from '../Auth_Int/Auth_int';
import { Link } from 'react-router-dom';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handlePasswordShow = () => {
        setShowPassword(!showPassword)
    }

    const emailRef = useRef(null)

    const handleforgetPass = () => {

        const email = emailRef.current.value;
        // console.log(email);
        // console.log(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));
        setError('')
        setSuccess('')
        if (!email) {
            setError('Please provide email')
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError('Invalid email')
            return
        }
        sendPasswordResetEmail(auth,email)
        .then(res=>{
            console.log(res);
            alert('Please cheak your email')
        })
        .catch(error=>{
            console.log(error);
        })
    }


    const auth = getAuth(app);

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleLoginBtn = (e) => {
        e.preventDefault()
        // console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')
        setSuccess('')
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                if(res.user.emailVerified){
                    setSuccess('Successfully Login User Account')
                }
                else{
                    alert('Please Verify your email')
                }
           
                
            })
            .catch(error => {
                // console.log();
                setError('Incorrect Password')
            })
    }
    return (
        <div className='max-w-[1170px] mx-auto'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex flex-col w-[800px]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6">
                        <form className="card-body" onSubmit={handleLoginBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='form-control relative'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered" required />

                                    <span className='absolute top-3 right-3 text-xl' onClick={handlePasswordShow}>{showPassword ? <IoMdEyeOff></IoMdEyeOff> : <FaEye></FaEye>}</span>
                                </div>
                                <label className="label">
                                    <a onClick={handleforgetPass} href="#" className="label-text-alt link link-hover text-blue-600">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-xl font-bold" value='Login'></input>
                            </div>
                            <div className='text-red-500'>
                                {
                                    error && <p>{error}</p>
                                }
                                {
                                    success && <p className='text-green-500'>{success}</p>
                                }
                            </div>

                            <div>
                                <p>New to this website? Please <Link to='/singup' className='text-blue-600'>Sing Up</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;