import React, {FC, useEffect, useState} from 'react'
import styles from "./Card.module.scss";

export interface CardProps {
    className?: string;
    //copyright means the author in the api
    copyright?: string;
    date?: string;
    explanation: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title: string;
    url: string;
}

const Card: FC<CardProps> = ({
    className,
    copyright,
    date,
    explanation,
    title,
    url,
}) => {

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


    
}

export default Card;