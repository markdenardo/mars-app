import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "./redux/actions"
import axios from "axios";
import styles from "./App.scss";

function App() {
  const [photo, setPhoto] = useState();

  const hook = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J&count=1")
      .then((response) => {
        setPhoto(response.data); 
        // debugger
      });
  };

  useEffect(hook, []);

  const SaveToRedux = () => {
    useDispatch(addPhoto(photo))
  }

  return (
    <div className="App">
      {photo == null ? (
        <div> Loading </div>
      ) : (
        <div className="base">
          {" "}
          <h1 className="title">{photo[0].title}</h1>
          <img className="img" src={photo[0].url} />
          <p className="explanation">{photo[0].explanation}</p>
          <button className ="button" onClick={hook}>pic</button>
          <button className ="button" onClick={SaveToRedux}>save to redux</button>
        </div>
      )}
    </div>
  );
}

export default App;