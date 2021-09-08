import { useState } from 'react';
import { CheckSquare, ChevronDown, ChevronUp, Plus, Square } from 'react-feather';
import './subtasks.scss';

export default function SubTasks({ subtasksList }) {

  const [open, setMode] = useState(false);
  const [subtasks, setSubtasks] = useState(subtasksList || []);

  const updateSubtaskStatus = (index) => {
    subtasks[index].completed = !subtasks[index].completed;
    setSubtasks([...subtasks])
  }

  const newSubtask = async () => {
    subtasks.push({ item: '', completed: false });
    await setSubtasks([...subtasks]);
    let task = document.querySelectorAll('.__item_content')[(subtasks.length - 1)];
    task.focus();
  }

  const updateSubtask = async (e) => {
    console.log('updating task...', e.target.innerText)
  }

  const captureKey = (e, index) => {
    let text = e.target.innerText;
    if (e.keyCode === 8) { // backspace
      if (e.target.innerText === '') { // already empty
        // delete
        subtasks.splice(index, 1);
        setSubtasks([...subtasks])
      }
    }
    if (e.keyCode === 13 && e.shiftKey === false) { // Enter
      // update the task
      e.target.innerText = text;
      e.target.blur();
    }
  }

  return (
    <div>
      <button className={`__task_subtask_btn ${subtasks.length > 0 ? '__filled' : '__empty'} ${open && '__open'}`} onClick={() => setMode(!open)}>
        {
          subtasks.length === 0 ?
            <>
              <Plus size={16} />
              <span>Add subtask</span>
            </>
            :
            <>
              <span>
                {subtasks.length} Subtasks
              </span>
              {open ?
                <ChevronUp size={16} />
                :
                <ChevronDown size={16} />
              }
            </>
        }
      </button>

      {
        open &&
        <div className='__subtask_list'>
          {
            subtasks.length ?
              subtasks.map((task, index) => (
                <div className='__subtask_item' key={index}>
                  <button className='__item_status' onClick={() => updateSubtaskStatus(index)}>
                    {
                      task.completed ?
                        <CheckSquare size={18} />
                        :
                        <Square size={18} />
                    }
                  </button>
                  <div className={`__item_content ${task.completed && '__completed'}`} contentEditable={true} onBlur={updateSubtask} onKeyDown={(e) => captureKey(e, index)}>{task.item}</div>
                </div>
              ))
              :
              <></>
          }
          <button className='__add_subtask_btn' onClick={newSubtask}>
            <Plus size={18} />
            <span>Add subtask</span>
          </button>
        </div>
      }

    </div>
  )
}