import React from 'react';
import { Link } from 'gatsby';
import DarkMode from './darkMode/darkMode';
import './layout.css';
import appleMusic from './appleMusic.png';
import soundCloud from './soundCloud.png';
import discord from './discord.png';
import spotify from './spotify.png';
import tiktok from './tiktok.png';
import youtube from './youtube.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import logo from './qwinnlogo.png';

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
                background: `center / cover no-repeat url(${logo})`,
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
              src: appleMusic,
            },
            {
              href: 'https://soundcloud.com/qwinncreates',
              name: 'soundcloud',
              src: soundCloud,
            },
            {
              href: 'https://discord.gg/tgHrxVUEJA',
              name: 'discord',
              src: discord,
            },
            {
              href: 'https://open.spotify.com/artist/7LUgWAmGi0JiTUGtskeLd5?si=UaU6zM4XRkab4uhEG_2gCg',
              name: 'spotify',
              src: spotify,
            },
            {
              href: 'https://www.tiktok.com/@qwinncreates?lang=en',
              name: 'tiktok',
              src: tiktok,
            },
            {
              href: 'https://facebook.com/qwinncreates',
              name: 'facebook',
              src: facebook,
            },
            {
              href: 'https://www.instagram.com/brittanymcquinn/?hl=en',
              name: 'instagram',
              src: instagram,
            },
            {
              href: 'https://twitter.com/brittanymcquinn',
              name: 'twitter',
              src: twitter,
            },
            {
              href: 'https://www.youtube.com/user/BrittanyMcQuinn',
              name: 'youtube',
              src: youtube,
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
