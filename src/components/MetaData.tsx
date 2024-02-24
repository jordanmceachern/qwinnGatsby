import React from 'react';
import { Helmet } from 'react-helmet';

const content = `Qwinn is a skilled singer, songwriter and producer from Canada's East Coast known for her catchy and heartfelt synth-pop creations. Her lyrics cover a range of themes, from the ups 
and downs of relationships with loved ones to learning to have self-compassion. She also sings about breaking free from oppressive situations and the importance of embracing oneself, especially for 
the LGBTQIA2S+ community. Her relatable words and commanding vocals have a way of captivating audiences from all corners of the world. Qwinn had the privilege of opening for k.d. lang during her 
25th Anniversary Ingénue Tour and performing at the World Junior Hockey Championships. Her music has been featured on Apple and Spotify official playlists, including It's a Bop, Fresh Finds Pop, 
As Heard on TV, New Music Friday Canada, and Bangers. Notably, she has released music under Circus Records, Kiwi Bear Records, and Monstercat labels. Additionally, Qwinn has participated in 
songwriting camps such as Create Nordic Bridges through Music Publishers Canada at Toronto's Noble Street Studios. She was also accepted into the Incubator for Creative Entrepreneurship through 
the SOCAN Foundation. Recently, Netflix featured her music on their top show Ginny & Georgia, with her bold and feisty track, Welcome to My Life. Qwinn aims to help others find their path to 
healing through the power of music. In addition to releasing music and performing, she plans to create therapeutic songwriting and production groups, events, and retreats after obtaining a 
Master of Arts in Counselling Psychotherapy. Qwinn's music gets the listener's attention, and her performances are no different. Complete with talented choreographed dancers, she provides a 
pop performance experience that's a rare treat from Atlantic Canada. But Qwinn's music is more than just entertainment; it's a beautiful form of self-expression that promotes self-acceptance 
and confidence. Her music has an impact on her followers, inspiring them to create the change they want for themselves.`;

export const MetaData = () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Qwinn</title>
    <meta
      name='description'
      content={content}
    ></meta>
    {/* <link rel="icon" href="https://res.cloudinary.com/dtweazqf2/image/upload/t_ammafavicon,q_auto,f_auto/v1694115864/AMAA_mpjsg0.gif" /> */}
    <link rel='canonical' href={process.env.SITE_URL} />
    <link href="/global.css" rel="stylesheet"></link>
  </Helmet>
);

export default MetaData;