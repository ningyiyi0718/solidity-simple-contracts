const hre = require("hardhat");

async function main() {

    const factory = await hre.ethers.getContractFactory("MyToken");
    const contract = await factory.deploy();
    await contract.deployed();

    console.log("deployed to: %s", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
