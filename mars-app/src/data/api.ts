import React, {useState} from 'react';


import  axios  from "axios";
const Api = (url: string) => {
  const [api, setApi] = useState({});
try {
  axios
        .get("https://api.nasa.gov/planetary/apod?api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J&count=1")
        .then((response) => {
          setApi(response.data); 
          // debugger
        });
} catch(error) {
  console.log(error);
}
  
}

export default Api;

