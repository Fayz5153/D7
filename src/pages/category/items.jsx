import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { AllData } from './all';
import Img from "react-cool-img";

const Items = () => {
    let params = useParams().name
    console.log(AllData)
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/"
    const getData = () =>{
        setLoad(true)
        setData(AllData[params])
        setTimeout(() => {
            setLoad(false)
        }, 1000);
        // axios.get(url+params).then((res)=>{
        //     console.log(res)
        //     setData(res.data)
        //     if (res.status === 200) {
        //         setTimeout(() => {
        //             setLoad(false)
        //         }, 1000);
        //     }
        // })
    }
    useEffect(()=>{
        getData()
    },[params])

    return ( 
        <React.Fragment>
            {load 
                ? <div className='load'><CircularProgress size={120}/></div>
                :<div className='grid'>
                    {data.map((item)=>{
                        return(
                            <div className="card" key={item.id}>
                                {/* <img src={item.img} alt="" width={150}/> */}
                                <Img
                                    placeholder={"https://flowbite.com/docs/images/examples/image-4@2x.jpg"}
                                    src={item.img}
                                    // error={errorImage}
                                    alt="REACT COOL IMG"
                                />
                                <b>{item[params]}</b>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            }
            
        </React.Fragment>
        
     );
}
 
export default Items;