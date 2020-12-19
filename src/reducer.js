

export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//Remove after finishing developing
	//token: null
	token: "BQDT4kgVqnx9ms-Q4UQFqJ-zOeHMmM9INyWuGmor1T6X8YDhJDqRzDVQNA9VYLFG5hgstiLhyAWEB3wDiGkpOvFwTGO-rERXU3GUrV2KYxKU35dOyxXtijsEiRnJ0s_L5xx9pstlPyas0mdyTymvAupaNNgjg0K-vrkMNwDv23cUc3mv",
};

const reducer =  (state, action) =>{
console.log(action);

switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;