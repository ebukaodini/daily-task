import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../store/tasks/tasks.actions";
import { Board } from "../../utils/constants/board";
import { formatDate } from "../../utils/helpers/formatDate";

export const ResetTasksBoard = () => {

  const settings = useSelector(state => state.settings);
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {

    if (settings !== {} && tasks.tasksIsLoading === false) {
      setup();
    }

    function setup() {
      setInterval(() => {

        let time = settings.boardResetTime.replace(/^0/, '');
        let formattedTime = formatDate().replace(/^[A-Za-z]+,\s/, '');

        if (settings.automateBoardReset === true && formattedTime === time) {

          // console.log('resetting task board')

          // loop through tasks in the task board
          tasks.tasks
            .filter(task => task.board === Board.tasks)
            .forEach(task => {

              // find action for task in the settings task action list
              let action = settings.resetActions.find(action => action.status === task.status)
              if (undefined !== action) {
                let updatedTask = { ...task, board: action.board };
                dispatch(updateTask(updatedTask));
              }

            });

        }

      }, 60000);
    }
  }, [dispatch, settings, tasks])



}