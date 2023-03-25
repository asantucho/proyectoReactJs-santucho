import React from 'react';
import boxLogo from '../images/BoxAsset9@330.png';
import { VscGithub } from 'react-icons/vsc';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4' id='info'>
          <p>Proyecto Final ReactJs</p>
          <p>Coderhouse - 2023</p>
          <p>María Agustina Santucho</p>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          <img src={boxLogo} alt='Box Logo' />
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4' id='social-media'>
          <a href='https://github.com/asantucho'>
            <VscGithub />
          </a>
          <a href='https://www.linkedin.com/in/mar%C3%ADa-agustina-santucho-6520b9224/'>
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
