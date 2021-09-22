import { Check, X } from "react-feather";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTask } from "../../store/tasks/tasks.actions";
import { toggleManageTagsModal } from "../../store/ui/ui.slice";
import "./manage-tags.scss";

export default function ManageTags({ task }) {

  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  const addTaskTag = (tag) => {
    if (!task.tags.find((ttag) => ttag.id === tag.id)) {
      let updatedTask = { ...task, tags: [...task.tags, { id: tag.id }] }
      dispatch(updateTask(updatedTask));
    }
  }

  const removeTaskTag = (tag) => {
    let ttags = [...task.tags];
    let index = task.tags.findIndex((ttag) => ttag.id === tag.id);
    ttags.splice(index, 1);
    let updatedTask = { ...task, tags: ttags }
    dispatch(updateTask(updatedTask));
  }

  const cleanTags = (tags) => {
    let cleanTags = [];
    tags.forEach(tag => {
      cleanTags.push(settings.tags.find((stag) => stag.id === tag.id))
    });
    return cleanTags.filter(Boolean);
  }

  return (
    <div className='__manage_tags_modal'>
      <div className='__manage_tags_body'>
        <div className='__title'>
          <h2>Tags</h2>
          <button className='__close_btn' onClick={() => dispatch(toggleManageTagsModal())}>
            <X size={20} />
          </button>
        </div>
        <div className='__tags'>
          <div className='__selected_tags'>
            {
              task.tags.length < 1 ?
                <div className='__no_tags'>No tags</div> :
                cleanTags(task.tags)
                // task.tags
                .map((tag, index) => (
                  <div key={index}
                    onClick={() => removeTaskTag(tag)}
                    className={`__tag __${tag.colorCode}`}>
                    <span className='__tag_description'>{tag.description} <Check size={14} /> </span>
                  </div>
                ))
            }
          </div>
          <div className='__unselected_tags'>
            {
              settings.tags
                .filter((stag) => {
                  return !task.tags.find((ttag) => ttag.id === stag.id)
                })
                .map((tag, index) => (
                  <div key={index}
                    onClick={() => addTaskTag(tag)}
                    className={`__tag __${tag.colorCode}`}>
                    <span title={`Select ${tag.description}`} className='__tag_description'>{tag.description}</span>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}