import React, { useContext } from 'react'
import style from './Footer.module.css'
import { Link } from 'react-scroll'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { AuthContext } from '../store/auth'
const Footer = () => {

    const FooterLinks = [
        { id: "1", to: "/contact", title: "Contact" },
        { id: "2", to: "/registration", title: "Registration" },
        { id: "3", to: "/login", title: "Login" },
    ]

    const { isLoggedIn, LogoutUser } = useContext(AuthContext)

    return (
        <>
            <div className={`container-fluid px-0 ${style.section_1}`}>

                <div className={`col-sm-12 px-4 py-3`}>
                    <hr className='my-5' />
                    <div className='row'>

                        <div className='col-sm-3'>
                            <NavLink to='/' className={`my-2 ${style.logo}`}>
                                <svg id="logo-70" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" className="ccustom" fill="rgb(87, 232, 80)"></path>
                                    <path d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z" className="ccustom" fill="rgb(87, 232, 80)"></path>
                                </svg>
                            </NavLink>
                            <h4 className='mt-3' style={{ color: "rgb(87, 232, 80)" }}>Ask-Me</h4>
                            <h6 className='mt-3'>Lets make step forword to make something new !</h6>
                        </div>

                        <div className='col-sm-2'>
                            <h5 className='my-2' style={{ color: "rgb(87, 232, 80)" }}><u>Useful Links</u></h5>
                            <ul>
                                <li>
                                    <Link to='home' spy={true} smooth={true} duration={500}>
                                        <RouterLink to='/' className='text-dark'>Home</RouterLink>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='about' activeClass='active' spy={true} smooth={true} duration={1000}>
                                        <RouterLink to='/' className='text-dark'>About</RouterLink>
                                    </Link>
                                </li>
                                {
                                    isLoggedIn ? <li><NavLink to="/services" className='text-dark'>Services</NavLink></li> : ""
                                }
                                {
                                    FooterLinks.map((value) => {
                                        return <li key={value.id}>
                                            <NavLink to={value.to} className='text-dark'>{value.title}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div className='col-sm-4 text-dark px-4'>
                            <h5 className='my-2' style={{ color: "rgb(87, 232, 80)" }}><u>Follow us On</u></h5>
                            <ul className='mt-4 mb-2 d-flex flex-wrap'>
                                <li className='mx-3 h4'><i class="fa-brands fa-youtube" style={{ color: "red" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-linkedin" style={{ color: "blue" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-github" style={{ backgroundColor: "white" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-facebook" style={{ color: "#1877F2" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-square-instagram" style={{ color: "#ff0f39" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-facebook-messenger" style={{ color: "#00b2ff" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-twitter" style={{ color: "skyblue" }}></i></li>
                                <li className='mx-3 h4'><i class="fa-brands fa-x-twitter" ></i></li>
                            </ul>
                            <p className=''>Follow us on various platforms.</p>
                        </div>

                        <div className='col-sm-3'>
                            <h6 className='my-3' style={{ color: "rgb(87, 232, 80)" }}><u>Subscribe to get in best offers </u></h6>
                            <div className='col-12 d-flex align-items-center p-0'>
                                <form className='bg-transparent w-100'>
                                    <input className='bg-light form-controll border p-2 my-2 rounded' placeholder='@gmail.com' />
                                    <button className='btn my-2 d-block mx-auto' style={{ color: "rgb(87, 232, 80)", border: "1px solid rgb(87, 232, 80)" }}>Suscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 px-5 py-3 text-light text-center' style={{ backgroundColor: "rgb(87, 232, 80)" }}>
                    <i className=" pe-1 fa-regular fa-copyright"></i>
                    All Rights reserved 2024. Website designed and developed by <RouterLink to='https://github.com/Yeshwant79 ' className='text-primary'>T.Yeshwant</RouterLink>
                </div>
            </div>
        </>
    )
}

export default Footer;
