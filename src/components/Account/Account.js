import React, { useState } from 'react';
import { MdModeNight, MdLightMode } from "react-icons/md";
import "./Account.css"

export default function Account() {
  // Состояние для хранения темы (день/ночь)
  const [theme, setTheme] = useState(false);



  // Функция для смены темы
  const ChangeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`blockOne ${theme ? "day" : "night"}`}>
      <div className={`blockTheme ${theme ? "lightTheme" : "darkTheme"}`}>
        <h3>Сменить тему</h3>
        <button 
          className={`btnTheme ${theme ? "lightBtn" : "nightBtn"}`} 
          onClick={ChangeTheme}
        >
          {theme ? <MdLightMode /> : <MdModeNight />}
        </button>
      </div>
    </div>
  );
}
