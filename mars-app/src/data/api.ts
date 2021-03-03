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