import React from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "kyiv", label: "Kyiv" },
    { value: "kharkov", label: "Kharkov" },
    { value: "dnieper", label: "Dnieper" },
  ];

  const colourStyles = {
    control: (styles: {}) => ({
      ...styles,
      backgroundColor: 0 ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: {}) => ({
      ...styles,
      color: 0 ? "#fff" : "#000",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather App</div>
      </div>

      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
