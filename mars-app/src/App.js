import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "./redux/actions";


import './App.css';

function App() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPhotos());
   }, []);

  const photosList = () => {
    // return photos.map(
    //   (photo) => 
    //   { <img alt={photo[0].img_src}/> } 
    //   )
    return <div>poop</div>  
  }


  return (
    <div className="App">
     <photosList/>
    </div>
  );
}

export default App;
