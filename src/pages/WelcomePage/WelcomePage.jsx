import { useEffect, useLayoutEffect } from 'react';
import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);



  useLayoutEffect(() => {

    // A2HS
    let deferredPrompt;
    // const addBtn = document.querySelector('.add-button');
    const addBtn = document.querySelector('.__A2HS');
    // addBtn.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      // addBtn.style.display = 'block';

      addBtn.addEventListener('click', (e) => {
        alert('hi')
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
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
      });
    });
  })

  return (
    <section className={`${ui.theme}`}>
      <div className='__welcome'>
        <div>
          <h1 className='hand-written'>Daily Tasks</h1>
          <Link className='__continue_link' to='/tasks' >Continue</Link>
        </div>

        <div>
          <button className='__A2HS'>
            <Download size={18} />
            <span>Add to Home Screen</span>
          </button>
        </div>
      </div>
    </section>
  )
}