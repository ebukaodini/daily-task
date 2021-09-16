import Header from "../header/header";
import SideNavigation from "../navigation/side/side";
import BottomNavigation from "../navigation/bottom/bottom";
import { useSelector } from "react-redux";
import './layout.scss';
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/ui/ui.slice";

export default function Layout(props) {

  const ui = useSelector(state => state.ui);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(location.pathname.toString().substr(1)));
  }, [location, dispatch])

  return (
    <div className={`__layout ${ui.theme}`}>

      <header className='container'>
        <Header />
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