import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
import NotFound from '../pages/NotFound';
import NewArt from '../pages/NewArt';
import Test1$ from '../pages/Test1$';
import SignIn from '../components/User/Forms/SignIn';
import SignUp from '../components/User/Forms/SignUp';



const IndexRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/signup" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/new-art" element={<NewArt />} />
             <Route path="sign_in1" element={<SignIn />} />
          <Route path="sign_up1" element={<SignUp />} />
             <Route path="/test1$" element={<Test1$ />} />



             <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default IndexRoutes;
