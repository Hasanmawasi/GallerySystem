
import './css/App.css'
import Home from './pages/Home.jsx'
import Login from './pages/login.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './pages/signup';
import UploadPh from './pages/UploadPh';

function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/uploadphoto' element={<UploadPh />} /> 
      </Routes>
   </BrowserRouter>
  )
}

export default App
