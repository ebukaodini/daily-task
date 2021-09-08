import { useState } from "react"
import  './task-description.scss';

export default function TaskDescription({ description }) {

  const [editable, setEditable] = useState(false);

  const updateTaskDescription = (e) => {
    console.log(e.target.innerText);
    setEditable(false);
  }

  return (
    <div className={`__description_content ${editable && '__editing'}`} title='Double click to edit' contentEditable={editable} onDoubleClick={() => setEditable(true)} onBlur={updateTaskDescription}>
      {description}
    </div>
  )
}