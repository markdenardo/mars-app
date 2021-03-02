import React, { FC, useEffect, useState } from "react";
import styles from "./Card.module.scss";
// import Api from "../../data/api";

export interface CardProps {
  className?: string;
  article: {
    copyright?: string;
    explanation: string;
    title: string;
    url: string;
  };
}

const Card: FC<CardProps> = ({ className, article }) => {
  const { copyright, explanation, title, url } = article;
  return (
    <div className="App">
      <div className={styles.base}>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={url} />
        <h2 className={styles.copyright}>{copyright}</h2>
        <p className={styles.explanation}>{explanation}</p>
        <button className={styles.button}>pic</button>
      </div>
    </div>
  );
};

export default Card;
