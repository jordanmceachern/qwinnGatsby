import React from 'react';
import { Link } from 'gatsby';

type NavigationProps = {
  currentRoutename: string;
}

export const Navigation = ({ currentRoutename }: NavigationProps) => {
  let routeName = '';

  switch (currentRoutename) {
    case '': routeName = 'home page'; break;
    case 'bio': routeName = 'biography'; break;
    default: routeName = currentRoutename; break;
  }

  const displayedRouteName = routeName === 'home page' ? '' : routeName;

  return (
    <div className='z-20 relative flex flex-wrap justify-self-start justify-start sm:justify-center sm:flex-nowrap shadow-black sm:shadow border-black border-b bg-white'>
      <input className='mobile-menu hidden' type='checkbox' id='mobile-menu' />
      <div className='w-full flex items-center sm:hidden'>
        <label className='w-10 h-full flex flex-col border-r border-black/20' htmlFor='mobile-menu' aria-label='toggle mobile navigation'>
          <hr className='flex flex-grow bg-black h-[2px] mt-2 mb-1 mx-2 rounded-sm' />
          <hr className='flex flex-grow bg-black h-[2px] my-1 mx-2 rounded-sm' />
          <hr className='flex flex-grow bg-black h-[2px] mt-1 mb-2 mx-2 rounded-sm' />
        </label>
        <div className='py-auto flex flex-grow justify-center'>
          <div
            aria-label={routeName}
            className={`${currentRoutename === '' ? 'h-4 w-16 ' : ''}-ml-10`}
            style={currentRoutename === '' ? {
              background:
                'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)'
            } : undefined}
          >
            <span className='uppercase'>
              {displayedRouteName}
            </span>
          </div>
        </div>
      </div>
      <nav className='max-w-3xl flex flex-col sm:flex-row w-full' aria-label='main menu'>
        <div className='nav-items relative opacity-0 sm:opacity-100 sm:mt-0 sm:flex sm:grow'>
          <div className='absolute mt-px sm:mt-0 bg-white sm:bg-transparent sm:static z-10 grow flex-col sm:z-0 sm:flex sm:flex-row flex-nowrap sm:justify-evenly md:justify-between w-full'>
            <Link
              to='/'
              className={`${currentRoutename === '' ? 'bg-blue/40 ' : ''} px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              <div
                aria-label='logo'
                className='h-4 w-16 hidden sm:inline'
                style={{
                  background:
                    'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)'
                }}
              ></div>
              <span className='inline sm:hidden'>
                HOME PAGE
              </span>
            </Link>
            <Link
              to='/information'
              className={`${currentRoutename === 'bio' ? 'bg-blue/40 ' : ''}px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              BIOGRAPHY
            </Link>
            <Link
              to='/hapkido'
              className={`${currentRoutename === 'contact' ? 'bg-blue/40 ' : ''}px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              CONTACT
            </Link>
            <Link
              to='/taekwondo'
              className={`${currentRoutename === 'lyrics' ? 'bg-blue/40 ' : ''}px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              LYRICS
            </Link>
            <Link
              to='/kickboxing'
              className={`${currentRoutename === 'subscribe' ? 'bg-blue/40 ' : ''}px-2 py-1 text-sm sm:text-base w-full sm:w-auto border-black border-b sm:border-0 flex justify-center items-center active:bg-black/30 hover:bg-black/20`}
            >
              SUBSCRIBE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navigation;