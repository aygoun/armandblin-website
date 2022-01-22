import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

/*  var loginButton;
  if (isDark) {
    loginButton = <i class="fa-solid fa-sun-bright"></i>
  } else {
    loginButton = <i class="fa-solid fa-moon"></i>
  }
*/
  return (
    <label className="switch">
      <a class="align-top" style={{paddingTop: 2}}onClick={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}>{isDark ? <i class="far fa-lightbulb icon-theme"></i> : <i class="far fa-moon icon-theme"></i>}</a>
    </label>
  );
};
export default ToggleSwitch;

/*
<input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round"></span>
*/