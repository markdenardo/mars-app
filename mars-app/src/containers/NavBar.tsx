import React, { FC, useState } from "react";
import styles from "./NavBar.module.scss";  

export interface NavBarProps {
  className: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
    return (
      <div className={styles.base}>
        <h1 className={styles.h1}>
          <img className={styles.img}/>
          {/* <h4 className={styles.search}>something</h4> */}
        </h1>
      </div>
    );
}

export default NavBar;