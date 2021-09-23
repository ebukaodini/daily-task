import { useEffect, useRef, useState } from 'react';
import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);

  const [hasEvent, setHasEvent] = useState(false);
  let deferredPrompt;

  useEffect(() => {
    // A2HS
    const setA2HSEvent = (e) => {
      console.log("Before Install Prompt", e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      if (!hasEvent) {
        deferredPrompt = e;
        setHasEvent(true);
      }
    }

    window.addEventListener('beforeinstallprompt', setA2HSEvent);
    return () => {
      window.removeEventListener('beforeinstallprompt', setA2HSEvent);
    }
  }, []);

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
          <h1 className='hand-written'>Daily Tasks</h1>
          <Link className='__continue_link' to='/tasks' >Continue</Link>
        </div>

        <div>
          <button
            onClick={a2HS}
            className='__A2HS'>
            <Download size={18} />
            <span>Add to Home Screen</span>
          </button>
        </div>
      </div>
    </section>
  )
}