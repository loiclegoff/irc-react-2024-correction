const initialState = {
  selectedRobotId: null,
  robots: [],
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_ROBOT':
      return {
        ...state,
        selectedRobotId: action.payload.selectedRobotId,
      };
    case 'ADD_ROBOTS':
      return {
        ...state,
        robots: action.payload,
      };
    default:
      return state;
  }
};
