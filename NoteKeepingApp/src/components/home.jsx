import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css"

export default function Home(){
    const[notes,setNote] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000")
        .then(result=>setNote(result.data))
        .catch(err=>console.log(err));
    },[])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/deleteNote/${id}`)
            .then(res => {
                console.log(res);
                setNote(prevNote=> prevNote.filter(note=> note._id !== id))
            })
            .catch(err => console.log(err));
    }
    


    return(
        <>
        <h1>This is home</h1>
        <Link to="/create"><button>ADD</button></Link>
        {/* <div className="card">
            {notes.map((note,index)=>(<h3 key={index}>{note.note}</h3>))}
            <Link to="/edit"><button>Edit</button></Link>
            <button>Delete</button>
            

        </div> */}
        <div className="card-container">
  {notes.map((note, index) => (
    <div className="card" key={index}>
      <h3>{note.note}</h3>
      <Link to={`/edit/${note._id}`}><button>Edit</button></Link>
      <button onClick={(e)=>{handleDelete(note._id)}}>Delete</button>
    </div>
  ))}
</div>

        </>
    );

}