import { Link } from 'react-router-dom';
import './style.scss';

export default function WelcomePage() {
  return (
    <div className='welcomepage'>
      <div>Daily Tasks</div>
      <Link to='/tasks' className=''>Continue</Link>
    </div>
  )
}