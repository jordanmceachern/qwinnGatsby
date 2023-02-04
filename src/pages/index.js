import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Qwinn</title>
        <meta
          name='description'
          content='Britt McQuinn (qwinn) is an award-winning Canadian East Coast
          singer/songwriter. Her early musical influences of film and video game
          soundtracks have shaped the synth-pop sound that audiences know today.
          Britt identifies as queer and a mental health advocate. She captivates
          Crowds with a magnetic, warm and engaging stage presence. She&#39;s opened
          for k.d. lang during her 25th Anniversary Ingénue Tour, Milk & Bone,
          Neon Dreams, and Ria Mae, between her solo act and her dark pop duo,
          bleum. She performed for the recent World Junior Hockey Championships.
          Britt participates in songwriting camps and thrives in the co-writing
          environment. Notable past camps include Music PEI Canadian Song
          Challenge and CREATE Nordic Bridges Song Camp in Toronto. Qwinn&#39;s song
          Welcome to My Life landed a sync placement on Netflix&#39;s Ginny &
          Georgia. She has songs on several Spotify editorial playlists,
          including It&#39;s a Bop, Fresh Finds Pop, New Music Friday Canada, and
          Bangers. Qwinn has label releases on Circus Records, Kiwi Bear
          Records, and Monstercat.'
        ></meta>
        <link rel='canonical' href='https://brittanymcquinn.com' />
      </Helmet>
      <Layout />
    </div>
  );
};
