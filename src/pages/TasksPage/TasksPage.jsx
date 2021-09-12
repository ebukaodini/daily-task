import { AddTask, EmptySpace, Layout, LoadingTasks, Task, Title } from "../../components";
import './TaskPage.scss';

export default function TasksPage() {
  return (
    <Layout>
      <section>
        <Title title='Tasks' />
        <LoadingTasks />
        <EmptySpace canAdd item='task' btnTitle='Add a task' />
        <div className='__tasks'>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <AddTask />
      </section>
    </Layout>
  )
}