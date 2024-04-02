import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../Auth_Int/Auth_int';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
const Singup = () => {


    const auth = getAuth(app);

    // const [user, setUser] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)



    const handlePasswordShow = () => {
        setShowPassword(!showPassword)
    }
    // console.log(showPassword);
    // const handleFrogetBtn = () => {

    //     // console.log(email);

    //     setError('')
    //     setSuccess('')
    //     if (!email) {
    //         setError('Please provide email')
    //         return
    //     }
    //     else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailRef)) {
    //         setError('Invalid email')
    //         return
    //     }
    //     else if (email) {
    //         setSuccess('ssss')
    //     }
    // }

    const handleSingUpBtn = (e) => {
        // console.log(e);
        e.preventDefault()
        const name=e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const trams = e.target.trms.checked
        console.log(name);


        setSuccess('')
        setError('')
        if (password.length < 6) {
            setError('Password Minimum 6 Character')
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setError('Uppercase Not In Password')
            return
        }
        else if (!trams) {
            setError('Please Accepte Our Trams And Conditions')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const result = res.user
                setSuccess('Successfully Creating New User Account');
                sendEmailVerification(res.user)
                .then(()=>{
                    alert('Please veryfi this email')
                })

                updateProfile(res.user,{
                    displayName:name
                })
                .then(()=>console.log('Updated Profile'))
                .catch(()=>console.log('error'))
            })
            .catch(error => {
                setError('Already Created Account');
                return
            })
        //  setSingUpBtnClick(true)
        //  console.log(singUpBtnClick);
    }
    return (
        <div className='max-w-[1170px] mx-auto'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex flex-col w-[800px]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6">
                        <form className="card-body" onSubmit={handleSingUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='form-control relative'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered" required />

                                    <span className='absolute top-3 right-3 text-xl' onClick={handlePasswordShow}>{showPassword ? <IoMdEyeOff></IoMdEyeOff> : <FaEye></FaEye>}</span>
                                </div>
                                {/* <label className="label">
                                    <a href="#"  className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div>
                                <input type="checkbox" name="trms" id="" />
                                <label className='ml-2' htmlFor="trms"><a href="/ddd">Accepted trams and condition</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-xl font-bold" value='Sing Up'></input>
                            </div>
                            <div className='text-red-500'>
                                {/* {
                                    pass && <p></p>
                                } */}
                                {
                                    success && <p className='text-green-500'> {success}</p>
                                }
                                {
                                    error && <p>{error}</p>
                                }
                                {/* {
                                    uppercase && <p></p>
                                } */}
                            </div>
                            <div>
                                <p>Already have an acccount? Please <Link to='/login' className='text-blue-600'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Singup;