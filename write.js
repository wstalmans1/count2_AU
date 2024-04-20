require('dotenv').config();
const ethers = require('ethers');

async function main() {
    
    const Contract = new ethers.Contract(
        '0xF98569F595Df44242c34329c6F4d17221c71107b',
        '[{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inc","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
        new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY)
    );

    const Count = await Contract.get();
    console.log(Count.toString());
}

main();