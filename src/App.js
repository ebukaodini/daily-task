import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import BacklogPage from './pages/BacklogPage/BacklogPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import TasksPage from './pages/TasksPage/TasksPage';
import ArchivePage from './pages/ArchivePage/ArchivePage';
import { useEffect } from 'react';
import { getSettings } from './store/settings/settings.actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from './store/tasks/tasks.actions';
import { Themes } from './utils/constants/themes';
import { setTheme } from './store/ui/ui.slice';
import { ResetTasksBoard } from './services/task-assistant/reset-tasks-board';

function App({deferredPrompt}) {

  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  // get initial data from database
  useEffect(() => {
    function __init() {
      dispatch(getSettings())
      dispatch(getTasks());
    }

    // wait one second to allow db load
    // Warning!!! Do not remove this event from the hook.
    setTimeout(() => {
      __init();
    }, 1000);

  }, [dispatch])

  // set theme
  useEffect(() => {
    dispatch(setTheme(settings.darkMode === true ? Themes.dark : Themes.light));
  }, [dispatch, settings.darkMode])

  ResetTasksBoard();

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomePage} deferredPrompt={deferredPrompt} />
        <Route exact path='/tasks' component={TasksPage} />
        <Route exact path='/backlog' component={BacklogPage} />
        <Route exact path='/archive' component={ArchivePage} />
        <Route exact path='/settings' component={SettingsPage} />
      </Switch>
    </Router>
  );
}

export default App;
