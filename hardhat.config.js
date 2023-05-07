require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

//const { API_URL, PRIVATE_KEY } = process.env;

const alchemyURL = process.env.API_URL;
const deployerKey = process.env.PRIVATE_KEY;

  module.exports = {
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {
        url: alchemyURL,
        accounts: [`0x${deployerKey}`],
        chainId: 11155111
      }
    },
    solidity: {
      version: '0.8.17',
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
      },
    },
  },

  mocha: {
    timeout: 40000,
  },
}