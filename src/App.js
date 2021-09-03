import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import BacklogPage from './pages/BacklogPage/BacklogPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import TasksPage from './pages/TasksPage/TasksPage';
import ArchivePage from './pages/ArchivePage/ArchivePage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/tasks' component={TasksPage} />
        <Route exact path='/backlog' component={BacklogPage} />
        <Route exact path='/archive' component={ArchivePage} />
        <Route exact path='/settings' component={SettingsPage} />
      </Switch>
    </Router>
  );
}

export default App;
