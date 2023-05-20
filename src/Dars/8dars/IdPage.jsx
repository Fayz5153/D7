import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Idpage = () => {
    let params = useParams()
    console.log(params)
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/todo"

    const [todo, setTodo] = useState(undefined)

    const getTodos =()=>{
        axios.get(url+"/"+params.id)
        .then((res)=>{
            console.log(res.data, "AXIOS")
            setTodo(res.data)
        })
    }
    useEffect(()=>{
        getTodos()
    },[])
    console.log(todo)
    return ( 
        <React.Fragment>
            <h1>Idpage = {params.id}, {todo?.city} va {todo?.todo}</h1>
        </React.Fragment>
     );
}

export default Idpage;