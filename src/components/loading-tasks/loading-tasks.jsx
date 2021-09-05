import { Loader } from "react-feather";
import './loading-tasks.scss';

export default function LoadingTasks() {

  return (
    <div className='__loading_tasks'>
      <Loader className="__loading_icon" size={20} />
      <div className='__loading_text'>loading tasks...</div>
    </div>
  )
}