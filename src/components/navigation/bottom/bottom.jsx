import { Link } from "react-router-dom";
import { Archive, CheckSquare, Clock } from "react-feather"
import { useSelector } from "react-redux";
import './bottom.scss';

export default function BottomNavigation() {
  const ui = useSelector(state => state.ui);

  return (
    <div className='bottom_nav'>

      <Link className={`__nav_item ${ui.page === 'backlog' ? 'active' : ''}`} to='/backlog'>

        <div className='__active_indicator'></div>

        <div className='__item'>
          <Clock className='__item_icon' />
          <span className='__item_title mnm'>Backlog</span>
        </div>

      </Link>

      <Link className={`__nav_item ${ui.page === 'tasks' ? 'active' : ''}`} to='/tasks'>

        <div className='__active_indicator'></div>

        <div className='__item'>
          <CheckSquare className='__item_icon' />
          <span className='__item_title'>Tasks</span>
        </div>

      </Link>

      <Link className={`__nav_item ${ui.page === 'archive' ? 'active' : ''}`} to='/archive'>

        <div className='__active_indicator'></div>

        <div className='__item'>
          <Archive className='__item_icon' />
          <span className='__item_title'>Archive</span>
        </div>

      </Link>

    </div>
  )
}