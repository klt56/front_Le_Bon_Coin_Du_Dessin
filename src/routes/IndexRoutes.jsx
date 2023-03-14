import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';


const IndexRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default IndexRoutes;
