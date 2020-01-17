import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span>React Redux Typescript - Test</span>
    </header>
  );
};

export default Header;
