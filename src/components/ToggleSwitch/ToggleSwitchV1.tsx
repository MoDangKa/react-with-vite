import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitchV1() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles["toggle-switch"]}>
      <label>
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
