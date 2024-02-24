import React from 'react';
import PageLayout from '../components/PageLayout';

const Bio = ({ location }) => {
  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow self-center justify-center w-full lg:w-[940px] max-w-[940px] sm:mx-4'>
        <div className='overflow-y-scroll p-4 sm:p-8 rounded text-slate dark:text-white bg-white/60 dark:bg-slate/50'>
          <p className='mb-2'>
            Qwinn is a skilled singer, songwriter and producer from Canada's East Coast known for her catchy and heartfelt synth-pop creations.
            Her lyrics cover a range of themes, from the ups and downs of relationships with loved ones to learning to have self-compassion.
            She also sings about breaking free from oppressive situations and the importance of embracing oneself, especially for the LGBTQIA2S+ community.
            Her relatable words and commanding vocals have a way of captivating audiences from all corners of the world.
          </p>
          <p className='mb-2'>
            Qwinn had the privilege of opening for k.d. lang during her 25th Anniversary Ingénue Tour and performing at the World Junior Hockey Championships.
            Her music has been featured on Apple and Spotify official playlists, including "It's a Bop", "Fresh Finds Pop", "As Heard on TV", "New Music Friday Canada",
            and "Bangers". Notably, she has released music under Circus Records, Kiwi Bear Records, and Monstercat labels. Additionally, Qwinn has participated in
            songwriting camps such as "Create Nordic Bridges" through Music Publishers Canada, at Toronto's Noble Street Studios. She was also accepted into the
            "Incubator for Creative Entrepreneurship" through the SOCAN Foundation. Recently, Netflix featured her music on their top show Ginny & Georgia, with
            her bold and feisty track "Welcome to My Life".
          </p>
          <p className='mb-2'>
            Qwinn aims to help others find their path to healing through the power of music. In addition to releasing music and performing, she plans to create
            therapeutic songwriting and production groups, events, and retreats after obtaining a Master of Arts in Counselling Psychotherapy.
          </p>
          <p className='mb-2'>
            Qwinn's music gets the listener's attention, and her performances are no different. Complete with talented choreographed dancers, she provides a
            pop performance experience that's a rare treat from Atlantic Canada. But Qwinn's music is more than just entertainment; it's a beautiful form of
            self-expression that promotes self-acceptance and confidence. Her music has an impact on her followers, inspiring them to create the change they
            want for themselves.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Bio;
