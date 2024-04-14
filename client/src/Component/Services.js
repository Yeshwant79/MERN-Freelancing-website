import React, { useEffect, useState } from 'react'
import style from "./Service.module.css"
import Nav from './Nav'
import img1 from './img/forSupport.jpg'
import Footer from './Footer';
import { toast } from 'react-toastify';

const Services = () => {

    const data = [
        { id: "1", name: "Development & IT", points: "4.85/5", likes: "1853 skills" },
        { id: "2", name: "AI Services", points: "4.8/5", likes: "294 skills" },
        { id: "3", name: "Design & Creative", points: "3.0/5", likes: "453 skills" },
        { id: "4", name: "Sales & Marketing", points: "2.9/5", likes: "753 skills" },
        { id: "5", name: "Writing & Translation", points: "1.9/5", likes: "1253 skills" },
        { id: "6", name: "Admin & Customer Support", points: "2.8/5", likes: "753 skills" },
        { id: "7", name: "Finance & Accounting", points: "4.3/5", likes: "335 skills" },
        { id: "8", name: "Engineering & Architecture", points: "4.8/5", likes: "153 skills" },
    ]
    const [item, setItem] = useState([])

    const getData = async () => {
        try {
            const data = await fetch('http://localhost:5000/api/data/service')
            const res = await data.json()
            setItem(res)
            // console.log(res)
        } catch (error) {
            console.log(error)
            // alert('Fail to get Data')
            toast.error('Unable to get data ')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className={`container-fluid ${style.body}`}>

                <Nav />

                <div className='py-5 text-center'><h1 style={{ color: "rgb(87, 232, 80)" }}>At Your Service</h1></div>

                <div className={`col-12 ${style.main}`}>
                    {
                        item.map((value) => {
                            return <div className={`col-sm-3 ${style.box}`} key={value._id}>
                                <div className={style.left}>
                                    <img src={`http://localhost:5000/assets/${value.image}`} alt='service_photo' height="60px" />
                                </div>
                                <div className={style.right}><h5>{value.service_name}</h5> <p style={{ fontSize: "small" }}>{value.description}</p></div>
                            </div>
                        })
                    }
                </div>

                <div className='container-fluid'>

                    <div className='col-12 border my-5'>
                        <div className='row'>
                            <div className='col-4'>
                                <img src={img1} alt="contactSupport" width="100%" height="200px" />
                            </div>
                            <div className='col-8 align-items-center d-flex'>
                                <div>
                                    <h2 style={{ color: "rgb(87, 232, 80)" }}><i class="fa-solid fa-comments"></i> 24/7 Support</h2>
                                    <p>Message us anytime by email or live chat. Our Happiness Team is always here to help you succeed.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 my-3'>
                        <h3>Brouse talent by category</h3>
                        <p style={{ fontSize: "small" }}>
                            Looking for work ?
                        </p>
                    </div>

                    <div className='col-12 my-2 d-flex flex-wrap justify-content-around'>
                        {
                            data.map((value) => {
                                return <div key={value.id} className='bg-light m-4 p-3 w-25 rounded' style={{ border: "1px solid rgb(87, 232, 80) " }}>
                                    <div className='col'>
                                        <h6 className='my-3'>{value.name}</h6>
                                    </div>
                                    <div className='col my-2'>
                                        <div className='row'>
                                            <div className='col-6'>{value.points}</div>
                                            <div className='col-6'>{value.likes}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div >
            <Footer />
        </>
    )
}

export default Services;
