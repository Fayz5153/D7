import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () => {
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/todo"

    const [todo, setTodo] = useState([])

    const getTodos =()=>{
        axios.get(url)
        .then((res)=>{
            console.log(res.data, "AXIOS")
            setTodo(res.data)
        })
    }
    const [value, setValue] = useState("")
    const postTodos = () =>{
        const data = {
            todo: value,
            city: "andijon"
        }
        axios.post(url, data)
        .then((res)=>{
            console.log(res)
            if (res.status === 201) {
                getTodos()
            }
        })
    }
    const [edit, setEdit] = useState("")
    const [id, setId] = useState(null)
    const putTodos = () =>{
        const data = {
            todo: edit
        }
        axios.put(url+`/${id}`, data)
        .then((res)=>{
            console.log(res)
            if (res.status === 200) {
                getTodos()
            }
        })
    } 
    const deleteTodos = (delId) =>{
        axios.delete(url+"/"+delId)
        .then((res)=>{
            console.log(res)
            if (res.status === 200) {
                getTodos()
            }
        })
    }
    // console.log(todo, "TODO")

    // fetch("url/id",{
    //     method:"GET, POST va PUT, DELETE",
    //     headers:{
    //         cockie:"",
    //         token:localStorage.getItem("token"),
    //         "content-type":"aplication/json,charset='UTF-8'"
    //     },
    //     body: JSON.stringify(malumot)
    // })
    // .then(respons => respons.json())
    // .then(data => console.log(data))
    // fetch(url)
    // .then(respons => respons.json())
    // .then(data => console.log(data, "FETCH"))
    useEffect(()=>{
        getTodos()
    },[])
    return ( 
        <React.Fragment>
            <div>
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={postTodos}>Post</button>
            </div> <hr />
            <div>
                <input type="text" onChange={(e)=>setId(e.target.value)} placeholder='id'/>
                <input type="text" onChange={(e)=>setEdit(e.target.value)} placeholder='edit'/>
                <button onClick={putTodos}>Put</button>
            </div>
            <div>
                {todo.map((item,index,array)=>{
                    return(
                        <p key={item.id}>
                            <label htmlFor={item.id}>
                                <input type="checkbox" id={item.id}/>
                                {item.id} // {item.todo} // {item.city}
                            </label>
                            <button onClick={()=>deleteTodos(item.id)}>Delete</button>
                        </p>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Axios;