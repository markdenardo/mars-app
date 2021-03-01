// export const getPhotos = () => {
//   try {
//     return dispatch => {
//       // dispatch(loadingTrue())
//       return (
//         fetch(
// "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J"
//         )
//           .then((r) => r.json())

//           .then((photos) => dispatch({ type: "GET_PHOTOS", photos: photos }))
//       );
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

export const addPhoto = (photo) => {
  return {
    type: "ADD_PHOTO",
    photo,
  };
};
