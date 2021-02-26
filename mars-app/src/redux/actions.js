import axios from "axios";

export const getPhotos = () => {
  try {
    return (dispatch) => {
      axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J"
        )
        .then((response) => {
          console.log("response.data:", response.data);
        })
        .then((photos) => dispatch({ type: "GET_PHOTOS", photos: photos }));
    };
  } catch (error) {
    console.log(error);
  }
};
