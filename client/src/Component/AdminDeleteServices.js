import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../store/auth'
// import style from "./AdminDeleteServices.module.css"


const AdminDeleteServices = () => {
    const [item, setItem] = useState([])
    const [id, setId] = useState("")

    const { authorizationToken } = useContext(AuthContext)

    const getData = async (req, res) => {
        try {
            const data = await fetch('http://localhost:5000/api/data/service')
            const res = await data.json()
            setItem(res)
        } catch (error) {
            console.log(error)
            toast.error('Unable to get Data')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const cunfirmDelete = async (id) => {
        setId(id)
    }

    const deleteData = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/services/delete/${id}`, {
                headers: {
                    authorization: authorizationToken
                },
                method: "DELETE"
            })
            const res = await response.json()
            console.log(res)
            // alert("data deleted")
            toast.success('Data deleted Successfully')
            getData()
        } catch (error) {
            console.log(error)
            // alert('Fail to delete Data')
            toast.error('Unable to delete Data')
        }
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Service Name</th>
                        <th>Discription</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((value, index) => {
                            return <tr key={value._id}>
                                <td>{index + 1}</td>
                                <td>{value.service_name}</td>
                                <td>{value.description}</td>
                                <td>
                                    <img src={`http://localhost:5000/assets/${value.image}`} alt='Service_photo' width="70px" />
                                </td>
                                <td><button className='btn btn-danger my-2' data-bs-toggle="modal" data-bs-target="#deleteMyModal" onClick={() => cunfirmDelete(value._id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <div className="modal" id="deleteMyModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 class="modal-title">Delete</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            Conform to delete
                            <br />
                            <b>
                                id : {id}
                            </b>
                        </div>

                        <div className="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal" onClick={() => deleteData(id)}>Delete</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDeleteServices;
