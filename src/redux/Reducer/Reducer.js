const initialState = {
    popup: false,
    isLogin: false
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_POPUP':
        return {
          ...state,
          popup: action.value
        };
      case 'CHANGE_ISLOGIN':
        return {
          ...state,
          isLogin: action.value
        };
      default:
        return state;
    }
  };
  export default Reducer;