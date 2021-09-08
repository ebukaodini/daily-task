import { MoreHorizontal } from "react-feather";
import SubTasks from "../subtasks/subtasks";
import TaskDescription from "../task-description/task-description";
import TaskTag from "../task-tag/task-tag";
import './task.scss';

export default function Task() {

  return (
    <div className='__task'>

      <div className='__task_tags'>
        <TaskTag color='EF5849' description='Important' />
        <TaskTag color='B3BAC4' description='No tag' />
        <TaskTag color='324662' description='Important' />
        <TaskTag color='AF7C2F' description='Buy food for pascal' />
        <TaskTag color='324662' description='Important' />
        <TaskTag color='AF7C2F' description='Buy food for pascal' />
        <TaskTag color='B3BAC4' description='No tag' />
        <button title='Manage Tags' className='__manage_tags_btn'>
          <MoreHorizontal strokeWidth={3} />
        </button>
      </div>

      <div className='__task_description'>
        <TaskDescription description='The JBOD circuit is down, generate the auxillary application so we can calculate the JBOD interface!'/>
      </div>

      <div className='__task_actions'>
        <SubTasks subtasksList={[{item:'Use the neural RAM matrix, then you can parse the open-source array!',completed: true}, {item:'Try to program the AI panel, maybe it will back up the haptic capacitor!',completed: false}]} />
      </div>

    </div>
  )
}
