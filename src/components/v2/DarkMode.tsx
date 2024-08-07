import { useDispatch, useSelector } from "react-redux";
import { CHANGE_MODE } from "../../redux/app/appSlice";
import store from "../../redux/store";
const { getState } = store;

const DarkModeV2 = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(
    (state: ReturnType<typeof getState>) => state.app
  );

  const handleClick = () => {
    dispatch(CHANGE_MODE({ dark: !darkMode }));
  };

  return (
    <div>
      <button
        onClick={handleClick}
        title={`Switch to ${darkMode ? "light" : "dark"} mode`}
        className="flex items-center justify-center gap-4 border-purple-400 border-2 rounded-2xl p-2 absolute right-2 top-2"
      >
        <p style={{ color: darkMode ? "white" : "black" }}>
          {darkMode ? "Light" : "Dark"}
        </p>
      </button>
    </div>
  );
};

export default DarkModeV2;
