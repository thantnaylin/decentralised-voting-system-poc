const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StudentVoting", () => {
    let StudentVoting, voting, admin, voter1, voter2, voter3;

    beforeEach(async () => {
        [admin, voter1, voter2, voter3] = await ethers.getSigners();

        StudentVoting = await ethers.getContractFactory("StudentVoting");
        voting = await StudentVoting.deploy('Test Election');
        await voting.waitForDeployment();
    });

    it("Should deploy with correct initial state", async () => {
        expect(await voting.admin()).to.equal(admin.address);
        expect(await voting.electionName()).to.equal("Test Election");
        expect(await voting.votingActive()).to.be.false;
        expect(await voting.candidateCount()).to.equal(0);
    });

    it("Should allow admin to add candidates", async () => {
        await voting.addCandidate("Royston", "President");
        expect(await voting.candidateCount()).to.equal(1);

        const candidate = await voting.getCandidate(1);
        expect(candidate[1]).to.equal("Royston");
        expect(candidate[2]).to.equal("President");
    })

    it("Should allow registered voters to vote", async () => {
        // Candidate Setup
        await voting.addCandidate("Royston", "President");
        await voting.registerVoter(voter1.address);
        await voting.startVoting();

        // Vote
        await voting.connect(voter1).vote(1);

        expect(await voting.hasVoted(voter1.address)).to.be.true;
        expect(await voting.totalVotes()).to.equal(1);

        const candidate = await voting.getCandidate(1);
        expect(candidate[3]).to.equal(1); // vote count
    })

    it("Should prevent double voting", async () => {
        await voting.addCandidate("San Sint", "Mean Machine President");
        await voting.registerVoter(voter1.address);
        await voting.startVoting();

        await voting.connect(voter1).vote(1);

        await expect(voting.connect(voter1).vote(1))
            .to.be.revertedWith("You have already voted");
    })
})