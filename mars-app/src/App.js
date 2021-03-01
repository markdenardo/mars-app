import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "./redux/actions"
import axios from "axios";
import "./App.css";

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
        <div>
          {" "}
          <h1>{photo[0].title}</h1>
          <img src={photo[0].url} />
          <p>{photo[0].explanation}</p>
          <button onClick={hook}>pic</button>
          <button onClick={SaveToRedux}>save to redux</button>
        </div>
      )}
    </div>
  );
}

export default App;