import Header from "../header/header";
import SideNavigation from "../navigation/side/side";
import BottomNavigation from "../navigation/bottom/bottom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/ui/ui.slice";
import './layout.scss';

export default function Layout(props) {

  const theme = useSelector(state => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={`${theme}`}>

      <header className='container'>
        <Header />
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </header>

      <main className='container'>
        <nav className='side-nav'>
          <SideNavigation />
        </nav>

        <div className='page'>
          {props.children}
        </div>

      </main>

      <nav className='bottom-nav container'>
        <BottomNavigation />
      </nav>

    </div>
  )
}