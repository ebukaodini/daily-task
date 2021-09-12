import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.scss';

export default function WelcomePage() {
  const ui = useSelector(state => state.ui);

  return (
    <section className={`${ui.theme}`}>
      <div className='__welcome'>
        <h1 className='hand-written'>Daily Tasks</h1>
        <Link className='__continue_link' to='/tasks' >Continue</Link>
      </div>
    </section>
  )
}