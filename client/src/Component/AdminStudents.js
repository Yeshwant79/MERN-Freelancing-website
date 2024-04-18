import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../store/auth'

const AdminStudents = () => {
    const [item, setItem] = useState([])
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()

    const { authorizationToken } = useContext(AuthContext)

    const getData = async (req, res) => {
        try {
            const data = await fetch('http://localhost:5000/api/admin/student', {
                headers: {
                    authorization: authorizationToken
                }
            })
            const res = await data.json()
            setItem(res)
            // console.log(res)
        } catch (error) {
            console.log(error)
            // alert('Fail to get Data')
            toast.error('Unable to get data')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // Hear we get single data through api

    const getSingleData = async (id) => {
        try {
            const data = await fetch(`http://localhost:5000/api/admin/student/${id}`)
            const res = await data.json()
            // console.log(res)
            setId(res._id)
            setName(res.name)
            setEmail(res.email)
            setContact(res.contact)
        } catch (error) {
            console.log(error)
            // alert('Fail to get Data')
            toast.error('Unable to get data')
        }
    }

    // Hear we get single data from direct database

    // const getSingleData = async (i) => {
    //     setId(item[i]._id)
    //     setName(item[i].name)
    //     setEmail(item[i].email)
    //     setContact(item[i].contact)
    // }

    const update = async (id) => {
        try {
            const getUpdate = { name, email, contact }
            let response = await fetch(`http://localhost:5000/api/admin/student/update/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(getUpdate),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
            const res = await response.json()
            console.log(res)
            // alert("Data updated")
            toast.success('Data updated Successfully')
            if (res.msg) {
                getData()
            }
        } catch (error) {
            console.log(error)
            // alert('Fail to update Data')
            toast.error('Unable to update data')
        }
    }
    const confirmDelele = (i) => {
        setId(i)
    }

    const deleteSingleData = async (id) => {
        try {
            let response = await fetch(`http://localhost:5000/api/admin/student/delete/${id}`, { method: "DELETE" })
            const res = await response.json()
            console.log(res)
            // alert("data deleted")
            toast.success('Data deleted Successfully')
            if (res.msg) {
                getData()
            }
        } catch (error) {
            console.log(error)
            // alert('Fail to delete Data')
            toast.error('Unable to delete Data')
        }
    }

    return (<>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((value, index) => {
                            return <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.contact}</td>
                                <td>
                                    {/* <button type='button' className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#editMyModal" onClick={getSingleData(index)} > Edit</button> */}
                                    <button type='button' className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#editMyModal" onClick={() => getSingleData(value._id)} > Edit</button>
                                    |
                                    <button type='button' className='btn btn-danger m-1' data-bs-toggle="modal" data-bs-target="#deleteMyModal" onClick={() => confirmDelele(value._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >


        <div className="modal" id="editMyModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Update</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <form className='px-1 py-2'>
                            <div className="m-1">
                                <label for="name" className="form-label">Id : {id}</label>
                            </div>
                            <div className="m-1">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="m-1">
                                <label for="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="m-1">
                                <label for="contact" className="form-label">Contact</label>
                                <input type="text" className="form-control" id="contact" value={contact} onChange={(e) => { setContact(e.target.value) }} />
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => update(id)}>Update</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>

                </div>
            </div>
        </div>

        <div className="modal" id="deleteMyModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Delete</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        Confirm to delete
                        <br />
                        <b>
                            id : {id}
                        </b>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={() => deleteSingleData(id)}>Delete</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                    </div>

                </div>
            </div>
        </div>

    </>
    )
}

export default AdminStudents
