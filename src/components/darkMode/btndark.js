import React, { useContext } from "react";
import "./btndark.css";
import { ThemeContext } from "../mode/newtheme";

export default function BtnDark() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={theme ? "btn-toggle light" : "btn-toggle dark"}
    >
      {theme ? "Mode nuit 🌙" : "Mode jour ☀️"}
    </div>
  );
}
