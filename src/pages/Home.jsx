import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tinder from '../components/Card/TinderCard';
import Parallax from '../components/Parallax';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Parallax />
            <Tinder />
            <Footer/>
        </div>
    );
};

export default Home;