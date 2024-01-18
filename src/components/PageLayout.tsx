import React, { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigation';
import MetaData from './MetaData';
import Footer from './Footer';

type PageLayoutProps = {
  children?: ReactNode;
  currentPathname: string;
}

const PageLayout = ({ children, currentPathname }: PageLayoutProps) => {
  const currentRoutename = currentPathname.slice(1, currentPathname.length - 1); // to remove the "/" before every route name.

  return (
    <ErrorBoundary>
      <div
        className='relative flex flex-col h-fit'
        style={{
          backgroundImage: 'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center'
        }}>
        <MetaData />
        <Navigation currentRoutename={currentRoutename} />
        <div className='main-content z-10 flex flex-col justify-start grow overflow-y-auto bg-transparent'>
          {children ? (children) : null}
        </div>
        <Footer />
      </div>
    </ErrorBoundary >
  );
};

export default PageLayout;
