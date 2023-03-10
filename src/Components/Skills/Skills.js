import React from 'react';
import "./Skills.css";
import { Element } from 'react-scroll';
const Skills = () => {
    return (
        <Element id="Skills">
            <div className=' row skills'>

                <div className=' col-12 col-sm-6 skill-left'>
                    <img src='https://dxminds.com/wp-content/uploads/2020/09/Hire-certified-Mern-Stack-developers-India.png' />

                </div>
                <div className=' col-12 col-sm-4 skill-right'>
                    <h1>My Skills</h1>

                    <h3>C++</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-primary' role="progressbar" aria-label="Success example" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h3>React Js</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-success' role="progressbar" aria-label="Success example" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                    <h3>Bootstrap</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-danger' role="progressbar" aria-label="Success example" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h3>Express JS</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-info' role="progressbar" aria-label="Success example" style={{ width: "55%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h3>NodeJS</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-success' role="progressbar" aria-label="Success example" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>



                    <h3>Mongo DB</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-warning' role="progressbar" aria-label="Success example" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    </div>


                    <h3>Git</h3>
                    <div className='progress'>
                        <div className='progress-bar bg-secondary' role="progressbar" aria-label="Success example" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    </div>







                </div>

            </div>

        </Element>
    )
}

export default Skills
