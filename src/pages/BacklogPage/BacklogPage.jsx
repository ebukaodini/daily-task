import { AddTask, EmptySpace, Layout, Title } from "../../components";

export default function BacklogPage() {
  return (
    <Layout>
      <section>
      <Title title='Backlog' />
        <EmptySpace item='task' canAdd btnTitle='Add a task' />
        {/* <AddTask /> */}
      </section>
    </Layout>
  )
}