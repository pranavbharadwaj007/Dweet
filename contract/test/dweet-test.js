const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dweet", function () {
  it("Should return the new name", async function () {
    const Dweet = await ethers.getContractFactory("Dweet");
    const dweet = await Dweet.deploy("angry hippo");
    await dweet.deployed();

    expect(await dweet.getName()).to.equal("angry hippo");

    const setName = await dweet.setName("coding thor");

    // wait until the transaction is mined
    await setName.wait();

    expect(await dweet.getName()).to.equal("coding thor");
  });
});
