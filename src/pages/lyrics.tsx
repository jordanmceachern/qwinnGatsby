import React, { useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import ViewMoreLess from '../components/ViewMoreLess';

const Lyrics = ({ location }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollToTop = () => contentRef?.current?.firstElementChild?.scrollIntoView();

  useEffect(() => {
    // for mobile use, otherwise page starts at the bottom by default
    scrollToTop()
  }, [])

  return (
    <PageLayout currentPathname={location.pathname}>
      <div ref={contentRef} className='lyrics px-4 grid grid-cols-1 gap-4 md:grid-cols-2 flex-col grow self-center w-full lg:w-[940px] max-w-[940px] sm:mx-4 overflow-y-scroll text-slate dark:text-white bg-white/60 dark:bg-slate/50'>
        <div className='pt-8 col-start-1 sm:col-end-2'>
          <ViewMoreLess index={0} title='Welcome to My Life'>
            <p>Do you wanna fight me?</p>
            <p>I’m ready</p>
            <p>I’ll test your strength</p>
            <p>Hold steady</p>
            <p>Stand on the sidelines betting</p>
            <p>Or you could just leave</p>
            <p>I’ve been through shit</p>
            <p>And I came out strong</p>
            <p>Some say that I turned out wrong,</p>
            <p>Until now I’ve been letting them</p>
            <p className='mb-2'>Have a hold on me</p>
            <p className='mb-2'>(Now I say)</p>
            <p>Welcome to my life</p>
            <p>This is who I am</p>
            <p>If I’m not what you like</p>
            <p className='mb-2'>I don’t give a damn</p>
            <p>Do you wanna test me?</p>
            <p>I dare ya</p>
            <p>Oh yeah I mean to scare ya</p>
            <p>I’ve been so nice for so long</p>
            <p>I should prepare ya for</p>
            <p>A tougher tone out of my sweet mouth</p>
            <p>She’s gone off the rails no doubt</p>
            <p className='mb-2'>You can guess where I’ve been now</p>
            <p>Welcome to my life</p>
            <p>This is who I am</p>
            <p>If I’m not what you like</p>
            <p className='mb-2'>I don’t give a damn</p>
            <p>I see them judging over there</p>
            <p>But I’m just like</p>
            <p>Welcome to my life</p>
            <p>This is who I am</p>
            <p>If I’m not what you like</p>
            <p>I don’t give a damn</p>
          </ViewMoreLess>

          <ViewMoreLess index={1} title='Already Gone'>
            <p>When you step into the light</p>
            <p>You’re never there for long</p>
            <p>Rushing to arrive but you’re already gone</p>
            <p>It may break my heart but you do what you want</p>
            <p className='mb-2'>I give all I am to you, I give a lot</p>
            <p>I’m already gone</p>
            <p>Rushing to arrive</p>
            <p className='mb-2'>But I’m already gone</p>
            <p>It doesn’t make sense</p>
            <p>Cuz you’re not honest</p>
            <p>I wanna understand</p>
            <p>But that’s not what you wanted</p>
            <p>When you think you got me </p>
            <p>I’ve played your game</p>
            <p>When I think I got you</p>
            <p className='mb-2'>You slip away</p>
            <p>Rushing to arrive but you’re already gone</p>
            <p>Rushing to arrive but I’m already gone</p>
          </ViewMoreLess>

          <ViewMoreLess index={2} title='Seven'>
            <p>The white walls</p>
            <p>The heat off your skin</p>
            <p>I feel more for you</p>
            <p className='mb-2'>Than I thought I did</p>
            <p>The ceiling fan</p>
            <p>The moan and the shh</p>
            <p>The way you look below me</p>
            <p className='mb-2'>Babe it’s so fucking good</p>
            <p>Wish I could take a picture </p>
            <p>Without hackers taking it</p>
            <p>Buy instant camera</p>
            <p className='mb-2'>Keep a record of this shit</p>
            <p>You’re so much man</p>
            <p>Imma be your bitch</p>
            <p>But now I wanna rule you</p>
            <p className='mb-2'>So come on let’s switch</p>
            <p>They say seven years will bring curse</p>
            <p className='mb-2'>If this is it, I love it, make it worse</p>
            <p>Your text tone</p>
            <p>Hits my phone</p>
            <p>And I know what it means</p>
            <p>I am still your friend but I got benefits</p>
            <p>I know what you need</p>
            <p>Cuz we are lovers</p>
            <p>Sharing a rooftop</p>
            <p>Heat bills and a car</p>
            <p>Some say that stuff makes us boring</p>
            <p>Can’t hear them, too busy exploring</p>
            <p>Your body</p>
            <p>Begging me for more</p>
            <p>But I make you wait</p>
            <p>Then give you what is yours</p>
          </ViewMoreLess>

          <ViewMoreLess index={3} title='Doc Martens'>
            <p>Don’t call me a sweetheart</p>
            <p>Cuz I’m not</p>
            <p>Dude it’s not a good look you should stop</p>
            <p>Think I’m cute but I could mess you up</p>
            <p className='mb-2'>Jk jk but you made me shop, thanks a lot</p>
            <p>Cuz it doesn’t seem like people really get me</p>
            <p>They think I like to clean up but I’m messy</p>
            <p>I’m dressing like myself so they’ll respect me</p>
            <p className='mb-2'>I’m a big bad tough bitch</p>
            <p>I feel pretty badass in these kicks (in these kicks)</p>
            <p>I am not surprised you’re into it (so into it)</p>
            <p>I got this contagious confidence (confidence)</p>
            <p className='mb-2'>Ask me how I do it, I’ll admit</p>
            <p>My doc martens</p>
            <p>Tell you who I am</p>
            <p>And that’s the way I want it</p>
            <p>The way I want it</p>
            <p>That’s the way I want it</p>
            <p>I don’t need to say a thing, you see me and you got it</p>
            <p>And you got it</p>
            <p>baby do you got it</p>
            <p>Used dress so that they’d always like me</p>
            <p>So neat and tidy</p>
            <p>But now I’m vibin’</p>
            <p>I am lookin’ like the girl who is inside me</p>
            <p className='mb-2'>In this crop top, slate jeans rolled up, and my doc martens</p>
            <p>If I’m being honest</p>
            <p>Bopping </p>
            <p>at the bar</p>
            <p>The girls are watching</p>
            <p>Ladies do you like it when I flaunt it</p>
            <p className='mb-2'>I could take you over if you wanted</p>
            <p>I’ve become who I always was</p>
            <p>What I tried to hide</p>
            <p>Now I’m showing off</p>
          </ViewMoreLess>

          <ViewMoreLess index={4} title='YEAH'>
            <p>Love and lust</p>
            <p>Are best friends</p>
            <p>They go out</p>
            <p>They stay in</p>
            <p>Ooo</p>
            <p>We sure know</p>
            <p className='mb-2'>How they roll</p>
            <p>Yeah, oh yeah</p>
            <p>oh yeah oh yeah</p>
            <p>oh yeah oh yeah</p>
            <p className='mb-2'>oh yeah oh yeah</p>
            <p>Build that trust</p>
            <p>It pays off</p>
            <p>Turns into</p>
            <p>Oh my god</p>
            <p>Oooo</p>
            <p className='mb-2'>I’m in love</p>
            <p>Take a break from your work baby</p>
            <p>Tell ‘em that you’ll be back later</p>
            <p>Take a break from your work baby</p>
            <p>Tell ‘em that you’ll be back</p>
            <p>Just try to focus after that</p>
          </ViewMoreLess>
        </div>
        <div className='col-start-1 sm:col-start-2 sm:col-end-3 sm:pt-8'>
          <ViewMoreLess index={5} title='YLTWIL'>
            <p>Hello to all my lovers</p>
            <p>Who woke up after me</p>
            <p>I did it for you babe</p>
            <p>I know you only want me cuz I’m free</p>
            <p>You love the way I leave</p>
            <p>Oh my god</p>
            <p>I’m such a tease </p>
            <p>Yeah I’m so naughty</p>
            <p>I keep your interest with my distance</p>
            <p>Don’t you want me cuz I’m free</p>
            <p className='mb-2'>You love the way I leave</p>
            <p>I could be yours but you don’t want it</p>
            <p className='mb-2'>Come on you know that it’s true, admit</p>
            <p>You only want me cuz I’m free</p>
            <p>You love the way I leave</p>
            <p>You know you think it’s hotter</p>
            <p>When I am just a treat</p>
            <p>So unattainable and craveable </p>
            <p>I’m something you can’t keep</p>
            <p>You love the way I leave</p>
            <p className='mb-2'>You love the way I leave</p>
            <p>Ooo ooo ooo</p>
            <p>Gonna lure you with mystique</p>
            <p>It’s what I do</p>
            <p>Got that personality</p>
            <p>To cut through</p>
            <p>All the guard up</p>
            <p>That you say you need</p>
            <p>Keep on talking honey cuz you can’t fool me</p>
            <p>Yeah</p>
            <p>I’m your muse</p>
            <p>Cuz I always make you think</p>
            <p>Turn your truth</p>
            <p>Into questions like can we be</p>
            <p>Together, well baby</p>
            <p>Yeah you can tell me</p>
            <p>Until then I’m gonna stay just outta your reach</p>
          </ViewMoreLess>

          <ViewMoreLess index={6} title='Congratulations'>
            <p>You said you’re sorry but I’ve got doubts</p>
            <p>when you think you know the right thing for everyone else</p>
            <p>I used to let you in without a question now</p>
            <p className='mb-2'>I'm gonna be cautious</p>
            <p>I don’t want to love you don’t know how</p>
            <p>You can’t see that you stress me out</p>
            <p>And if we’re gonna try again it’s gonna be</p>
            <p className='mb-2'>A delicate process</p>
            <p>Cuz you win the award for has hurt me the most</p>
            <p>Here is your red carpet take your trophy and go</p>
            <p>Oh you want all my focus here it is now you know</p>
            <p>When you’re around I fall apart</p>
            <p className='mb-2'>But you don’t care as long as you are the star</p>
            <p>Congratulations</p>
            <p>Congratulations</p>
            <p>Got what you wanted</p>
            <p>You became my inspiration</p>
            <p>Congratulations</p>
            <p>You’re a sensation</p>
            <p className='mb-2'>Winning when you were the only nomination</p>
            <p>I do what I can It’s not enough</p>
            <p>I can’t change you It’s not my love</p>
            <p>that’s what you need you gotta see that you’re the one</p>
            <p>that you need to hold you and</p>
            <p>I know you want to have control</p>
            <p>over me but that’s not your role</p>
            <p>Oh nothing’s gonna fix your pain but healing real slow</p>
            <p className='mb-2'>You don’t even try to</p>
            <p>I will write my own script</p>
            <p>
              With scenes I like, and not the kind you could impress your
              friends with
            </p>
            <p>I won’t disappoint you</p>
            <p>I won’t deny your peace of mind to fit into your worldview</p>
          </ViewMoreLess>

          <ViewMoreLess index={7} title='Edit My Love'>
            <p>I am myself</p>
            <p>Try to change me</p>
            <p>But I know I’m solid</p>
            <p>Don’t fit</p>
            <p>The role they gave me</p>
            <p>Cuz I want out of my own head</p>
            <p>When they’re in it</p>
            <p>Oh how did they get back inside</p>
            <p>I thought we said goodbye</p>
            <p className='mb-2'>But there they are again</p>
            <p className='mb-2'>Oh I guess I let them in</p>
            <p>As long as they’re alive</p>
            <p>They hide me</p>
            <p>You don’t fix my flaws</p>
            <p>You edit my love</p>
            <p>Cuz I would rather die</p>
            <p>Than hold this in my mind</p>
            <p>You edit my love</p>
            <p>Edit my love</p>
          </ViewMoreLess>

          <ViewMoreLess index={8} title='Puddles'>
            <p>Every way that I slice it</p>
            <p>I like it</p>
            <p>I like it</p>
            <p>I’m lookin all over</p>
            <p>I can’t seem to find it</p>
            <p>The sun went away</p>
            <p>And the clouds started crying</p>
            <p>Created a day full of puddles to lie in</p>
            <p className='mb-2'>I’ll try it ‘cause</p>
            <p>The rain seems so divine</p>
            <p>But I don’t trust it, why</p>
            <p className='mb-2'>Where’s the problem</p>
            <p>I brace myself for something bad to happen</p>
            <p>Bad to happen</p>
            <p>Why can’t I be satisfied with my satisfaction</p>
            <p className='mb-2'>My Satisfaction</p>
            <p>I need to fall out</p>
            <p>of love with tragedy</p>
            <p>To let go</p>
            <p>Of that achy fantasy</p>
            <p>When it feels like love</p>
            <p>To release and let it be</p>
          </ViewMoreLess>

          <ViewMoreLess index={9} title='Goddamn Truth'>
            <p>You can’t be here</p>
            <p>After what I put you though</p>
            <p>I’ve never hurt someone</p>
            <p>The way I that I hurt you</p>
            <p className='mb-2'>That’s the goddamn truth</p>
            <p>Friends don’t do what I did</p>
            <p>I get it</p>
            <p>Felt poison flowing from my roots,</p>
            <p className='mb-2'>I liked it, I let it</p>
            <p>You</p>
            <p>You and I</p>
            <p>Were never meant to last</p>
            <p className='mb-2'>Just to burn real bright</p>
            <p>In my head</p>
            <p>Hangs an image in a golden frame</p>
            <p>Our last scene</p>
            <p>The one we painted with my pain</p>
            <p className='mb-2'>That look on your face</p>
            <p>Friends don’t push friends past their limit</p>
            <p>I weep under a willow you show love</p>
            <p className='mb-2'>It’s too vivid</p>
            <p>You</p>
            <p>You and I</p>
            <p>Were never meant to last just</p>
            <p>To burn real bright</p>
            <p>We started as a match that</p>
            <p>Turned to light</p>
            <p>Cuz we weren’t meant to last</p>
            <p>Just to burn real bright</p>
            <p>That’s the goddamn truth</p>
          </ViewMoreLess>
        </div>
      </div>
    </PageLayout>
  )
};

export default Lyrics;
