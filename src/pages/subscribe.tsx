import React, { useEffect, useState, useRef } from 'react';
import '../components/css_pages/subscribe.css';
import PageLayout from '../components/PageLayout';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const Subscribe = () => {
  const formRef = useRef(null);
  const [personName, setName] = useState('');
  const [personLastName, setLastName] = useState('');
  const [personEmail, setEmail] = useState('');
  const [inputError, setInputError] = useState(false);
  const [messageSent, setMessageSent] = useState<string | boolean>(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [helperText, setHelperText] = useState('you can opt-out anytime');

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
      <div id='subscribeInfo'>
        <h1>
          Sign up to our mailing list to catch all the latest on upcoming
          releases and more!
        </h1>
        <div className='contact-form'>
          <form ref={formRef} onSubmit={signup}>
            <input
              type='text'
              placeholder='first name'
              name='personName'
              value={personName}
              onChange={updateValue}
              minLength={3}
              required
            />
            <input
              type='text'
              placeholder='last name'
              name='personLastName'
              value={personLastName}
              onChange={updateValue}
              minLength={3}
              required
            />
            <input
              type='email'
              placeholder='email'
              name='personEmail'
              value={personEmail}
              onChange={updateValue}
              required
            />
            {inputError && <p className='input-error'>{`${inputError}`}</p>}
            {messageSent && <p className='message-sent'>{messageSent}</p>}
            {!inputError && !messageSent && (
              <p className='message-helper'>{helperText}</p>
            )}
            <div className='submit-button-container'>
              <input type='submit' value='subscribe' disabled={isDisabled} />
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Subscribe;
