import { Link } from "react-router-dom";
import { Archive, CheckSquare, Clock } from "react-feather"
import { useSelector } from "react-redux";
import './side.scss';

export default function SideNavigation() {
  const ui = useSelector(state => state.ui);

  return (
    <div className='side_nav'>

      <Link className={`__nav_item ${ui.page === 'tasks' ? 'active' : ''}`} to='/tasks'>

        <div className='__item'>
          <CheckSquare className='__item_icon' />
          <span className='__item_title'>Tasks</span>
        </div>

        <div className='__active_indicator'></div>

      </Link>

      <Link className={`__nav_item ${ui.page === 'backlog' ? 'active' : ''}`} to='/backlog'>

        <div className='__item'>
          <Clock className='__item_icon' />
          <span className='__item_title mnm'>Backlog</span>
        </div>

        <div className='__active_indicator'></div>

      </Link>

      <Link className={`__nav_item ${ui.page === 'archive' ? 'active' : ''}`} to='/archive'>

        <div className='__item'>
          <Archive className='__item_icon' />
          <span className='__item_title'>Archive</span>
        </div>

        <div className='__active_indicator'></div>

      </Link>

    </div>
  )
}