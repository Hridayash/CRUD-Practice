import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

export default function CreateNote(){

    const [note,setNote]  = useState()
    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        axios.post("http://localhost:3000/createNote", {note})
        .then(result=>{console.log(result)
        navigate('/')})
        .catch(err=>console.log(err));

    }
    return(
        <>
        
        <h2>Create a Note</h2>
        <form onSubmit={submit}>
                <input type="text" onChange={(e)=>setNote(e.target.value)}/>
                <button>Add</button>
                
        </form>
        </>
    );

 
}