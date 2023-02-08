import React from 'react';
import { Link } from 'gatsby';
import DarkMode from './darkMode/darkMode';
import './layout.css';

const Layout = () => {
  const toggleHandler = () => {
    const navhtml = document.getElementsByClassName('mobile');
    const navArr = Array.from(navhtml);
    navArr.forEach((element) => element.classList.toggle('hideThis'));
  };
  return (
    <React.Fragment>
      <nav>
        <div className='heading'>
          <div id='hamburger' onClick={toggleHandler}>
            <hr />
            <hr />
            <hr />
          </div>
          <Link id='home' to='/'>
            <div
              className='qwinnlink'
              style={{
                background:
                  'center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893511/qwinn/qwinnlogo_emyfr2.png)',
              }}
            ></div>
          </Link>
        </div>
        <Link
          id='bio'
          className='heading mobile hideThis'
          to='/bio'
          onClick={toggleHandler}
        >
          bio
        </Link>
        <Link
          id='lyrics'
          className='heading mobile hideThis'
          to='/lyrics'
          onClick={toggleHandler}
        >
          lyrics
        </Link>
        <Link
          id='merch'
          className='heading mobile hideThis'
          to='/merch'
          onClick={toggleHandler}
        >
          merch
        </Link>
        <Link
          id='contact'
          className='heading mobile hideThis'
          to='/contact'
          onClick={toggleHandler}
        >
          contact
        </Link>
        <DarkMode />
      </nav>

      <div
        className='background'
        style={{
          background: `center / cover no-repeat url(https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675637511/qwinn/qwinn_awmtfe.jpg)`,
        }}
      ></div>

      <div id='footer'>
        <div className='links-container'>
          {[
            {
              href: 'https://music.apple.com/ca/artist/qwinn/1541048283',
              name: 'apple music',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893495/qwinn/appleMusic_qjfxem.png',
            },
            {
              href: 'https://soundcloud.com/qwinncreates',
              name: 'soundcloud',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893519/qwinn/soundcloud_h67ltj.png',
            },
            {
              href: 'https://discord.gg/tgHrxVUEJA',
              name: 'discord',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893498/qwinn/discord_rz5g84.png',
            },
            {
              href: 'https://open.spotify.com/artist/7LUgWAmGi0JiTUGtskeLd5?si=UaU6zM4XRkab4uhEG_2gCg',
              name: 'spotify',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893525/qwinn/spotify_rgagnv.png',
            },
            {
              href: 'https://www.tiktok.com/@qwinncreates?lang=en',
              name: 'tiktok',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893529/qwinn/tiktok_uoilxa.png',
            },
            {
              href: 'https://facebook.com/qwinncreates',
              name: 'facebook',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675894655/qwinn/facebook_hlfrkh.png',
            },
            {
              href: 'https://www.instagram.com/brittanymcquinn/?hl=en',
              name: 'instagram',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893504/qwinn/instagram_kxgg9b.png',
            },
            {
              href: 'https://twitter.com/brittanymcquinn',
              name: 'twitter',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893533/qwinn/twitter_mhizj5.png',
            },
            {
              href: 'https://www.youtube.com/user/BrittanyMcQuinn',
              name: 'youtube',
              src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893537/qwinn/youtube_wkykc9.png',
            },
          ].map(({ href, name, src }) => (
            <div className='links'>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <img id={name} src={src} alt={`link to ${name}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
