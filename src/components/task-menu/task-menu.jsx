import { useState } from "react";
import { Check, Clock, CornerUpLeft, CornerUpRight, MoreHorizontal, Pause, Trash2, X } from "react-feather";
import './task-menu.scss';

export default function TaskMenu({ status }) {

  status = status ?? 'Pending';
  const [open, setMode] = useState(false);

  let statusContent = () => {
    switch (status) {
      case 'Pending':
        return <>
          <span>{status}</span>
          <MoreHorizontal size={16} />
        </>;
      case 'Doing':
        return <>
          <span>{status}</span>
          <MoreHorizontal size={24}/>
        </>;
      case 'Paused':
        return <>
          <span>{status}</span>
          <Pause size={16} />
        </>;
      case 'Cancelled':
        return <>
          <span>{status}</span>
          <X size={16} />
        </>;
      case 'Done':
        return <>
          <span>{status}</span>
          <Check size={16} />
        </>

      default:
        break;
    }
  }

  return (
    <div className='__task_menu'>
      <button className={`__task_menu_btn ${open && '__open'} ${status === 'Doing' && '__doing'}`} onClick={() => setMode(!open)}>
        {statusContent()}
      </button>

      {
        open &&
        <div className='__task_menu_list'>
          <button disabled className={`__menu_status_btn ${status === 'Pending' && '__active'} `}>
            <MoreHorizontal size={16} />
            <span>Set to Pending</span>
          </button>
          <button className={`__menu_status_btn ${status === 'Doing' && '__active'} `}>
            <MoreHorizontal size={16} />
            <span>Set to Doing</span>
          </button>
          <button className={`__menu_status_btn ${status === 'Paused' && '__active'} `}>
            <Pause size={16} />
            <span>Set to Paused</span>
          </button>
          <button className={`__menu_status_btn ${status === 'Cancelled' && '__active'} `}>
            <X size={16} />
            <span>Set to Cancelled</span>
          </button>
          <button className={`__menu_status_btn ${status === 'Done' && '__active'} `}>
            <Check size={16} />
            <span>Set to Done</span>
          </button>
          <hr />
          <button className={`__menu_action_btn `}>
            <CornerUpLeft size={16} />
            <span>Return to Backlog</span>
          </button>
          <button className={`__menu_action_btn `}>
            <CornerUpRight size={16} />
            <span>Move to Archived</span>
          </button>
          <button className={`__menu_action_btn `}>
            <Clock size={16} />
            <span>Task History</span>
          </button>
          <button className='__menu_action_btn __delete'>
            <Trash2 size={16} />
            <span>Delete task</span>
          </button>
        </div>
      }
    </div>
  );
}