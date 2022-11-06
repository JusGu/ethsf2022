const { ethers } = require("hardhat");

const depositStream = async (yourAddess, recipientAddress) => {
    let yourAddress= yourAddess;
    let recipientAddress= recipientAddress;
    let ibAlluoUSD = await ethers.getContractAt("IbAlluo", "0x470e486acA0e215C925ddcc3A9D446735AabB714");
    const usdc = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    let amount = parseEther(1000);
    await ibAlluoUSD.deposit(usdc, amount);
    let encodeData = await ibAlluoCurrent.formatPermissions();
    let superhost = await ethers.getContractAt("Superfluid", "0x3E14dC1b13c488a8d5D310918780c983bD5982E7");
    await superhost.connect(signers[1]).callAgreement(
        "0x6EeE6060f715257b970700bc2656De21dEdF074C",
        encodeData,
        "0x"
    )
    let currentBalance = await ibAlluoUSD.combinedBalanceOf(yourAddress);
    await ibAlluoUSD.createFlow(recipientAddress, parseEther("1"), currentBalance)
}

const transferStream = async (yourAddess, recipientAddress, balance) => {
    let yourAddress= yourAddess;
    let recipientAddress= recipientAddress;
    let ibAlluoUSD = await ethers.getContractAt("IbAlluo", "0x470e486acA0e215C925ddcc3A9D446735AabB714");
    const usdc = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
    let encodeData = await ibAlluoCurrent.formatPermissions();
    let superhost = await ethers.getContractAt("Superfluid", "0x3E14dC1b13c488a8d5D310918780c983bD5982E7");
    await superhost.connect(signers[1]).callAgreement(
        "0x6EeE6060f715257b970700bc2656De21dEdF074C",
        encodeData,
        "0x"
    )
    let currentBalance = await ibAlluoUSD.combinedBalanceOf(yourAddress);
    await ibAlluoUSD.createFlow(recipientAddress, parseEther("1"), balance);
}

