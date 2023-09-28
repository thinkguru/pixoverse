import logo from '../images/logoFinal.png'
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Web3 from 'web3';
import {setInstalled, setLoggin, setAddress, setWeb3} from '../store/actions';
const Navigation = () => {
    const dispatch = useDispatch();
    let wallet = useSelector(state => state);
    console.log(wallet)

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            // MetaMask or another injected Web3 provider is available
            dispatch(setInstalled({installed:true}));
            // Add event listener for account changes
            window.ethereum.on('accountsChanged', (newAccounts) => {
               connectWallet();
            });
            window.ethereum.on('networkChanged', (newNetworkId) => {
                connectWallet();
              });
          } else {
            // Web3 provider is not available
            dispatch(setInstalled({installed:false}));
          }
    }, []);

    const checkChain = (web3, callback) => {
        web3.eth.getChainId()
        .then((chainId) => {
            // console.log(chainId);
            callback(chainId);
        })
        .catch((error) => {
            callback(null);
        });
    }

    const connectWallet = async() => {
        const web3Instance = new Web3(window.ethereum);
        let ch; 
        checkChain(web3Instance, (d) => {
            ch = d;
        });
        console.log(ch)
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
            
            dispatch(setLoggin({installed:true, loggedIn:true, address: accounts[0], web3: web3Instance, chainId: ch}))
        }).catch((error) => {
            console.log(error);
        })
        
        console.log(wallet.user)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src={logo} alt="logo" /></a>
                <button aria-controls="navbarScroll" type="button" aria-label="Toggle navigation"
                    className="navbar-toggler collapsed">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-end navbar-collapse collapse" id="navbarScroll">
                    <div className=" my-2 my-lg-0 navbar-nav navbar-nav-scroll" style={{maxHeight:'100px'}}>
                        {wallet.user.installed?<>
                            {wallet.user.loggedIn?<button className="btn btn-success">{wallet.user.address}</button>:<button className="btn btn-success" onClick={connectWallet}>Connect Wallet</button>}
                            </>:
                            <button className="btn btn-success">Install Wallet</button>
                    }
                        
                    </div>

                </div>
                </div>
            </nav>
    )
}
export default Navigation;