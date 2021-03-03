import React, { FC, useState, useEffect } from "react";
import styles from "./ContentCard.module.scss";
// import axios from 'axios';
export interface ContentCardProps {
  className: string;
  content: {
    title: string;
    url: string;
    explanation: string;
  };
  dummyContent: {
    title: string;
    url: string;
    explanation: string;
  };
}

const ContentCard: FC<ContentCardProps> = ({ 
  className, 
  // content 
}) => {
  // const { explanation, title, url } = content;
  const [content, setContent] = useState({title: "",url: "",explanation: ""});

  const hook = () => {
    const dummyContent = {
      title: "Cosmic Latte",
      url: "https://apod.nasa.gov/apod/image/0207/cosmiclatte_jhu.jpg",
      explanation:
        "What color is the universe? More precisely, if the entire sky was smeared out, what color would the final mix be? This whimsical question came up when trying to determine what stars are commonplace in nearby galaxies. The answer, depicted above, is a conditionally perceived shade of beige. To determine this, astronomers computationally averaged the light emitted by one of the largest sample of galaxies yet analyzed: the 200,000 galaxies of the 2dF survey. The resulting cosmic spectrum has some emission in all parts of the electromagnetic spectrum, but a single perceived composite color. This color has become much less blue over the past 10 billion years, indicating that redder stars are becoming more prevalent. In a contest to better name the color, notable entries included skyvory, univeige, and the winner: cosmic latte.",
    };

    setContent(dummyContent);
  };
  const SaveToRedux = () => {
    // let add = addPhoto(content);
    // useDispatch(add);
    console.log("clicked")
  };

  useEffect(hook, []);

  return (
    <div className="App">
      {content == null ? (
        <div> Loading </div>
      ) : (
        <div className="base">
          {console.log("card", content)}{" "}
          <h1 className="title">{content.title}</h1>
          <img className="img" src={content.url} />
          <p className="explanation">{content.explanation}</p>
          <button className="button" onClick={hook}>
            pic
          </button>
          <button className="button" onClick={SaveToRedux}>
            save to redux
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
