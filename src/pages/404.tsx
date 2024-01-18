import React from 'react';
import PageLayout from '../components/PageLayout';

const App = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <h1 className='mx-auto my-24'>
        <p className='text-black dark:text-white bg-white dark:bg-slate/50 text-center p-4 rounded'>
          404: Page Not Found
        </p>
      </h1>
    </PageLayout>
  )
};

export default App;