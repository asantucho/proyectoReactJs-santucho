import React from 'react';
import TBBLogo from '../images/LogoAsset4@330.png';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <h2>About Us</h2>
      <p className='about-us-paragraph'>
        We are a family-owned company in the cosmetic industry, that decided to
        build their own commerce to provide our clients with more and better
        information about the products they are consuming, the benefits and
        downsides in the short, medium and long term, and all the production
        process to bring these products to you.
      </p>
      <p className='about-us-paragraph'>
        Our team of experts will be happy to help you choosing the option that
        best meets your needs, so you should feel free to reach out whenever. We
        are here for you.
      </p>
      <p className='about-us-paragraph'>
        Thanks for choosing us. Your trust means everything for us.
      </p>
      <p className='about-us-paragraph'>Kindly,</p>
      <img src={TBBLogo} alt='The Beauty Box' />
    </div>
  );
};

export default AboutUs;
