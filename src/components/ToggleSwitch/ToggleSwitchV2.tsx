import { AppDispatch, RootState } from "@/stores/store";
import { toggleTheme } from "@/stores/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitchV2() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles["toggle-switch"]}>
      <label>
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={handleChange}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
