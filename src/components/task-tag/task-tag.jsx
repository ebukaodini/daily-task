import './task-tag.scss';

export default function TaskTag({ color, description }) {
  
  return (
    <>
      <div className={`__task_tag __${color}`}>
        <span className='__tag_description'>{description}</span>
      </div>
    </>
  );
}