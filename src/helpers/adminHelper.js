import tokenAbi from '../containers/tokenAbi.json'
import vestingAbi from '../containers/vestingabi.json'
import Web3 from 'web3';
import constants from '../containers/constants.json'

const web3 = new Web3(window.ethereum);
const tokenContract = new web3.eth.Contract(tokenAbi, constants.token);
const vestContract = new web3.eth.Contract(vestingAbi, constants.vesting);

const adminapprove = async (amount, address) =>{
    try{
        let tx = await tokenContract.methods.approve(constants.vesting, web3.utils.toWei(amount)).send({
            from: address,
            gas: 7000000,
            gasPrice: 10 ** 9,
        })
        return tx;
    } catch (er) {
        return false;
    }
    
}

const staked = async (amount, type, add, address) =>{
    
    try{
     
        let tx = await vestContract.methods.stake(type, web3.utils.toWei(amount.toString()), add).send({
            from: address,
            gas: 7000000,
            gasPrice: 10 ** 9,
        })
        
        return tx;
    } catch (er) {
        return false;
    }
    
}

export {adminapprove, staked};