
import './css/App.css'
import Home from './pages/Home.jsx'
import Login from './pages/login.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './pages/signup';
import UploadPh from './pages/UploadPh.jsx';
import Album from './pages/Album.jsx';
import Editphoto from './pages/editphoto.jsx';
function App() {
  
  return (
   
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/uploadphoto' element={<UploadPh />} /> 
        <Route path='/ablum' element={<Album />} /> 
        <Route path='/editphoto/:id' element={<Editphoto />} /> 
      </Routes>
  )
}

export default App
