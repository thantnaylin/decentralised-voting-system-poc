const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    const balance = await hre.ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", balance.toString());

    const StudentVoting = await hre.ethers.getContractFactory("StudentVoting");
    const voting = await StudentVoting.deploy("AUT Student Representative Election 2025");

    // Wait for deployment to complete
    await voting.waitForDeployment();

    console.log("StudentVoting contract deployed to:", voting.address);

    // Add sample candidates
    console.log("Adding sample candidates...");
    await voting.addCandidate("Thant Nay Lin", "Noob-ass engineer");
    await voting.addCandidate("Royston", "Gigachad Boss");
    await voting.addCandidate("San Sint", "Mean Machine");

    console.log("Sample candidates added!");
    const candidateCount = await voting.getCandidateCount();
    console.log("Candidate Count:", candidateCount.toString());
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});