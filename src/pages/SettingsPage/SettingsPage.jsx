import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Layout, Title } from "../../components";
import { updateSettings } from "../../store/settings/settings.actions";

export default function SettingsPage() {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settings);

  const updateDarkMode = async () => {
    let updatedSettings = { ...settings, darkMode: !settings.darkMode }
    dispatch(updateSettings(updatedSettings))
  }

  return (
    <Layout>
      <section>
        <Title title='Settings' shouldPop />
        <button onClick={updateDarkMode} >Toggle State</button>
      </section>
    </Layout>
  )
}