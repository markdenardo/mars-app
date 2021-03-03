// import React from "react";
import { useDispatch } from "react-redux";
import styles from "./App.scss";
import ContentCard from "./containers/ContentCard";
import JSContentCard from "./containers/JSContentCard"


function App() {
  

  return (
    <div className="App">
      <div className="app-container">
        <JSContentCard />
        <ContentCard />
      </div>
    </div>
  );
}

export default App;
