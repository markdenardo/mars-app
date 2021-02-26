import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "./redux/actions";


import './App.css';

function App() {
  const photos = useSelector(getPhotos());
  console.log("photos", photos);
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPhotos(photos));
   }, [dispatch, photos]);

  const PhotosList = () => {
    
    // if (photos !== undefined){
    // return photos.map((photo) => {
    // <img alt={photo[0].img_src} />;
    // });
    // }
    // return <div>poop</div>  
  }


  return (
    <div className="App">
     {/* <PhotosList/> */}
    </div>
  );
}

export default App;
