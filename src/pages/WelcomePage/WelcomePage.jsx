import { useEffect } from 'react';
import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);

  useEffect(() => {
    const onScroll = (event) => console.log("Before Install Prompt", event);

    window.addEventListener('beforeinstallprompt', onScroll);
    // window.addEventListener('mousemove', onScroll);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', onScroll);
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