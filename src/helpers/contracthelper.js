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
        let isAdmin = false;
        if(owner.toLowerCase() == address.toLowerCase()){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
        return [symbol, supply, stake, owner, total, isAdmin];
    } catch (er) {
        return false;
    }
    
}

export default contractData;