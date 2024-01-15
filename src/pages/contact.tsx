import React from 'react';
import '../components/css_pages/contact.css';
import PageLayout from '../components/PageLayout';

const Contact = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
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
    </PageLayout>
  );
};

export default Contact;
