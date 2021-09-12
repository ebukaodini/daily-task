import { useState } from "react"
import './task-description.scss';

export default function TaskDescription({ description }) {

  const [editable, setEditable] = useState(false);

  const updateTaskDescription = (e) => {
    console.log('updating task...', e.target.innerText);
    setEditable(false);
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
    <div className={`__description_content ${editable && '__editing'}`} title='Double click to edit' suppressContentEditableWarning contentEditable={editable} onDoubleClick={() => setEditable(true)} onKeyDown={captureKey} onBlur={updateTaskDescription} placeholder='Enter a task'>
      {description}
    </div>
  )
}