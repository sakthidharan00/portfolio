import React, { useState } from 'react';
import { Element } from 'react-scroll';
import "./Project.css"

const Project = () => {
    const [todo, setTodo] = useState(null);
    const [cal, setcal] = useState(null);
    const [whatsapp, setWhatsapp] = useState(null);
    const [weahther, setweather] = useState(null);


    return (
        <Element id='Projects'>
            <div className='Project_container'>
                <h1 className='project_Header'>Projects</h1>
                <div className='row row-1'>
                    <div className='col-12 col-sm-6'>

                        
                        <div id='projects_images' onMouseEnter={() => setTodo(true)} onMouseLeave={() => setTodo(false)}>
                            {todo ? <div id='projects-hovered'>
                                <h2>Todo List</h2>
                                <a className='text-muted text-decoration-none' href='https://todolist-mern-app-by-sakthi.onrender.com' target="_blank">click here to visit ...</a>
                                <h2 >MERN stack</h2>

                                <div className='tech'>
                                    <h6 className='badge text-bg-primary'>HTML</h6>
                                    <h6 className='badge text-bg-danger'>CSS</h6>
                                    <h6 className='badge text-bg-success'>React Js</h6>
                                    <h6 className='badge text-bg-info'>Bootstrap</h6>
                                    <h6 className='badge text-bg-warning'>Node Js</h6>
                                    <h6 className='badge text-bg-dark'>Express Js</h6>
                                    <h6 className='badge text-bg-success'>Mongo Db</h6>

                                </div>

                            </div> : <img id="pro" src={require("../../Assests/todoList.png")} />}

                        </div>
                    </div>



                    <div className='col-12 col-sm-6' >
                        <div id='projects_images' onMouseEnter={() => setcal(true)} onMouseLeave={() => setcal(false)}>
                            {cal ? <div id='projects-hovered'>
                                <h2>Calculator</h2>
                                <a className='text-muted text-decoration-none' href='https://calculator-mern-by-sakthi.onrender.com' target="_blank">click here to visit ...</a>
                                <h4>MERN stack</h4>

                                <div className='tech'>
                                    <h6 className='badge text-bg-primary'>HTML</h6>
                                    <h6 className='badge text-bg-danger'>CSS</h6>
                                    <h6 className='badge text-bg-success'>React Js</h6>
                                    <h6 className='badge text-bg-info'>Bootstrap</h6>
                                    <h6 className='badge text-bg-warning'>Node Js</h6>
                                    <h6 className='badge text-bg-dark'>Express Js</h6>
                                    <h6 className='badge text-bg-success'>Mongo Db</h6>

                                </div>

                            </div> : <img id="pro" src={require("../../Assests/calculator.png")} />}

                        </div>
                    </div>



                    <div className='col-12 col-sm-6'>
                        <div id='projects_images' onMouseEnter={() => setWhatsapp(true)} onMouseLeave={() => setWhatsapp(false)}>
                            {whatsapp ? <div id='projects-hovered'>
                                <h2>Whatsapp</h2>
                                <a className='text-muted text-decoration-none' href='https://whatsapp-mern-by-sakthi.onrender.com' target="_blank">click here to visit ...</a>
                                <h4>MERN stack</h4>

                                <div className='tech'>
                                    <h6 className='badge text-bg-primary'>HTML</h6>
                                    <h6 className='badge text-bg-danger'>CSS</h6>
                                    <h6 className='badge text-bg-success'>React Js</h6>
                                    <h6 className='badge text-bg-info'>Material UI</h6>
                                    <h6 className='badge text-bg-warning'>Node Js</h6>
                                    <h6 className='badge text-bg-dark'>Express Js</h6>
                                    <h6 className='badge text-bg-success'>Mongo Db</h6>

                                </div>

                            </div> : <img id="pro" src={require("../../Assests/whatsapp.png")} />}

                        </div>
                    </div>



                    <div className='col-12 col-sm-6' >
                        <div id='projects_images' onMouseEnter={() => setweather(true)} onMouseLeave={() => setweather(false)}>
                            {weahther ? <div id='projects-hovered'>
                                <h2>weather App</h2>
                                <a className='text-muted text-decoration-none' href='https://weather-app-12cn.onrender.com' target="_blank">click here to visit ...</a>
                                <h4>FrontEnd</h4>

                                <div className='tech'>
                                    <h6 className='badge text-bg-primary'>HTML</h6>
                                    <h6 className='badge text-bg-danger'>CSS</h6>
                                    <h6 className='badge text-bg-success'>React Js</h6>
                                    <h6 className='badge text-bg-info'>Bootstrap</h6>


                                </div>

                            </div> : <img id="pro" src={require("../../Assests/weather.png")} />}
                           
                        </div>

                    </div>

                </div>



            </div>

        </Element>
    )
}

export default Project;
