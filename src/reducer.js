export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,

  //remove after finished developing.../
  token:
    "BQD1c4iT4plBciw7dWkJoA_Jv4rN7O80_7n3UsU3z0WkPFtLKwh4za3SmeVmStjYI7Apcy0Kb78wXV9_u0IlxgegbI9Qggq4JJ6SfFYHfpXVVGNIC7srq_ZUdpX0QbYN4z0s6SV5T8qUvDV3mO81P42l-b8tvT0srV2kViHDKvynubVp2hY2T9af",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
