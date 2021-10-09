require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = process.env.privateKey;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: {
    compilers: [
      { version: "0.6.12", settings: { optimizer: { enabled: true, runs: 200 } } }
    ],
    overrides: {}
  },
  paths: { sources: "./contracts" },
  abiExporter: { path: "./abi", clear: true, flat: true, spacing: 2 },
  mocha: {
    timeout: 600 * 1e3 // 设置测试框架超时时间, 默认 20000ms.
  },
  networks: {
    eth: {
      url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 1,
      accounts: [`${privateKey}`],
      gas: "auto",
      gasPrice: "auto"
      // gasPrice: 10e9
    },
    heco: {
      url: "https://http-mainnet-node.defibox.com",
      chainId: 128,
      accounts: [`${privateKey}`],
      gas: "auto",
      gasPrice: 2.25e9
    },
    heco_test: {
      url: "https://http-testnet.hecochain.com/",
      chainId: 256,
      accounts: [`${privateKey}`],
      blockGasLimit: 19500000,
      gas: 8000000,
      gasPrice: 1000000000,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: [`${privateKey}`],
      gas: "auto",
      gasPrice: 5e9
    },
    okt: {
      url: "https://exchainrpc.okex.org",
      chainId: 66,
      accounts: [`${privateKey}`],
      gas: "auto",
      gasPrice: "auto"
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      chainId: 137,
      accounts: [`${privateKey}`],
      gas: "auto",
      gasPrice: "auto"
    }
  }
};
