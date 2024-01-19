import React from 'react';

export const Footer = () => (
  <div className='z-20 bg-white dark:bg-slate shadow shadow-slate w-full py-2 flex justify-center'>
    <div className='w-full flex flex-wrap justify-center items-center max-w-3xl mx-6 sm:mx-0'>
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
        {
          href: 'https://qwinnmerch.myshopify.com/',
          name: 'shopify',
          src: 'https://res.cloudinary.com/dtweazqf2/image/upload/q_auto,f_auto/v1675893515/qwinn/shopify_hxvb5t.png',
        },
      ].map(({ href, name, src }) => (
        <div className='w-10 h-10 m-2'>
          <a href={href} target='_blank' rel='noopener noreferrer'>
            <img id={name} src={src} alt={`link to ${name}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Footer;