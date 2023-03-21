import React from 'react';
import { Parallax } from 'react-parallax';
import Cafe from "../../assets/cafe.jpg";


const Paralax3 = () => (
    <div className='parallax-container'>
    <Parallax className='image' blur={0} bgImage={Cafe} strength={300} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">Sur tout le site</span>
        </div>
    </Parallax>
    </div>
);

export default Paralax3;