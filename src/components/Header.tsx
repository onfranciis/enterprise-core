import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_VERSION } from "../redux/app/appSlice";
import { IVersion } from "../redux/app/appType";
import store from "../redux/store";
const { getState } = store;

export const versions = ["v1", "v2", "v3"] as const;

const Header = () => {
  const dispatch = useDispatch();
  const { version } = useSelector(
    (state: ReturnType<typeof getState>) => state.app
  );

  const handleChangeVersion = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as IVersion;

    if (versions.includes(value)) {
      dispatch(CHANGE_VERSION({ version: value }));
    }
  };

  return (
    <div className="">
      <select
        name=""
        id=""
        value={version}
        onChange={handleChangeVersion}
        className="m-3 p-3 rounded-md bg-violet-200"
      >
        {versions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
