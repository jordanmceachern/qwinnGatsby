import React from 'react';
import PageLayout from '../components/PageLayout';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      {/* <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col items-center lg:w-[940px] max-w-[940px] mx-4'>
        </div>
      </div> */}
    </PageLayout>
  )
};

export default App;