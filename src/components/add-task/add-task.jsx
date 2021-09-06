import { Plus } from "react-feather";
import './add-task.scss';

export default function AddTask({ addHandler }) {

  addHandler = addHandler || (() => { alert('No Handler') });

  return (
    <div className='__add_task_btn'>
      <button className='__btn' onClick={addHandler}>
        <Plus size={20} />
        <span>Add a task</span>
      </button>
    </div>
  );
}