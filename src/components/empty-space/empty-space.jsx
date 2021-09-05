import { Inbox, Plus } from 'react-feather';
import './empty-space.scss';

/**
 * a component to render empty spaces
 * @param {String} item the name of the page items
 * @param {Boolean} canAdd include add button
 * @param {String} btnTitle the button title
 * @param {Function} addHandler the function to handle the onClick event
 * @returns 
 */
export default function EmptySpace({ item, canAdd, btnTitle, addHandler }) {

  canAdd = canAdd || false;
  addHandler = canAdd && addHandler ? addHandler : () => { alert('No Handler') }

  return (
    <div class='__empty_space'>

      <Inbox className='__space_icon' size={100} strokeWidth={1} />

      <div className='__space_title'>You do not have any {item}{canAdd && ' added'}</div>

      {canAdd &&
        <button className='__add_btn' onClick={addHandler}>
          <Plus size={20} />
          <span>{btnTitle}</span>
        </button>
      }

    </div>
  )
}