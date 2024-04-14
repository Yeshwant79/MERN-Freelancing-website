import React from 'react'
import { Link } from 'react-router-dom'

import style from './About.module.css'
import img1 from './img/aboutIdea.jpg'
import img2 from './img/wm02.jpg'
import img3 from './img/bn1.svg'
import img4 from './img/bn2.svg'
import img5 from './img/bn3.svg'
import img6 from './img/bn4.svg'
import img7 from './img/bn5.png'
import img8 from './img/bn6.png'
import img9 from './img/seelaptop.webp'
import img10 from './img/lohp-pro.webp'

const About = () => {
    return (
        <>
            <div className='container-fluid'>
                {/* Sectio-1 */}
                <div className='col-12 my-5'>

                    <h1 className='text-center my-2' style={{ color: "rgb(87, 232, 80)" }}>About Us</h1>

                    <hr width='180px' className='mx-auto' style={{ border: "none", height: "5px", backgroundColor: "rgb(87, 232, 80)", opacity: "1" }} />

                    <div className='row'>

                        <div className='col-lg-6'>
                            <img src={img1} height='300px' alt='aboutPhoto1' className='mx-auto d-flex' />
                        </div>

                        <div className='col-lg-6 d-flex align-items-center'>
                            <div>
                                <h3 className='text-bold'>Company Overview</h3>
                                <p style={{ textAlign: "justify" }}>AskMe.com is the world's largest freelancing and crowdsourcing marketplace by number of users and projects. We connect over 72,420,996 employers and freelancers globally from over 247 countries, regions and territories. Through our marketplace, employers can hire freelancers to do work in areas such as software development, writing, data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Sectio-2*/}
                <div className='col-12 my-5 px-5'>
                    <div className='row d-flex justify-content-evenly'>

                        <div className='col-md-4 col-sm-4'>
                            <div className='row'>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img3} width="100%" alt='brand1' className='d-flex mx-auto'></img>
                                </div>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img4} width="100%" alt='brand2' className='d-flex mx-auto'></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-sm-4'>
                            <div className='row'>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img5} width="100%" alt='brand3' className='d-flex mx-auto'></img>
                                </div>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img6} width="100%" alt='brand4' className='d-flex mx-auto'></img>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-sm-4'>
                            <div className='row'>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img7} width="100%" alt='brand5' className='d-flex mx-auto'></img>
                                </div>
                                <div className={`col mx-2 py-2 ${style.brandbox}`}>
                                    <img src={img8} width="100%" alt='brand6' className='d-flex mx-auto'></img>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Sectio-3 */}
                <div className='col-lg-12 my-5'>
                    <img src={img2} width='80%' height='300px' alt='worldmap' className='d-flex mx-auto' />
                </div>
                {/* Sectio-4 */}
                <div className='col-12 my-5'>
                    <div className='col-lg-8 my-3 py-5 mx-auto'>
                        <h2>Our Online Economy</h2>
                        <p style={{ textAlign: "justify" }}>
                            The video below illustrates the Freelancer online economy. The pink lines indicate where projects are being posted by employers, and the blue lines indicate where the projects are being performed by freelancers. Thicker lines indicate a higher dollar volume of work. White dots indicate the location of Freelancer's users.
                        </p>
                    </div>
                </div>
                <div className={`col-12 my-5 ${style.bggreen}`}>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 p-5 text-light'>
                                <h6 className='my-3'>AskMe.pro</h6>
                                <h2 className='my-2'>We're here for your <b>e-Commerce </b> everything</h2>
                                <div className={`my-3 ${style.smalltext}`}>
                                    <b className='mt-2'>Get a project manager</b>
                                    <p>to guide you through each stage of launching your e-Commerce business</p>
                                    <b className='mt-2'>Accelerate time-to-market</b>
                                    <p>with a dedicated team of top-tier freelance experts</p>
                                    <b className='mt-2'>Optimize your budget</b>
                                    <p>with a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
                                </div>
                                <Link to="/registration" className="btn bg-light" style={{ color: "rgb(87, 232, 80" }}>Get started</Link>
                            </div>
                            <div className='col-md-6'>
                                <img src={img10} width="100%" alt='workflow' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sectio-6 */}
                <div className='col-12 my-5'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <h4>The best part? Everything.</h4>
                                <div className={`my-5 ${style.smalltext}`}>
                                    <b>Stick to your budget</b>
                                    <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                                    <b>Get quality work done quickly</b>
                                    <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                                    <b>Pay when you're happy</b>
                                    <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                                    <b>Count on 24/7 support</b>
                                    <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <img src={img9} width="100%" alt='loptopseeingphoto' className='img-fluid rounded' style={{ objectFit: "cover", boxSizing: "border-box" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
