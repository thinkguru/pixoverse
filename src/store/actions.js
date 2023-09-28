const setInstalled = (data) => ({
    type: 'installed',
    payload: data,
  });

const  setLoggin = (data) => ({
  type: 'loggedIn',
    payload: data,
});

const  setAddress = (data) => ({
  type: 'address',
    payload: data,
});
const  setWeb3 = (data) => ({
  type: 'web3',
    payload: data,
});

export {setInstalled, setLoggin, setAddress, setWeb3}
