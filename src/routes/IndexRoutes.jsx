import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';


const IndexRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default IndexRoutes;
