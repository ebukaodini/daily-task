import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EmptySpace, Layout, LoadingTasks, Task, Title } from "../../components";
import { Board } from "../../utils/constants/board";

export default function ArchivePage() {

  const tasksStore = useSelector(state => state.tasks);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get the tasks for this page
  useEffect(() => {
    if (tasksStore.tasks.length > 0) {
      setTasks(tasksStore.tasks.filter((task) => {
        return task.board === Board.archive;
      }))
    }
    setIsLoading(false);
  }, [tasksStore])

  return (
    <Layout>
      <section>
        <Title title='Archive' />
        {
          tasksStore.tasksIsLoading || isLoading ?
            <LoadingTasks />
            :
            tasks.length === 0 ?
              <EmptySpace item='archived task' />
              :
              <>
                <div className='__tasks'>
                  {
                    tasks.map(task => (
                      <Task task={task} key={task.id} />
                    ))
                  }
                </div>
              </>
        }
      </section>
    </Layout>
  )
}