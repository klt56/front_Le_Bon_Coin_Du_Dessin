import Footer from '../components/Footer'
import Tinder from '../components/Card/TinderCard';
import Paralax from '../components/Parallax/Paralax';
import Paralax2 from '../components/Parallax/Paralax2';
import Paralax3 from '../components/Parallax/Paralax3';
import Text from '../components/Parallax/Text';
import Text2 from '../components/Parallax/Text2';
import Text3 from '../components/Parallax/Text3';


const Home = () => {
    return (
    <div>
    <Paralax />
    <Text/>
    <Paralax2 />
    <Text2/>
    <Paralax3 />
    <Text3/>
    <Tinder />
    <Footer/>
        </div>
    );
};

export default Home;