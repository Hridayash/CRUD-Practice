import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios"
export default function EditNote(){
    const {id} = useParams();
    const [note,setNote]  = useState()
    const navigate = useNavigate();
  


      useEffect(()=>{ 
        axios.get(`http://localhost:3000/getNote/${id}`)
        .then(result=>{console.log(result)
        setNote(result.data.note)
        
       })
        .catch(err=>console.log(err));
        
    }, [])

    function update(e){
        e.preventDefault();
        axios.put(`http://localhost:3000/editNote/${id}`, {note})
        .then(result=>{console.log(result)
            navigate('/')})
        
        .catch(err=>console.log(err));


    }

    

    return(
        <>
            <h2>Edit Your Note</h2>
            <form onSubmit={update}>
                <input type="text" value={note} onChange={(e)=>setNote(e.target.value)}/>
                <button>Update</button>

            </form>
        </>
    );

}