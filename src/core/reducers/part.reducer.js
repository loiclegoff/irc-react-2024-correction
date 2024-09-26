const initialState = {
  selectedPartIds: [],
  parts: [],
};

export const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_ROBOT':
      return {
        ...state,
        selectedPartIds: action.payload.selectedPartIds,
      };
    case 'ADD_PARTS':
      return {
        ...state,
        parts: action.payload,
      };
    default:
      return state;
  }
};
