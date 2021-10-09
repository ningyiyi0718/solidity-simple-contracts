const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("test hubpool", function () {

    kitties = "0x62a52ae72db0cCcC23e27E81be30f0062D23B67C";

    before(async function () {
        fac = await ethers.getContractFactory("KittyCore");
        contract = fac.attach(agg);
    });

    xit("newContractAddress", async function () {
        r = await contract.newContractAddress();
        console.log(r);
    });

});