import React from 'react';
import '../components/css_pages/merch.css';
import Layout from '../components/layout';

const Merch = () => {
  return (
    <Layout>
      <div id='merchInfo'>
        <a
          href='https://qwinnmerch.myshopify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893515/qwinn/shopify_hxvb5t.png'
            alt='shopify logo'
          />
          shop
        </a>
      </div>
    </Layout>
  );
};

export default Merch;
