
const initialState= 1;
const counterReducer = (state = initialState, action) => {
  debugger
    switch (action.type) {
      case "INCREMENT":
        return state +1
      case "DECREMENT":
        return state  -1
      default:
        return state;
    }
  };
  export default counterReducer;