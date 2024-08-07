import { useSelector } from "react-redux";
import appConfig from "./appConfig";
import Header from "./components/Header";
import store from "./redux/store";
const { getState } = store;

function App() {
  const { version, darkMode } = useSelector(
    (state: ReturnType<typeof getState>) => state.app
  );
  const selectedVersion = appConfig[version];

  return (
    <div className={`h-screen ${version == "v2" && darkMode && "dark"}`}>
      {selectedVersion.DarkMode && <selectedVersion.DarkMode />}
      <Header />
      <selectedVersion.RegistrationForm />
    </div>
  );
}

export default App;
