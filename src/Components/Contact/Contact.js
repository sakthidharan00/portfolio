import React from 'react'
import { Element } from 'react-scroll';
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css';

import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Element id='Contact'>
      <div className='contact'>

        <img src={require("../../Assests/contact-me.png")} alt="contact me" className='img-fluid' />

        <div className='contact_info'>

          <p><b >Name: </b> Sakthidharan</p>
          <p><b>E-mail: </b> sakthidharan00@gmail.com</p>
          <p><b>Phone.no / Whatsapp.no:</b> 8825840712</p>
          <p><b>City:</b> No:32,Manjalai street, Ramanathapuram, Puducherry 605 502.</p>
          <div className='socialMedia_info'>
            <a href='https://www.facebook.com/profile.php?id=100010213203498' target="_blank" className='fb'><FacebookIcon /></a>
            <a href='https://instagram.com/sakthi__2k?igshid=ZDdkNTZiNTM=' target="_blank" className='insta' ><InstagramIcon /></a>
            <a target="_blank" className='git'><GitHubIcon /></a>



          </div>
        </div>

      </div>


    </Element>
  )
}

export default Contact;
