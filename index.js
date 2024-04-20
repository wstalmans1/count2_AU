require('dotenv').config();
const ethers = require('ethers');

const network = {
    name: 'sepolia',
    chainId: 11155111 // This is the chain ID for Sepolia
};
const provider = new ethers.providers.InfuraProvider('sepolia', process.env.INFURA_API_KEY);

async function main() {
    const counterContract = new ethers.Contract(
        '0xF98569F595Df44242c34329c6F4d17221c71107b',
        '[{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inc","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
        provider
    );

    const currentCounterValue = await counterContract.get();
    console.log(currentCounterValue.toString());
}

main();