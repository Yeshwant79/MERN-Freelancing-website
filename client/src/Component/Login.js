import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from "./Login.module.css";
import { AuthContext } from '../store/auth';
import { toast } from 'react-toastify';
import Nav from './Nav';
import Footer from './Footer';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { storeTokenInLS } = useContext(AuthContext)
    const navigate = useNavigate()

    const sendData = async (e) => {
        e.preventDefault()
        try {
            const data = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await data.json()


            if (res.msg === "You have logged in") {
                toast.success("Login Successfuly")
                navigate('/')
            } else {
                if (res.msg === 'Email or Password is not valid') {
                    toast.error("Email or Password is not valid")
                } else {
                    if (res.msg === "You are not registerd user") {
                        toast.warning("You are not registerd user")
                    }
                    else {
                        if (res.msg === "All fields are required") {
                            toast.warning("All fields are required")
                        }
                        else {
                            if (res.msg === "Unable to login") {
                                toast.error("Unable to login")
                            }
                        }
                    }

                }
            }
            storeTokenInLS(res.token)
            console.log(res)
        } catch (error) {
            console.log(error)

            toast.error('Incorrect Email or Password')
        }
    }

    return (
        <>
            <Nav />


            <div className={`container-fluid d-flex align-items-center ${style.body}`}>

                <div className={`col-lg-7 col-md-10 mx-auto `} style={{ border: "2px solid rgb(87, 232, 80)" }}>

                    <div className={`row ${style.main} shadow`}>

                        <div className={`col-lg-5 col-md-6 ${style.left}`}></div>

                        <div className={`col-lg-7 col-md-6 ${style.right}`}>

                            <div className={style.griting}>
                                <p className='h3' style={{ fontFamily: "Dancing Script, cursive" }}>Welcome</p>
                            </div>

                            <form className={``} onSubmit={sendData}>
                                <div className={``}>
                                    <input type='text' id="email" value={email} className={`form-control`} onChange={(e) => setEmail(e.target.value)} />
                                    <label className='form-label'>Your Email</label>
                                </div>
                                <div className={``}>
                                    <input type='text' id="password" value={password} className={`form-control`} onChange={(e) => setPassword(e.target.value)} />
                                    <label className='form-label'>Your Password</label>
                                </div>
                                <div className={``}>
                                    <button className='btn btn-outline-warning d-flex mx-auto' type='submit'>Login</button>
                                </div>
                                <div className={`mt-4 ${style.ridirect}`}>
                                    <p>Don't have an account ? <NavLink to={"/registration"}>Click Here</NavLink></p>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Login;
