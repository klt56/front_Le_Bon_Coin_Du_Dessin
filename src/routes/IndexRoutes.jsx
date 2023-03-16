import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
import NotFound from '../pages/NotFound';
import NewArt from '../pages/NewArt';
import Navbar from '../components/Navbar';


const IndexRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/signup" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/new-art" element={<NewArt />} />
             <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default IndexRoutes;
