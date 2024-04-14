import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import style from "./Admin.module.css"

const AdminPage = () => {
    return (
        <>
            <div className={`container-fluid`}>


                {/* <Outlet /> */}

                <div className={`col-12`}>
                    <div className={`row ${style.body}`}>

                        <div className={`col-sm-3 col-md-2 ${style.left}`}>

                            <div className='w-100' style={{ height: "" }}>
                                <ul className="mx-auto">
                                    <li className='my-5'> <NavLink to="/admin/students"><button type="button" className="btn btn-outline-dark w-100">User</button></NavLink></li>
                                    <li className='my-5'> <NavLink to="/admin/contacts"><button type="button" className="btn btn-outline-dark w-100">Contacts</button></NavLink></li>
                                    <li className='my-5'>
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-dark dropdown w-100" data-bs-toggle="dropdown">
                                                Services
                                            </button>
                                            <ul className="dropdown-menu p-0">
                                                <li className='m-1'><NavLink to="/admin/service/add"><button className='btn btn-outline-dark m-1'>Add Services</button></NavLink></li>
                                                <li className='m-1'><NavLink to="/admin/service/delete"><button className='btn btn-outline-dark m-1'>Delete Services</button></NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='my-5'> <NavLink to="/"><button type="button" className="btn btn-outline-dark w-100">Home</button></NavLink></li>
                                </ul>

                            </div>

                        </div>

                        <div className={`col-sm-9 col-md-10 ${style.right}`}>
                            <h3 className='text-center' style={{ fontFamily: "Dancing Script, cursive" }}>Admin Control</h3>
                            <div className={style.editor}>
                                <Outlet />
                            </div>
                        </div>
                    </div >
                </div >

            </div >
        </>
    )
}

export default AdminPage
