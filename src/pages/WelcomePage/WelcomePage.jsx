import { Download } from 'react-feather';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);

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