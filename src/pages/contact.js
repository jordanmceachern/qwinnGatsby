import React from 'react';
import '../components/css_pages/contact.css';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <div className='App'>
      <Layout />
      <div id='contactInfo'>
        <div>
          <p id='brittContact'>
            <a href='mailto:brittanymcquinn@gmail.com' target='_top'>
              General Inquiries
            </a>
          </p>
          <p>
            <a href='mailto:glenn@soundofpop.com' target='_top'>
              Sync and Publishing
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
