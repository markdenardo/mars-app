import React, { FC, useState } from "react";
import styles from "./NavBar.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JSContentCard from "./JSContentCard";

export interface NavBarProps {
  className: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={styles.base}>
      <h1 className={styles.h1}>
        <img className={styles.img} />
        <Router>
          <Link to="/ContentCard">card</Link>
          <Switch>
            <Route path="/ContentCard"/>
            <Route/>
          </Switch>
        </Router>
      </h1>
    </div>
  );
};

export default NavBar;
