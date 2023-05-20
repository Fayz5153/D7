import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [data, setData] = useState([])
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/blog"

    const getData = ()=>{
        axios.get(url).then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return ( 
        <React.Fragment>
            <div className="blog">
                {data.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.url} alt="" className='b_img'/>
                            <h3>{item.title.substring(0, 25)}</h3>
                            <p>
                                {item.description.substring(0, 150)}
                                {item.description.length > 150 ? "..." : ""}
                            </p>
                            <Link to={`/edit/${item.id}`}>
                                {/* <img src={item.img} alt="" height={40} width={40}/> */}
                                Edit
                            </Link>
                            <button>delete</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Blog;