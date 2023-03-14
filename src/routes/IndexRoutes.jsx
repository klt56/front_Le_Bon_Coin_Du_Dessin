import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';


const IndexRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default IndexRoutes;
