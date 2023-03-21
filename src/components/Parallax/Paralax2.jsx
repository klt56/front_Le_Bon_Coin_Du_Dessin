import React from 'react';
import { Parallax } from 'react-parallax';
import Femme from "../../assets/femme.jpg";


const Paralax2 = () => (
    <div className='parallax-container'>
    <Parallax className='image' blur={0} bgImage={Femme} strength={300} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">A petits prix</span>
        </div>
    </Parallax>
    </div>
);

export default Paralax2;