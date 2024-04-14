import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const AdminAddServices = () => {

    const [service_name, setService_name] = useState("")
    const [description, setDescription] = useState("")
    const [uploadFile, setUploadFile] = useState([])
    const photo = useRef("")

    const addService = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('service_name', service_name)
        data.append('description', description)
        data.append('uploadFile', uploadFile)
        try {
            const dataToAdd = await fetch('http://localhost:5000/api/admin/services/post', {
                method: 'POST',
                body: data
            })
            const res = await dataToAdd.json()
            toast.success('Service added Successfully')
            console.log(res)
            setService_name("")
            setDescription("")

            // ---- we use this for make impty the input file field
            // photo.current.value = ""
            photo.current.value = ("")

        } catch (error) {
            console.log(error)
            toast.error('Unable to add Service')
        }
    }
    return (
        <>
            <form className="mx-auto w-50 m-3 p-3 border border-dark border-2" onSubmit={addService} encType='multipart/form-data'>
                <div className="mb-3">
                    <label htmlFor="serviceName" className="form-label">Service Name</label>
                    <input type="text" className="form-control" id="serviceName" value={service_name} onChange={(e) => setService_name(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discription" className="form-label">Discription</label>
                    <input type="text" className="form-control" id="discription" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3 p-0 form-check">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" ref={photo} onChange={(e) => setUploadFile(e.target.files[0])} />
                </div>
                <button type="submit" className="btn btn-primary d-flex mx-auto">Submit</button>
            </form>
        </>
    )
}

export default AdminAddServices;
