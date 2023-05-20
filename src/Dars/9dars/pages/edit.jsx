import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    let params = useParams()
    let navigate = useNavigate()
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let url1 = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/blog"

    const putData = () =>{
        const data = {
            url:url,
            title:title,
            description:description
        }
        axios.put(url1+`/${params.id}`, data)
        .then((res)=>{
            console.log(res)
            if (res.status === 200) {
                navigate("/blog")
            }
        })
    }

    return ( 
        <React.Fragment>
            <div className="home">
                <div className="form">
                    <input type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    <input type="text" placeholder='img url' onChange={(e)=>setUrl(e.target.value)} value={url} />
                    <textarea placeholder='description' onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
                    <button onClick={putData}>Edit</button>
                </div>
                <button className='back_btn' onClick={()=>navigate("/blog")}>&laquo;</button>
            </div>
        </React.Fragment>
     );
}
 
export default Edit;