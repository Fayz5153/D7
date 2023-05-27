import React, {useState, useEffect} from 'react';

function App() {
  let data = [
    {id:1, name:"Lorem ipsum dolor sit"},
    {id:2, name:"amet consectetur adipisicing elit."},
    {id:3, name:"At ducimus, laboriosam qui"},
    {id:4, name:"libero nostrum placeat odit,"},
    {id:5, name:"quasi omnis excepturi incidunt"},
    {id:6, name:"culpa enim, nisi cum."},
  ]
  const [word, setWord] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(()=>{
    if (word !== "") {
      setSearch(true)
    }
  },[word])

  // console.log(search)
  return (
    <>
      <div className="home">
        <input type="search" placeholder='Qidiruv...' onChange={(e)=>setWord(e.target.value)}/>
        {data.map((item)=>{
          if (search === false) {
            return(
              <h1 key={item.id}>{item.id} {item.name}</h1>
            )
          } else if(item.name.toLowerCase().includes(word.toLowerCase())){
            return(
              <h1 key={item.id}>{item.id} {item.name}</h1>
            )
          }else if(String(item.id).toLowerCase().includes(word.toLowerCase())){
            return(
              <h1 key={item.id}>{item.id} {item.name}</h1>
            )
          }
        })}
      </div>
    </>
  )
}

export default App
