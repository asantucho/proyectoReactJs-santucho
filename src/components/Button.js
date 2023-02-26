import React from 'react';

const Button = ({ text, manageClick }) => {
  return (
    <button className='count-button' onClick={manageClick}>
      {text}
    </button>
  );
};

export default Button;
