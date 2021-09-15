import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask, EmptySpace, Layout, LoadingTasks, Task, Title } from "../../components";
import { addTask } from "../../store/tasks/tasks.actions";
import { Board } from "../../utils/constants/board";
import { NewTask } from "../../utils/constants/new-task";

export default function BacklogPage() {

  const dispatch = useDispatch();
  const tasksStore = useSelector(state => state.tasks);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get the tasks for this page
  useEffect(() => {
    if (tasksStore.tasks.length > 0) {
      setTasks(tasksStore.tasks.filter((task) => {
        return task.board === Board.backlog;
      }))
    }
    setIsLoading(false);
  }, [tasksStore])

  return (
    <Layout>
      <section>
        <Title title='Backlog' />
        {
          tasksStore.tasksIsLoading || isLoading ?
            <LoadingTasks />
            :
            tasks.length === 0 ?
              <EmptySpace
                canAdd
                addHandler={() => dispatch(addTask(NewTask(Board.backlog)))}
                item='task' btnTitle='Add a task' /> :
              <>
                <div className='__tasks'>
                  {
                    tasks.map((task, index) => (
                      <Task task={task} key={index} />
                    ))
                  }
                </div>
                <AddTask addHandler={() => dispatch(addTask(NewTask(Board.backlog)))} />
              </>
        }
      </section>
    </Layout>
  )
}