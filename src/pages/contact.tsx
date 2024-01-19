import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow self-center justify-center w-full lg:w-[940px] max-w-[940px] sm:mx-4'>
        <div className='flex flex-col text-start p-8 rounded text-slate dark:text-white bg-white/60 dark:bg-slate/50'>
          <div className='flex flex-col items-center'>
            <a className='underline hover:no-underline active:no-underline' href='mailto:brittanymcquinn@gmail.com' target='_top _blank'>
              open a draft email
            </a>
            <p className='text-center'>addressed to qwinn (brittanymcquinn@gmail.com)</p>
          </div>
          <div className='flex flex-col items-center mt-8'>
            <a className='underline hover:no-underline active:no-underline' href='mailto:glenn@soundofpop.com' target='_top _blank'>
              open a draft email
            </a>
            <p className='text-center'>addressed to qwinn's sync & publishing company,</p>
            <p className='text-center'>Sound of Pop (glenn@soundofpop.com)</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
