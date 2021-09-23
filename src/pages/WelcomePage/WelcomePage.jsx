import { useEffect } from 'react';
import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);

  useEffect(() => {
    // A2HS
    const addBtn = document.querySelector('.__A2HS');
    addBtn.style.display = 'none';

    const a2HS = (e) => {
      console.log("Before Install Prompt", e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();

      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';

      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        e.prompt();
        // Wait for the user to respond to the prompt
        e.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          e = null;
        });
      });
    }

    window.addEventListener('beforeinstallprompt', a2HS);

    return () => {
      window.removeEventListener('beforeinstallprompt', a2HS);
    }
  }, []);

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