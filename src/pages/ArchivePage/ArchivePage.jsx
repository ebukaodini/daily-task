import { EmptySpace, Layout, Title } from "../../components";

export default function ArchivePage() {
  return (
    <Layout>
      <section>
        <Title title='Archive' />
        <EmptySpace item='archived task' />
      </section>
    </Layout>
  )
}