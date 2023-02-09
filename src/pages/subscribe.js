import React from 'react';
import '../components/css_pages/subscribe.css';
import Layout from '../components/layout';

const Subscribe = () => {
  return (
    <div className='App'>
      <Layout />
      <div id='subscribeInfo'>
        <a
          href='https://qwinnmerch.myshopify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          subscribe
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
