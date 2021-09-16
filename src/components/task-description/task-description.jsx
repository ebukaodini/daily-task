import { useState } from "react"
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/tasks/tasks.actions";
import './task-description.scss';

export default function TaskDescription({ task }) {

  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  const updateDescription = async (e) => {
    setEditable(false);
    let updatedTask = {...task, description: e.target.innerText}
    dispatch(updateTask(updatedTask));
  }

  const captureKey = (e) => {
    let text = e.target.innerText;

    if (e.keyCode === 8) { // backspace
      if (e.target.innerText === '') { // already empty
        e.target.title = 'Enter a task'
        e.target.focus()
      }
    }
    if (e.keyCode === 13 && e.shiftKey === false) { // Enter
      // update the task
      e.target.innerText = text;
      e.target.blur();
    }
  }

  return (
    <div className={`__description_content ${editable && '__editing'}`} title='Double click to edit' suppressContentEditableWarning contentEditable={editable} onDoubleClick={() => setEditable(true)} onKeyDown={captureKey} onBlur={updateDescription} placeholder='Enter a task'>
      {task.description}
    </div>
  )
}