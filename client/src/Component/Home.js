import React from 'react';
import { Link } from 'react-router-dom'
import style from './Home.module.css'
// import './../index.css'
import img1 from './img/img_1.png'
import img2 from './img/ClassEqpments.png'
import img3 from './img/wof6.webp'
import img4 from './img/wof7.webp'
import img5 from './img/wof8.webp'
import img6 from './img/md05.png'
const Home = () => {
    return (
        <div className='container-fluid h-100 p-0 m-0'>

            {/* Section-1 */}
            <section className={`container-fluid col-sm-12 ${style.section_1}`}>
                <div className={`container col-sm-12`}>
                    <div className='row'>

                        <div className={`col d-flex align-items-center text-light mx-auto  ${style.section_1_left}`}>
                            <div>
                                <h2 className='my-3'>Find the right <span style={{ fontFamily: "Dancing Script, cursive" }}>Freelance</span></h2>
                                <h2 className='my-3'>service, right away</h2>

                                <div className={`align-items-center text-light ${style.section_1_1}`}>
                                    <h6>Popular:</h6>
                                    {/* <div> */}
                                    <button className='btn btn-outline-warning m-1 text-light border-light rounded-pill'>Website Design</button>
                                    <button className='btn btn-outline-warning m-1 text-light border-light rounded-pill'>wordPress</button>
                                    <button className='btn btn-outline-warning m-1 text-light border-light rounded-pill'>Logo Design</button>
                                    <button className='btn btn-outline-warning m-1 text-light border-light rounded-pill'>AI Services</button>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>

                        <div className={`col mx-auto pt-5 ${style.section_1_right}`}>
                            <img src={img1} width='90%' height='100%' alt='Section1_Photo' />
                        </div>

                    </div>
                </div>
                {/* <div className='text-center text-light w-100'>
                    <h1 className=''>Your Freelancer</h1>
                    <p className='h5'>We are always ready for your help. Just say once ! </p>
                    <p className='h5'>And make your work easyer.</p>
                </div> */}
            </section>

            {/* Section-2 */}
            <section className={`col-lg-10 container-fluid ${style.section_2}`}>
                <div className='row mx-auto'>

                    <div className={`col-md-4 mx-auto ${style.section_2_left}`}>
                        <img src={img2} alt='Section_2_Photo' width='100%' height='100%' className='img-fluid d-flex mx-auto' style={{ maxWidth: "300px" }} />
                    </div>

                    <div className={`col-md-6 ${style.section_2_right}`}>
                        <h1 className='my-3 display-2' style={{ fontWeight: "600", color: "rgb(87, 232, 80)" }}>How our team works </h1>
                        <p className='my-3'>Forget the old rules. You can have the best people. Right now. Right hear </p>
                        <Link to="/registration" className='btn text-light my-3' style={{ backgroundColor: "rgb(87, 232, 80)" }}>Get Started</Link>
                    </div>

                </div>
            </section>

            {/* Section-3 */}
            <section className={`container-fluid my-5`}>
                <div className={`col-lg-10 rounded p-4 mx-auto text-light ${style.section_3}`}>
                    <h5 style={{ color: "rgb(87, 232, 80)" }}>For Clients</h5>

                    <div className='col-4 mt-5'>
                        <h1 className='my-2'>Fing talent your way</h1>
                        <p className='my-2'>
                            Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
                        </p>
                    </div>

                    <div className='col mt-5'>
                        <div className='row container-fluid'>
                            <div className='col px-2 m-2 rounded' style={{ backgroundColor: "rgb(87, 232, 80)" }}>
                                <h3>Post a job and hire a pro</h3>
                                <p className='mt-4' style={{ fontSize: "13px" }}>Talent Marketplace <i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                            <div className='col px-2 m-2 rounded' style={{ backgroundColor: "rgb(87, 232, 80)" }}>
                                <h3>Browse and buy projects</h3>
                                <p className='mt-4' style={{ fontSize: "13px" }}>Project Catalog <i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                            <div className='col px-2 m-2 rounded' style={{ backgroundColor: "rgb(87, 232, 80)" }}>
                                <h3>Get advice from an indudstry expurt</h3>
                                <p className='mt-4' style={{ fontSize: "13px" }}>Consultation <i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Section-4 */}
            <section className={`container-fluid my-5`}>
                <div className='col-10 mx-auto'>

                    <div className='d-flex justify-content-between'>
                        <h4 className='text-bold'>Guides to help you grow</h4>
                        <Link to='/services' className='btn'><small>See more</small></Link>
                    </div>

                    <div className='row my-2'>

                        <div className='col-sm-4 px-2 py-2'>
                            <div className="card border-0">
                                <div class="card-body p-0 ">
                                    <img src={img3} width='100%' height='100%' alt='section4_photo1' />
                                </div>
                                <div class="card-footer bg-transparent p-0 border-0" style={{ fontSize: "13px", fontWeight: "bold" }}>Start a side business</div>
                            </div>
                        </div>

                        <div className='col-sm-4 px-2 py-2'>
                            <div className="card border-0">
                                <div class="card-body p-0 ">
                                    <img src={img4} width='100%' height='100%' alt='section4_photo2' />
                                </div>
                                <div class="card-footer bg-transparent p-0 border-0" style={{ fontSize: "13px", fontWeight: "bold" }}>Ecommerce Business Ideas</div>
                            </div>
                        </div>

                        <div className='col-sm-4 px-2 py-2'>
                            <div className="card border-0">
                                <div class="card-body p-0 ">
                                    <img src={img5} width='100%' height='100%' alt='section4_photo3' />
                                </div>
                                <div class="card-footer bg-transparent p-0 border-0" style={{ fontSize: "13px", fontWeight: "bold" }}>Start an online business and work from home</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* Section-5 */}
            <section className={`container-fluid ${style.section_5}`}>
                <div className='row'>

                    <div className={`col d-flex align-items-center text-light`}>
                        <div className='mx-auto'>
                            <h2 className='my-3'>Freelance services at your </h2>
                            <h2><span style={{ fontFamily: "Dancing Script, cursive" }}>Fingertips !</span></h2>
                        </div>
                    </div>

                    <div className={`col`}>
                        <img src={img6} height='250px' className='mx-auto d-flex' alt='Section1_Photo' />
                    </div>

                </div>
            </section>

        </div >
    )
}

export default Home;
