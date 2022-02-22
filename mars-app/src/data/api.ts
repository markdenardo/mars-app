<<<<<<< HEAD
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

=======
import React from "react";


// const body = await response.json();

export async function http(
    request: RequestInfo
): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}


// const data = await http(
//     "https://api.nasa.gov/planetary/apod?api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J&count=1"
// );

// console.log("data", data);
>>>>>>> 4cd5bf01edb379069a91c19d1ab9c44692b43348
