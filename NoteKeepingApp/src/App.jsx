import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Home from "./components/home"
import CreateNote from "./components/createNote"
import EditNote from "./components/editNote"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<CreateNote/>}></Route>
      <Route path="/edit/:id" element={<EditNote/>}></Route>

    </Routes>
    
    </BrowserRouter>
     
     
    </>
  )
}

export default App
