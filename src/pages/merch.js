import React from 'react';
import '../components/css_pages/merch.css';
import Layout from '../components/layout';
import shopify from '../components/shopify.png';

const Merch = () => {
  const href = 'https://qwinnmerch.myshopify.com/';
  return (
    <div className='App'>
      <Layout />
      <div id='merchInfo'>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <img src={shopify} alt='shopify logo' />
          shop
        </a>
      </div>
    </div>
  );
};

export default Merch;
