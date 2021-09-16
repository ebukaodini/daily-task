import { useState } from "react";
import TaskDescription from "../task-description/task-description";
import TaskTag from "../task-tag/task-tag";
import { Check, Clock, CornerUpRight, MoreHorizontal, Pause, Trash2, X, CheckSquare, ChevronDown, ChevronUp, Plus, Square } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../store/tasks/tasks.actions";
import { Board } from "../../utils/constants/board";
import { TaskStatus } from "../../utils/constants/task-status";
import './task.scss';
import './task-menu.scss';
import './subtasks.scss';
import ManageTags from "../manage-tags/manage-tags";
import { toggleManageTagsModal } from "../../store/ui/ui.slice";

export default function Task({ task }) {

  const dispatch = useDispatch();

  const ui = useSelector(state => state.ui);

  // task menu
  const [menuOpen, setMenuMode] = useState(false);

  let statusContent = () => {
    switch (task.status) {
      case 'Pending':
        return <>
          <span>{task.status}</span>
          <MoreHorizontal size={16} />
        </>;
      case 'Doing':
        return <>
          <span>{task.status}</span>
          <MoreHorizontal size={24} />
        </>;
      case 'Paused':
        return <>
          <span>{task.status}</span>
          <Pause size={16} />
        </>;
      case 'Cancelled':
        return <>
          <span>{task.status}</span>
          <X size={16} />
        </>;
      case 'Done':
        return <>
          <span>{task.status}</span>
          <Check size={16} />
        </>

      default:
        break;
    }
  }

  const updateStatus = async (status) => {
    // event for this action
    let event = {
      timestamp: new Date().toUTCString(),
      event: status,
    }
    let updatedTask = { ...task, status, history: [...task.history, event] }
    dispatch(updateTask(updatedTask));
  }

  const updateBoard = async (board) => {
    let updatedTask = { ...task, board }
    dispatch(updateTask(updatedTask));
  }

  const removeTask = async () => {
    dispatch(deleteTask(task));
  }

  // task subtasks

  const [subtasksOpen, setSubtasksMode] = useState(false);

  const newSubtask = () => {
    let updatedTask = { ...task, subtasks: [...task.subtasks, { item: '', completed: false }] }
    dispatch(updateTask(updatedTask));
    setTimeout(() => {
      let subtasksLen = document.querySelectorAll('.__item_content').length;
      let subtask = document.querySelectorAll('.__item_content')[(subtasksLen - 1)];
      subtask.focus();
    }, 500);
  }

  const updateSubtaskStatus = (index) => {
    let subtasks = new Array(...task.subtasks)
    let subtask = subtasks[index];
    subtasks[index] = { ...subtask, completed: !subtask.completed };
    let updatedTask = { ...task, subtasks: subtasks }
    dispatch(updateTask(updatedTask));
  }

  const updateSubtask = (e, index) => {
    let subtasks = new Array(...task.subtasks)
    let subtask = subtasks[index];
    subtasks[index] = { ...subtask, item: e.target.innerText };
    let updatedTask = { ...task, subtasks: subtasks }
    dispatch(updateTask(updatedTask));
  }

  const captureKey = (e, index) => {
    let text = e.target.innerText;
    if (e.keyCode === 8) { // backspace
      if (e.target.innerText === '') { // already empty
        // delete
        let updatedSubtasks = [...task.subtasks];
        updatedSubtasks.splice(index, 1);
        let updatedTask = { ...task, subtasks: updatedSubtasks }
        dispatch(updateTask(updatedTask));
      }
    }
    if (e.keyCode === 13 && e.shiftKey === false) { // Enter
      // update the task
      e.target.innerText = text;
      e.target.blur();
    }
  }

  return (
    <div className='__task'>

      <div className='__task_tags'>
        {
          task.tags.map((tag, index) => (
            <TaskTag key={index} color={tag.colorCode} description={tag.description} />
          ))
        }
        <button title='Manage Tags'
          onClick={() => { dispatch(toggleManageTagsModal()) }}
          className='__manage_tags_btn'>
          <MoreHorizontal strokeWidth={3} />
        </button>
      </div>

      {
        ui.openManageTagsModal && <ManageTags task={task} />
      }

      <div className='__task_description'>
        <TaskDescription task={task} />
      </div>

      <div className='__task_action_btns'>
        <button className={`__task_subtask_btn ${task.subtasks.length > 0 ? '__filled' : '__empty'} ${subtasksOpen && '__open'}`} onClick={() => { setMenuMode(false); setSubtasksMode(!subtasksOpen) }}>
          {
            task.subtasks.length === 0 ?
              <>
                <Plus size={16} />
                <span>Add subtask</span>
              </>
              :
              <>
                <span>
                  {task.subtasks.length} {task.subtasks.length > 1 ? 'Subtasks' : 'Subtask'}
                </span>
                {subtasksOpen ?
                  <ChevronUp size={16} />
                  :
                  <ChevronDown size={16} />
                }
              </>
          }
        </button>
        <button className={`__task_menu_btn ${menuOpen && '__open'} ${task.status === 'Doing' && '__doing'}`} onClick={() => { setSubtasksMode(false); setMenuMode(!menuOpen) }}>
          {statusContent()}
        </button>
      </div>

      {/* Task Menu */}
      <div className='__task_menu'>
        {
          menuOpen &&
          <div className='__task_menu_list'>
            {
              task.board === Board.tasks &&
              <>
                <button
                  onClick={() => updateStatus(TaskStatus.doing)}
                  className={`__menu_status_btn ${task.status === 'Doing' && '__active'} `}>
                  <MoreHorizontal size={16} />
                  <span>Set to Doing</span>
                </button>
                <button
                  onClick={() => updateStatus(TaskStatus.paused)}
                  className={`__menu_status_btn ${task.status === 'Paused' && '__active'} `}>
                  <Pause size={16} />
                  <span>Set to Paused</span>
                </button>

                <button
                  onClick={() => updateStatus(TaskStatus.cancelled)}
                  className={`__menu_status_btn ${task.status === 'Cancelled' && '__active'} `}>
                  <X size={16} />
                  <span>Set to Cancelled</span>
                </button>
                <button
                  onClick={() => updateStatus(TaskStatus.done)}
                  className={`__menu_status_btn ${task.status === 'Done' && '__active'} `}>
                  <Check size={16} />
                  <span>Set to Done</span>
                </button>
                <hr />
              </>
            }
            {
              task.board !== Board.tasks &&
              <button
                onClick={() => updateBoard(Board.tasks)}
                className={`__menu_action_btn `}>
                <CornerUpRight size={16} />
                <span>Move to Tasks</span>
              </button>
            }
            {
              task.board !== Board.backlog &&
              <button
                onClick={() => updateBoard(Board.backlog)}
                className={`__menu_action_btn `}>
                <CornerUpRight size={16} />
                <span>Move to Backlog</span>
              </button>
            }
            {
              task.board !== Board.archive &&
              <button
                onClick={() => updateBoard(Board.archive)}
                className={`__menu_action_btn `}>
                <CornerUpRight size={16} />
                <span>Move to Archived</span>
              </button>
            }
            {/* <button className={`__menu_action_btn `}>
              <Clock size={16} />
              <span>Task History</span>
            </button> */}
            <button
              onClick={() => removeTask()}
              className='__menu_action_btn __delete'>
              <Trash2 size={16} />
              <span>Delete task</span>
            </button>
          </div>
        }
      </div>

      {/* Task Subtasks */}
      <div className='__task_subtask'>
        {
          subtasksOpen &&
          <div className='__subtask_list'>
            {
              task.subtasks.length ?
                task.subtasks.map((task, index) => (
                  <div className='__subtask_item' key={index}>
                    <button className='__item_status' onClick={() => updateSubtaskStatus(index)}>
                      {
                        task.completed ?
                          <CheckSquare size={18} />
                          :
                          <Square size={18} />
                      }
                    </button>
                    <div className={`__item_content ${task.completed && '__completed'}`} suppressContentEditableWarning contentEditable={true} onBlur={(e) => updateSubtask(e, index)} onKeyDown={(e) => captureKey(e, index)}>{task.item}</div>
                  </div>
                ))
                :
                <></>
            }
            <button className='__add_subtask_btn' onClick={newSubtask}>
              <Plus size={16} />
              <span>Add subtask</span>
            </button>
          </div>
        }
      </div>

    </div>
  )
}
