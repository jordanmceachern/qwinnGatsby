import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      {/* <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col items-center lg:w-[940px] max-w-[940px] mx-4'>
        </div>
      </div> */}
      <div>
        <div>
          <p>
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
