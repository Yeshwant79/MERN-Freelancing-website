import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Registration.module.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/auth';
import { toast } from 'react-toastify';
import Nav from './Nav';
import Footer from './Footer';

const Registration = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [contact, setContact] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const [student, setStudent] = useState({
        name: "", email: "@gmail.com", contact: "1234567890", password: "1234", confirmPassword: "1234"
    })

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setStudent({
            ...student, [name]: value
        })
    }

    const { storeTokenInLS } = useContext(AuthContext)

    const navigate = useNavigate()

    const sendData = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(student),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await data.json()

            storeTokenInLS(res.token)
            setStudent({ name: "", email: "@gmail.com", contact: "1234567890", password: "1234", confirmPassword: "1234" })
            console.log(res)
            toast.success('Ragistration Successful')
            navigate('/login')
        } catch (error) {
            console.log(error)
            setStudent({ name: "", email: "", contact: "", password: "", confirmPassword: "" })
            toast.error('Fail to Register')
        }
    }

    const validation = async (e) => {
        e.preventDefault()
        if (!student.name || !student.email || !student.contact || !student.password || !student.confirmPassword) { toast.warning('All feilds are required') }
        else {
            if (student.name.length < 3) { toast.warning('Enter your Valid Name') }
            else {
                if (student.email.length < 5) { toast.warning('Enter your Valid Email') }
                else {
                    if (student.contact.length !== 10) { toast.warning("Enter Your valid Phone Number") }
                    else {
                        if (student.password.length < 4) { toast.warning('Password should have minimun 4 Charectors ') }
                        else {
                            if (student.password !== student.confirmPassword) { toast.warning('Confirm Password is not matched') }
                            else { sendData() }
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            <Nav />

            <div className={`container-fluid d-flex align-items-center ${style.body}`}>
                <div className={`col-8 mx-auto mt-5`}>
                    <div className={`row py-2 pe-2 shadow shadow-4 rounded ${style.main}`}>


                        {/* <div className={`col-md-8 p-0 ${style.right}`}>

                            <form onSubmit={validation} className={`${style.form} text-white p-3`}>
                                <div className={`row`}>
                                    <div className='col-4'>
                                        <label className={`${style.label}`}>Name :</label>
                                    </div>
                                    <div className='col-8'>
                                        <input type='text' className={`text-light border-bottom broder-light`} id="name" name='name' value={student.name} placeholder="Enter your Name" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className={`row`}>
                                    <div className='col-4'>
                                        <label className={`${style.label}`}>Email :</label>
                                    </div>
                                    <div className='col-8'>
                                        <input type='text' className={`text-light border-bottom broder-light`} id="email" name='email' value={student.email} placeholder="Enter Email address" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className={`row`}>
                                    <div className='col-4'>
                                        <label className={`${style.label}`}>Contact  :</label>
                                    </div>
                                    <div className='col-8'>
                                        <input type='text' className={`text-light border-bottom broder-light`} id="contact" name='contact' value={student.contact} placeholder="Enter Mobile number" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className={`row`}>
                                    <div className='col-4'>
                                        <label className={`${style.label}`}>Password :</label>
                                    </div>
                                    <div className='col-8'>
                                        <input type='text' className={`text-light border-bottom broder-light`} id="password" name='password' value={student.password} placeholder="Create new password" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className={`row`}>
                                    <div className='col-4'>
                                        <label className={`${style.label}`}>Confirm Password :</label>
                                    </div>
                                    <div className='col-8'>
                                        <input type='text' className={`text-light border-bottom broder-light`} id="confirmPassword" name='confirmPassword' value={student.confirmPassword} placeholder="Confirm your password" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className={`my-4`}>
                                    <button className={`btn btn-outline-light mx-auto d-flex`} type='submit'>Register</button>
                                </div>
                                <div className={`${style.label} my-1`}>
                                    <p>Alredy have an account ? <NavLink to={"/login"}>Click Here</NavLink></p>
                                </div>
                            </form>

                        </div> */}

                        <div className={`col-lg-7 px-3 ${style.left}`}>

                            <form onSubmit={validation} className={`${style.form} pt-1`}>

                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="flex-fill mb-0">
                                        <input type='text' className={`form-control py-1`} id="name" name='name' value={student.name} onChange={handleInput} />
                                        <label className={`${style.label} form-label`} for="name">Your Name</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type='text' className={`form-control py-1`} id="email" name='email' value={student.email} onChange={handleInput} />
                                        <label className={`${style.label} form-label`} for="email">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type='text' className={`form-control py-1`} id="contact" name='contact' value={student.contact} onChange={handleInput} />
                                        <label className={`${style.label} form-label`} for="contact">Your Phone Number</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type='text' className={`form-control py-1`} id="password" name='password' value={student.password} onChange={handleInput} />
                                        <label className={`${style.label} form-label`} for="password">Password</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center">
                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" className="form-control py-1" id="confirmPassword" name='confirmPassword' value={student.confirmPassword} onChange={handleInput} />
                                        <label className={`${style.label} form-label`} for="">Repeat your password</label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-2 mx-4">
                                    <button className={`btn btn-outline-warning mx-auto py-1 d-flex`} type='submit'>Register</button>
                                </div>

                                <div className={`${style.label} text-center mt-2`}>
                                    <p>Alredy have an account ? <NavLink to={"/login"}>Click Here</NavLink></p>
                                </div>

                            </form>

                        </div>

                        <div className={`col-lg-5 p-0 ${style.right}`}></div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Registration; 
