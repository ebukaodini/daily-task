
import { BottomNavigation, Header, SideNavigation } from '..';
import './layout.scss';

export default function Layout(props) {
  return (
    <>

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

    </>
  )
}