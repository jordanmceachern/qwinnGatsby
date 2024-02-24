import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '@material-tailwind/react';
import { useForm } from '@formspree/react';

const Subscribe = ({ location }) => {
  const [inputError, setInputError] = useState(false);
  const [messageSent, setMessageSent] = useState<string | boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [formState, handleSubmit] = useForm('mgegyozl');

  const qwinn_subscribed = 'qwinn-subscribed';
  useEffect(() => {
    if (window) {
      const isSubscribed = window.localStorage.getItem(qwinn_subscribed);

      if (isSubscribed === 'true') {
        setSubscribed(true);
      }
    }
  }, []);

  const cacheEmailSubscribed = () => {
    setSubscribed(true);
    window?.localStorage.setItem(qwinn_subscribed, 'true');
  }

  const handleError = (err) => {
    console.error(err);
    setInputError(err);
    setIsDisabled(true);
  };

  const signup = (submitEvent) => {
    submitEvent.preventDefault();

    try {
      handleSubmit(submitEvent);
      cacheEmailSubscribed();
    } catch (err) {
      handleError(err);
    }
  };

  
  if (formState.errors && !inputError) {
    handleError(formState.errors);
  }
  
  if (formState.succeeded && !messageSent) {
    setMessageSent('Thank you, you are now subscribed.');
  }

  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow self-center justify-center w-full lg:w-[940px] max-w-[940px] sm:mx-4'>
        <div className='flex justify-center bg-white/60 dark:bg-slate/50 rounded'>
          <div className='flex flex-col items-center p-8 text-slate dark:text-white max-w-[400px]'>
            <p className='text-center mb-2'>
              Sign up to our mailing list to catch all the latest, including news on upcoming releases, and more!
            </p>
            <form onSubmit={signup} className='flex flex-col w-full'>
              <div className='flex flex-col'>
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='text'
                  placeholder='first name'
                  name='First name:'
                  minLength={3}
                  required
                />
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='text'
                  placeholder='last name'
                  name='Last name:'
                  minLength={3}
                  required
                />
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='email'
                  placeholder='email'
                  name='Email address:'
                  required
                />
              </div>
              {inputError && <p className='text-red mb-2 text-center'>{`${inputError}`}</p>}
              {messageSent && <p className='mb-2 text-center'>{messageSent}</p>}
              {!inputError && !messageSent && (
                <p className='text-center text-sm mb-2'>( you can opt-out anytime )</p>
              )}
              <div className='flex justify-center'>
                <Button
                  className='dark:border dark:border-white'
                  type='submit'
                  value='subscribe'
                  disabled={isDisabled || subscribed || formState.submitting}
                >
                  {formState.submitting && (<div className='h-4 w-4 mr-4'><LoadingSpinner /></div>)}Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Subscribe;
