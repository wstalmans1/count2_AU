require('dotenv').config();
const ethers = require('ethers');

async function main() {

    // Instantiation of the contract
    const Contract = new ethers.Contract(
        '0xF98569F595Df44242c34329c6F4d17221c71107b',
        '[{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inc","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
        new ethers.Wallet(process.env.PRIVATE_KEY, new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY))
    );

    // Call of the smart contract function inc()
    const txResponse = await Contract.inc();
    
    // Waiting for the transaction confirmation from the blockchain
    console.log('waiting for the increment transaction to confirm ...');
    await txResponse.wait();

    // Read the value of the count variable (through a call to the get() function)
    const Count = await Contract.get();
    console.log(Count.toString());
}

main();