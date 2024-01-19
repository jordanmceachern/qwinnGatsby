import React, { useEffect, useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { Button } from '@material-tailwind/react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Subscribe = ({ location }) => {
  const formRef = useRef(null);
  const [personName, setName] = useState('');
  const [personLastName, setLastName] = useState('');
  const [personEmail, setEmail] = useState('');
  const [inputError, setInputError] = useState(false);
  const [messageSent, setMessageSent] = useState<string | boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const qwinn_subscribed = 'qwinn-subscribed';
  useEffect(() => {
    if (window) {
      const isSubscribed = window.localStorage.getItem(qwinn_subscribed);

      if (isSubscribed === 'true') {
        setSubscribed(true);
      }
    }
  }, []);

  const setEmailSubscribed = () =>
    window?.localStorage.setItem(qwinn_subscribed, 'true');

  const updateValue = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    const data = e.target.value;

    switch (inputName) {
      case 'personName':
        setName(data);
        break;
      case 'personLastName':
        setLastName(data);
        break;
      case 'personEmail':
        setEmail(data);
        break;
      default:
        break;
    }
  };

  const handleError = (err) => {
    console.error(err);
    setInputError(err);
    setIsDisabled(true);
  };

  const signup = (e) => {
    e.preventDefault();

    if (!personName || !personLastName || !personEmail) {
      return;
    }

    if (subscribed) {
      setMessageSent('You are already on our mailing list :)');
      return;
    }

    try {
      addToMailchimp(personEmail, {
        FNAME: personName,
        LNAME: personLastName,
      }) // listFields are optional if you are only capturing the email address.
        .then((data) => {
          if (data?.result === 'success') {
            setInputError(false);
            setMessageSent(data.msg);
            setEmailSubscribed();
          } else {
            handleError(data?.result);
          }
        })
        .catch((err) => handleError(err));
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <PageLayout currentPathname={location.pathname}>
      <div className='flex flex-col grow self-center justify-center w-full lg:w-[940px] max-w-[940px] sm:mx-4'>
        <div className='flex justify-center bg-white/60 dark:bg-slate/50 rounded'>
          <div className='flex flex-col items-center p-8 text-slate dark:text-white w-[300px]'>
            <p className='text-center mb-2'>
              Sign up to our mailing list to catch all the latest, including news on upcoming releases, and more!
            </p>
            <form ref={formRef} onSubmit={signup}>
              <div className='flex flex-col mx-auto'>
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='text'
                  placeholder='first name'
                  name='personName'
                  value={personName}
                  onChange={updateValue}
                  minLength={3}
                  required
                />
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='text'
                  placeholder='last name'
                  name='personLastName'
                  value={personLastName}
                  onChange={updateValue}
                  minLength={3}
                  required
                />
                <input
                  className='px-8 py-2 mb-2 rounded bg-slate/20 dark:bg-white/40 placeholder-slate dark:placeholder-white'
                  type='email'
                  placeholder='email'
                  name='personEmail'
                  value={personEmail}
                  onChange={updateValue}
                  required
                />
              </div>
              {inputError && <p className='text-red mb-2'>{`${inputError}`}</p>}
              {messageSent && <p className='mb-2'>{messageSent}</p>}
              {!inputError && !messageSent && (
                <p className='text-center text-sm mb-2'>( you can opt-out anytime )</p>
              )}
              <div className='flex justify-center'>
                <Button
                  className='dark:border dark:border-white'
                  type='submit'
                  value='subscribe'
                  disabled={isDisabled}
                >
                  Submit
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
