// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract StudentVoting {
    struct Candidate {
        uint256 id;
        string name;
        string position;
        uint256 voteCount;
    }

    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId;
    }

    // Attributes
    address public admin;
    string public electionName;
    bool public votingActive;
    uint256 public totalVotes;

    // Mappings
    mapping(uint256 => Candidate) public candidates;
    mapping(address => Voter) public voters;
    uint256 public candidateCount;

    // RPCs
    event VoterRegistered(address voter);
    event VoteCast(address voter, uint256 candidateId);
    event ElectionStarted();
    event ElectionEnded();

    // Validations
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyRegisteredVoter() {
        require(voters[msg.sender].isRegistered, "You are not registered to vote");
        _;
    }

    modifier votingIsActive() {
        require(votingActive, "Voting is not currently active");
        _;
    }

    // constructor
    constructor(string memory _electionName) {
        admin = msg.sender;
        electionName = _electionName;
        votingActive = false;
        candidateCount = 0;
        totalVotes = 0;
    }

    // Functions
    function addCandidate(string memory _name, string memory _position) public onlyAdmin {
        // pretty self-explanatory
        require(!votingActive, "Cannot add candidates while voting is active");
        candidateCount++;
        // Refer to Candidate struct
        candidates[candidateCount] = Candidate(candidateCount, _name, _position, 0);
    }

    function registerVoter(address _voter) public onlyAdmin {
        require(!voters[_voter].isRegistered, "Voter is already registered");
        // Refer to Voter struct;
        voters[_voter] = Voter(true, false, 0);
        emit VoterRegistered(_voter);
    }

    function startVoting() public onlyAdmin {
        require(candidateCount > 0, "No candidates added");
        votingActive = true;
        emit ElectionStarted();
    }

    function endVoting() public onlyAdmin  {
        votingActive = false;
        emit ElectionEnded();
    }

    function vote(uint256 _candidateId) public onlyRegisteredVoter votingIsActive {
        // Validations
        require(!voters[msg.sender].hasVoted, "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate ID");

        // Voting logic
        voters[msg.sender].hasVoted = true;
        voters[msg.sender].votedCandidateId = _candidateId;
        candidates[_candidateId].voteCount++;
        totalVotes++;

        emit VoteCast(msg.sender, _candidateId);
    }

    function getCandidateCount() public view returns (uint256) {
        return candidateCount;
    }

    function getResults() public view returns (uint256[] memory, string[] memory, string[] memory, uint256[] memory) {
        uint256[] memory ids = new uint256[](candidateCount);
        string[] memory names = new string[](candidateCount);
        string[] memory positions = new string[](candidateCount);
        uint256[] memory voteCounts = new uint256[](candidateCount);

        for (uint256 i = 0; i < candidateCount; i++) {
            Candidate memory candidate = candidates[i];
            ids[i] = candidate.id;
            names[i] = candidate.name;
            positions[i] = candidate.position;
            voteCounts[i] = candidate.voteCount;
        }
        return (ids, names, positions, voteCounts);
    }

    function hasVoted(address _voter) public view returns (bool) {
        return voters[_voter].hasVoted;
    }

    function isRegistered(address _voter) public view returns (bool) {
        return voters[_voter].isRegistered;
    }
}