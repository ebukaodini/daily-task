import { Link } from "react-router-dom";

export default function SideNavigation() {
  return (
    <>
      <Link to='/archive'>Archive</Link>
      <Link to='/settings'>Settings</Link>
      <Link to='/tasks'>Tasks</Link>
    </>
  )
}