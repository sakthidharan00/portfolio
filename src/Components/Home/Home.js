import React from 'react';
import "./Home.css";
import { Element } from 'react-scroll';
const Home = () => {
    return (
        <Element id='Home' >
            <div className=' row home'>
                <div className=' col-12 col-sm-6 home_content_left'>
                    <div className='home-info'>
                        <h1>Hi,</h1>
                        <h1>I'm Sakthidharan</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <div className='home_buttons'>
                        <button className='btn download '><a className='text-decoration-none text-white' href="https://drive.google.com/file/d/1CCt-L_wFZSoIoM2fOVMLpqIfGGMkkVh4/view?usp=share_link" target="_blank">Download CV</a></button>
                        <button className=' btn works '><a href="#Projects" className='text-decoration-none ' >My Works</a></button>

                    </div>


                </div>
                <div className=' col-12 col-sm-6 home_content_right' >
                    <img className='profile_pic' src={require("../../Assests/IMG_20210116_141405_2.JPG")} alt="Profile pic"/>

                </div>

            </div>

        </Element>
    )
}

export default Home
