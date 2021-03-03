// import React from "react";
import styles from "./App.scss";
import ContentCard from "./containers/ContentCard";
import JSContentCard from "./containers/JSContentCard";
import NavBar from './containers/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="app-container">
        <JSContentCard />
        <ContentCard />
      </div>
    </div>
  );
}

export default App;
