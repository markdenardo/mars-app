const photoReducer = (
  state = { photos: [], content: {}, loading: false },
  action
) => {
  switch (action.type) {
    case "ADD_PHOTO":
       const photo = {
                    id: action.content.id,
                    title: action.content[0].title,
                    url: action.content[0].url,
                    explanation: action.content[0].explanation, 
       }
   return {
          ...state,
          photos: [...state.photos, photo],
          loading: false
        };
    
  //   case "ADD_PHOTO":
  //     // debugger;
  //     const photo = {
  //       copyright: "Brian Haidet",
  //       date: "2018-10-12",
  //       explanation:
  //         "Not the Hubble Space Telescope's latest view of a distant planetary nebula, this illuminated cloud of gas and dust dazzled even casual U.S. west coast skygazers on October 7. Taken about three miles north of Vandenberg Air Force Base, the image follows plumes and exhaust from the first and second stage of a SpaceX Falcon 9 rocket rising through southern California's early evening skies. In the fading twilight, the reddish smoke drifting in the foreground at the right is from the initial ascent of the rocket. The expanding blue and orange filamentary plumes are from first and second stage separation and the first stage boostback burn, still in sunlight at extreme altitudes. But the bright spot below center is the second stage itself headed almost directly away from the camera, accelerating to orbital velocity and far downrange. Pulsed thrusters form the upside down V-shape at the top as they guide the reusable Falcon 9 first stage back to the landing site.",
  //       hdurl:
  //         "https://apod.nasa.gov/apod/image/1810/DSC08399-LrOut-Haidet2048.jpg",
  //       media_type: "image",
  //       service_version: "v1",
  //       title: "The Falcon 9 Nebula",
  //       url:
  //         "https://apod.nasa.gov/apod/image/1810/DSC08399-LrOut-Haidet1024.jpg",
  //     };
  //     return {
  //       ...state,
  //       photos: [...state.photos, photo],
  //       loading: false,
  //     };
    default:
      return state;
  }
};

export default photoReducer;
