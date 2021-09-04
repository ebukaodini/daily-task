import Header from "../header/header";
import SideNavigation from "../navigation/side/side";
import BottomNavigation from "../navigation/bottom/bottom";
import { useSelector } from "react-redux";
import './layout.scss';

export default function Layout(props) {

  const theme = useSelector(state => state.ui);
  
  return (
    <div className={`${theme}`}>

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