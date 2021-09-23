import { useEffect, useRef, useState } from 'react';
import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';
import logo from '../../assets/imgs/logo.svg';

export default function WelcomePage({ deferredPrompt }) {
  const ui = useSelector(state => state.ui);

  const a2HS = (e) => {
    e.preventDefault();
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  }

  return (
    <section className={`${ui.theme}`}>
      <div className='__welcome'>
        <div>
          <img src={logo} alt="Daily Tasks Logo"width={200} />
        </div>

        <div>
          <h1 className='hand-written'>Daily Tasks</h1>
          <Link className='__continue_link' to='/tasks' >Continue</Link>
        </div>
      </div>
    </section>
  )
}