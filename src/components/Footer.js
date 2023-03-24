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
          <VscGithub />
          <BsLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
