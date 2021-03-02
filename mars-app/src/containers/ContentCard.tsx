import React, { FC, useState } from "react";
import styles from "./ContentCard.module.scss";

export interface ContentCardProps {
  className: string;
  content: {
    title: string;
    url: string;
    explanation: string;
  };
}

const ContentCard: FC<ContentCardProps> = ({ className, content }) => {
  const { explanation, title, url } = content;
  return (
    <div className="App">
      {content == null ? (
        <div> Loading </div>
      ) : (
        <div className="base">
          {console.log(content)} <h1 className={styles.title}>{title}</h1>
          <img className={styles.img} src={url} />
          <p className={styles.explanation}>{explanation}</p>
        </div>
      )}
    </div>
  );
};

// const ContentCard: FC<ContentCardProps> = ({ className, content }) => {
//   const { explanation, title, url } = content;

//   return (
//     <div className="base">
//       <div className={styles.base}>
//         <h1 className={styles.title}>{title}</h1>
//         <img className={styles.img} src={url} />
//         <p className={styles.explanation}>{explanation}</p>
//       </div>
//     </div>
//   );
// };

export default ContentCard;
