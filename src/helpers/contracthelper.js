import tokenAbi from '../containers/tokenAbi'
import vestingAbi from '../containers/vestingabi.json'
import Web3 from 'web3';
import constants from '../containers/constants.json'

const web3 = new Web3(window.ethereum);
const tokenContract = new web3.eth.Contract(tokenAbi, constants.token);
const vestContract = new web3.eth.Contract(vestingAbi, constants.vesting);

const contractData = async (address) =>{
    try{
        const symbol = await tokenContract.methods.symbol().call();
        const supply = await tokenContract.methods.totalSupply().call();
        const stake = await vestContract.methods.stakes(address).call();
        const owner = await vestContract.methods.owner().call();
        const total = await vestContract.methods.totalVesting().call();
        
        const available = await vestContract.methods.plans(stake._type).call();
        let isAdmin = false;
        if(owner.toLowerCase() == address.toLowerCase()){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
        return [symbol, supply, stake, owner, total, isAdmin, available];
    } catch (er) {
        return false;
    }
    
}

const withdrawDeposit = async (address) => {
    try{
    let tx = await vestContract.methods.withdraw().send({
        from: address,
        gas: 7000000,
        gasPrice: 10 ** 9,
    })
    return tx;
    } catch (er) {
        return false;
    }
}

export {contractData, withdrawDeposit};