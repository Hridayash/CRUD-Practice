//Initializing all the Packages
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const NoteModel = require("./NoteSchema")


//Initializing the App 
const app = express();

//initializing the middleware 
app.use(cors());
app.use(express.json());


//Initialize the database
//kgCv4fG3wUVH8Q6s
mongoose.connect("mongodb+srv://BackEndPractice:kgCv4fG3wUVH8Q6s@newcluster.ecvuffk.mongodb.net/?retryWrites=true&w=majority/")



//Server Logics
app.post("/createNote",(req,res) =>{
    NoteModel.create(req.body)
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err));
})

app.get("/", (req,res)=>{
    NoteModel.find({})
    .then(notes=>res.json(notes))
    .catch(err=>console.log(err));
})

app.get("/getNote/:id", (req,res)=>{
    const id =req.params.id
    NoteModel.findById({_id:id})
    .then(notes=>res.json(notes))
    .catch(err=>console.log(err));
})

app.put("/editNote/:id", (req,res)=>{
    const id =req.params.id
    NoteModel.findByIdAndUpdate({_id:id},{note:req.body.note})
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err))
})

app.delete("/deleteNote/:id", (req,res)=>{
    const id = req.params.id
    NoteModel.findByIdAndDelete({_id:id})
    .then(notes=>res.json(notes))
    .catch(err=>res.json(err));
})

//App is running on the port mentioned below
app.listen((3000), ()=>console.log("server is running on port 3000") );
 