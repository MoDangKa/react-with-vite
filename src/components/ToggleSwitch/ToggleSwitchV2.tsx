import { AppDispatch, RootState } from "@/stores/store";
import { toggleTheme } from "@/stores/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitchV2() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles["toggle-switch"]}>
      <label>
        <input
          type="checkbox"
          checked={theme === "light"}
          onClick={() => dispatch(toggleTheme())}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
