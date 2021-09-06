import { useDispatch } from "react-redux";
import { Layout, Title } from "../../components";
import { toggleTheme } from "../../store/ui/ui.slice";

export default function SettingsPage() {
  const dispatch = useDispatch();

  return (
    <Layout>
      <section>
        <Title title='Settings' shouldPop />
        {/* <br /> */}
        <button onClick={() => dispatch(toggleTheme())} >Toggle State</button>
      </section>
    </Layout>
  )
}