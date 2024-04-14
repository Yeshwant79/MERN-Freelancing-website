import React, { useState } from 'react'
import img1 from './img/moo1.jpg'
import img2 from './img/team-1.jpg'
import img3 from './img/tt11.jpg'
import img4 from './img/user.jpg'

import style from "./Contact.module.css"
import Nav from './Nav';
import Footer from './Footer';
import { toast } from 'react-toastify'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendData = async (e) => {
        try {
            const data = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const res = await data.json()
            console.log(res)
            setName("")
            setEmail("")
            setMessage("")
            toast.success('Message Sent Successfuly')
        } catch (error) {
            console.log(error.message)
            setName("")
            setEmail("")
            setMessage("")
            toast.error('Unable to send data')
        }
    }

    const validation = (e) => {
        e.preventDefault()
        if (!name || !email || !message) {
            toast.warning('All feilds are required')
            // alert('All feilds are required') 
        }
        else {
            if (name.length < 3) { toast.warning('Enter your Valid Name') }
            else {
                if (email.length < 5) { toast.warning('Enter your Valid Email') }
                else {
                    if (message.length < 5) { toast.warning('Message Should have minimum 5 Charactors') }
                    else { sendData() }
                }
            }
        }
    }


    return (
        <>
            <Nav />

            <div className={`container-fluid px-5 ${style.body}`}>

                <div className={`col-12 d-flex align-items-center ${style.one}`}>
                    <div className={`offset-lg-7 offset-md-4 offset-sm-4 col-md-6 col-lg-4 ${style.fbody}`}>

                        <form className='py-4 px-3 rounded' onSubmit={validation} style={{ backgroundColor: "rgb(87, 255, 78)" }}>
                            <div className={``}>
                                <label className='h6 m-0 text-light form-label'>Name : </label>
                                <input className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className={`my-2 pt-2`}>
                                <label className='h6 m-0 text-light form-label'>Email :</label>
                                <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={`my-2 pt-2`}>
                                <label className='h6 m-0 text-light'>Message</label>
                                <textarea className='border border-light form-control' value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <div>
                                <button type='submit' className={`btn btn-outline-light mx-auto d-flex`}>Send</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className='col-12 my-5' style={{ border: "2px solid rgb(87, 255, 78)" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1147913414206!2d75.86887840914483!3d22.686770279324648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde8566a3b65%3A0x5ce04a9c3b185ded!2sAtulya%20IT%20Park!5e0!3m2!1sen!2sin!4v1708229011790!5m2!1sen!2sin" title="Location" loading="eager" width='100%' height='100%'>
                    </iframe>
                </div>

                <div className='col-12 my-5 py-3'>

                    <div className='col-8 text-center py-4 mx-auto my-3'>
                        <h2 className=''>Our Customer Love Us</h2>
                        <p style={{ fontSize: "small" }}>We're fanatical about your success. Hear it from our users - Striking just works.</p>
                    </div>

                    <div className='col-8 mx-auto my-5'>
                        <div className='row'>
                            <div className={`col-sm-3`}>
                                <div className='d-flex align-items-center'>
                                    <img src={img1} alt='userPhoto1' width="60px" height="60px" className='mx-auto d-block img-responsive border rounded-circle' />
                                </div>
                                <div className='text-center' style={{ fontSize: "small" }}>
                                    <b>SETH GODIN</b>
                                    <p>Bestselling Author</p>
                                </div>
                            </div>
                            <div className={`col-sm-9 shadow rounded-3 d-flex align-items-center`} style={{ backgroundColor: "white" }}>
                                <p>
                                    I started using this tool and it turns out it's a simple web development tool that is all plug and play... It's hard for me to imagine a website being ten times more beautiful than what you can build with Strikingly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-8 offset-lg-3 my-5'>
                        <div className='row'>
                            <div className={`col-sm-3`}>
                                <div className='d-flex align-items-center'>
                                    <img src={img2} alt='userPhoto1' width="60px" height="60px" className='mx-auto d-block img-responsive border rounded-circle' />
                                </div>
                                <div className='text-center' style={{ fontSize: "small" }}>
                                    <b>REBECCA BLOOM</b>
                                    <p>Editor & Writing Coach</p>
                                </div>
                            </div>
                            <div className={`col-sm-9 shadow rounded-3 d-flex align-items-center`} style={{ backgroundColor: "white" }}>
                                <p>
                                    I run a small business from home and I quit GoDaddy long ago because it was expensive and pretty byzantine. I work part-time and I don't want those hours spent on satellite website issues — I want to maximize my earnings. Strikingly is so intuitive and functional. I love it!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-8 mx-auto my-5'>
                        <div className='row'>
                            <div className={`col-sm-3`}>
                                <div className='d-flex align-items-center'>
                                    <img src={img3} alt='userPhoto1' width="60px" height="60px" className='mx-auto d-block img-responsive border rounded-circle' />
                                </div>
                                <div className='text-center' style={{ fontSize: "small" }}>
                                    <b>SETH GODIN</b>
                                    <p>Bestselling Author</p>
                                </div>
                            </div>
                            <div className={`col-sm-9 shadow rounded-3 d-flex align-items-center`} style={{ backgroundColor: "white" }}>
                                <p>
                                    I started using this tool and it turns out it's a simple web development tool that is all plug and play... It's hard for me to imagine a website being ten times more beautiful than what you can build with Strikingly.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-8 offset-lg-3 my-5'>
                        <div className='row'>
                            <div className={`col-sm-3`}>
                                <div className='d-flex align-items-center'>
                                    <img src={img4} alt='userPhoto1' width="60px" height="60px" className='mx-auto d-block img-responsive border rounded-circle' />
                                </div>
                                <div className='text-center' style={{ fontSize: "small" }}>
                                    <b>REBECCA BLOOM</b>
                                    <p>Editor & Writing Coach</p>
                                </div>
                            </div>
                            <div className={`col-sm-9 shadow rounded-3 d-flex align-items-center`} style={{ backgroundColor: "white" }}>
                                <p>
                                    I run a small business from home and I quit GoDaddy long ago because it was expensive and pretty byzantine. I work part-time and I don't want those hours spent on satellite website issues — I want to maximize my earnings. Strikingly is so intuitive and functional. I love it!
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div >

            <Footer />
        </>
    )
}


export default Contact;
