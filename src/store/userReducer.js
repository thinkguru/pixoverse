const initialState = {installed:false, loggedIn: false, address: null, web3: null, chainId: null}; // Initial state for the user

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'installed':
      return action.payload;
    case 'loggedIn':
      return action.payload;
    case 'address':
      return action.payload;
    case 'web3':
      return action.payload;
    case 'chainId':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;