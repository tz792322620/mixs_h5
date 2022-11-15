import Web3 from 'web3'
import seckill_abi from '../utils/json/seckill.json'
import bberc20_abi from '../utils/json/bberc20.json'

//授权额度
export const approve = async (address,amount) => {
    try {
        const contract = initContractserc().refContract.methods.approve("0xdbe5f19ce309aacb72aff44e524926627ca026e4",amount).send({from: address})
        return contract;
    } catch (error) {
        throw new Error(error);
    }
}
// 查询cx余额
export const balanceOf = async (address) => {
    try {
        const contract = initContractserc().refContract.methods
        const result = await contract.balanceOf(address).call()
        return result;

    } catch (error) {

        throw new Error(error);
    }
}

// 查询cx授权额度
export const allowance = async (address) => {
    try {
        const contract = initContractserc().refContract.methods
        const result = await contract.allowance(address,"0xdbe5f19ce309aacb72aff44e524926627ca026e4").call()
        return result;

    } catch (error) {

        throw new Error(error);
    }
}

// 查询开始时间戳
export const begin = async () => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.begin().call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}
// 查询持续时间长度
export const duration = async () => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.duration().call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}

// 查询比例
export const rateCX2CXC = async () => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.rateCX2CXC().call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}

// 今日是否秒杀
export const can = async (address) => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.can(address).call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}

// 秒杀
export const seckill = async (address) => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.seckill().send({from: address})
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}

// 取总数量
export const CXCSupportPerDay = async () => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.CXCSupportPerDay().call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}

// 取剩余数量
export const remain = async () => {
    try {
        const contract = initContracts().refContract.methods
        const eggW = await contract.remain().call()
        return eggW;
    } catch (error) {
        throw new Error(error);
    }
}



//seckill
export const initContracts = () => {
    let web3 = new Web3(window.ethereum)
    return {
        web3,
        // refContract: new web3.eth.Contract(seckill_abi, '0x8A415a5933b1393C6Ca73374ee01a16260abe93B'),
        refContract: new web3.eth.Contract(seckill_abi, '0xdbe5f19ce309aacb72aff44e524926627ca026e4'),

    }
}

//cxerc20授权专用
export const initContractserc = () => {
    let web3 = new Web3(window.ethereum)
    return {
        web3,
        refContract: new web3.eth.Contract(bberc20_abi, '0xF7b7841a8D6dd45E6617eAAE42E1172820df7Ef2'),

    }
}
