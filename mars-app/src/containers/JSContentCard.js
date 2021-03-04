import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addPhoto } from "./redux/actions";
import axios from "axios";
import styles from "./JSContentCard.scss";


function JSContentCard() {
  const [content, setContent] = useState();

  const hook = () => {
    
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J&count=1"
        )
        .then((response) => {
          setContent(response.data)
         
        })
    .catch((error)=>{console.log(error)})
  };
//   const SaveToRedux = () => {
//     // let add = addPhoto(content);
//     // useDispatch(add);
//     console.log("clicked")
//   };

  useEffect(hook, [])

  return (
    <div className="App">
      {content == null ? (
        <div> Loading </div>
      ) : (
        <div className="base">
          {console.log(content)}{" "}
          <h1 className="title">{content[0].title}</h1>
          <img className="img" src={content[0].url} />
          <p className="explanation">{content[0].explanation}</p>
          <button className="button" onClick={hook}>
            pic
          </button>
          {/* <button className="button" onClick={SaveToRedux}>
            save to redux
          </button> */}
        </div>
      )}
    </div>
  );
}

export default JSContentCard;
