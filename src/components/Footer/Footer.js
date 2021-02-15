import React from 'react';
import { Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeDate';

import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyrght'>
          Designed and Developer by{' '}
          <a href='/' target='_blank'>
            David De Castro
          </a>
          <br />
          Clone idea from{' '}
          <a
            href='https://themeforest.net/item/simone-personal-portfolio-template/28476751'
            target='_blank'
          >
            Travonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
