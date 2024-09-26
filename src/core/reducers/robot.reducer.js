const initialState = {
  selectedRobotId: null,
};

export const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_ROBOT':
      return {
        ...state,
        selectedRobotId: action.payload,
      };
    default:
      return state;
  }
};
