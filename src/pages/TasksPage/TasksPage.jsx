import { AddTask, EmptySpace, Layout, LoadingTasks, Title } from "../../components";

export default function TasksPage() {
  return (
    <Layout>
      <section>
        <Title title='Tasks' />
        {/* <LoadingTasks /> */}
        <EmptySpace canAdd item='task' btnTitle='Add a task' />
        <AddTask />
      </section>
    </Layout>
  )
}