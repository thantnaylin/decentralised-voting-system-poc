
// Contract configuration
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_electionName",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "ElectionEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "ElectionStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "VoterRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_position",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidateCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "position",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "electionName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "getCandidate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCandidateCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getResults",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "hasVoted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "isRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_voter",
                "type": "address"
            }
        ],
        "name": "registerVoter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startVoting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalVotes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isRegistered",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "hasVoted",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "votedCandidateId",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "votingActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

class VotingApp {
    constructor() {
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.currentAccount = null;
        this.isAdmin = false;
        console.log('CONSTRUCTOR CALLED!')
        this.init();
    }

    toggleCard(shouldShow, elementId) {
        document.getElementById(elementId).style.display = shouldShow ? 'block' : 'none';
    }

    hideAllCards() {
        this.toggleCard(false, "adminSection");
        this.toggleCard(false, "electionStatus");
        this.toggleCard(false, "candidateList");
        this.toggleCard(false, "votingSection");
        this.toggleCard(false, "resultSection");
    }

    showAllAdminCards() {
        this.toggleCard(true, "adminSection");
        this.toggleCard(true, "electionStatus");
        this.toggleCard(true, "candidateList");
        this.toggleCard(true, "resultSection");
    }

    showAllVoterCards() {
        this.toggleCard(true, "votingSection");
        this.toggleCard(true, "candidateList");
        this.toggleCard(true, "electionStatus");
        this.toggleCard(true, "resultSection");
    }


    async init() {
        console.log("Initializing VotingApp...");
        // Check if MetaMask is installed
        if (typeof window.ethereum !== "undefined") {
            this.provider = new ethers.providers.Web3Provider(window.ethereum);
        } else {
            console.log('NOT INSTALLED')
            this.showStatus("Please install MetaMask to use this app", "error");
            return;
        }

        this.setupEventListeners();

        // Try to connect if already authorized
        if (window.ethereum.selectedAddress) {
            await this.disconnectWallet();
            // await this.connectWallet();
        }
    }

    setupEventListeners() {
        document.getElementById("connectWallet").addEventListener("click", this.connectWallet.bind(this));
        document.getElementById("disconnectWallet").addEventListener("click", this.disconnectWallet.bind(this));
        document.getElementById("addCandidate").addEventListener("click", this.addCandidate.bind(this));
        document.getElementById("registerVoter").addEventListener("click", this.registerVoter.bind(this));
        document.getElementById("startVoting").addEventListener("click", this.startVoting.bind(this));
        document.getElementById("endVoting").addEventListener("click", this.endVoting.bind(this));
    }

    async connectWallet() {
        console.log("Connecting...")
        try {
            // await window.ethereum.request({method: "eth_requestAccounts"});
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x539' }] // Hex for 1337
            })
            this.signer = this.provider.getSigner();
            this.currentAccount = await this.signer.getAddress();

            document.getElementById("currentAccount").textContent = this.currentAccount.substring(0, 6) + "..." + this.currentAccount.substring(38);

            // Initialize contract
            if (CONTRACT_ADDRESS && CONTRACT_ABI.length > 0) {
                this.contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, this.signer);
                await this.checkUserRole();
                await this.loadElectionData();
            } else {
                this.showStatus("Contract not deployed yet. Please deploy the contract first.", "error");
                return;
            }
            this.showStatus("Wallet connected successfully!", "success");
            // this.toggleCards(true);
            document.getElementById("disconnectWallet").style.display = "block";
            document.getElementById("connectWallet").style.display = "none";

        } catch (error) {
            console.error("Error connecting wallet:", error);
            this.showStatus("Error connecting wallet: " + error.message, "error")
        }
    }

    async disconnectWallet() {
        this.currentAccount = null;
        this.contract = null;
        this.signer = null;
        this.isAdmin = false;

        document.getElementById("currentAccount").style.display = "inline-block";

        document.getElementById("currentAccount").textContent = "None";
        document.getElementById("userRole").textContent = "Unknown";
        document.getElementById("disconnectWallet").style.display = "none";
        document.getElementById("connectWallet").style.display = "block";

        document.getElementById("userRole").style.color = "white";


        this.hideAllCards();
    }

    async addCandidate() {
        const name = document.getElementById("candidateName").value;
        const position = document.getElementById("candidatePosition").value;
        console.log('logging this:')
        console.log(this);
        if (!name || !position || !this.contract) {
            this.showStatus("Please fill in both candidate name and position", "error");
            return;
        }

        try {
            const tx = await this.contract.addCandidate(name, position);
            this.showStatus("Adding candidate... Please wait for confirmation.", "info");
            await tx.wait();
            this.showStatus(`Candidate ${name} added successfully!`, "success");

            // Clear inputs
            document.getElementById("candidateName").value = "";
            document.getElementById("candidatePosition").value = "";

            // Reload candidates
            await this.loadCandidates();
        } catch (error) {
            console.error("Error adding new candidate:", error);
            this.showStatus("Error adding new candidate: ", error.message, "error");
        }
    }

    async registerVoter() {
        const voterAddress = document.getElementById("voterAddress").value;

        if (!voterAddress || !ethers.utils.isAddress(voterAddress)) {
            this.showStatus("Please enter a valid Ethereum address", "error");
            return;
        }

        try {
            const tx = await this.contract.registerVoter(voterAddress);
            this.showStatus("Registering Voter... Please wait for confirmation", "info");
            await tx.wait();
            this.showStatus("Voter registered successfully!", "success");

            document.getElementById("voterAddress").value = "";
        } catch (error) {
            console.error("Error registering voter:", error);
            this.showStatus("Error registering voter:", error.message, "error");
        }
    }

    async startVoting() {
        try {
            const tx = await this.contract.startVoting();
            this.showStatus('Starting voting... Please wait for confirmation.', 'info');
            await tx.wait();
            this.showStatus('Voting started successfully!', 'success');
            await this.loadElectionData();
        } catch (error) {
            console.error('Error starting voting:', error);
            this.showStatus('Error starting voting: ' + error.message, 'error');
        }
    }

    async endVoting() {
        try {
            const tx = await this.contract.endVoting();
            this.showStatus('Ending voting... Please wait for confirmation.', 'info');
            await tx.wait();
            this.showStatus('Voting ended successfully!', 'success');
            await this.loadElectionData();
        } catch (error) {
            console.error('Error ending voting:', error);
            this.showStatus('Error ending voting: ' + error.message, 'error');
        }
    }

    async checkUserRole() {
        try {
            const admin = await this.contract.admin();
            this.isAdmin = admin.toLowerCase() === this.currentAccount.toLowerCase();

            document.getElementById("userRole").textContent = this.isAdmin ? "Admin" : "Voter";
            document.getElementById("userRole").style.color = "green";

            if (this.isAdmin) {
                this.showAllAdminCards();
            } else {
                this.showAllVoterCards();
            }

        } catch (error) {
            console.error()
        }
    }

    async loadElectionData() {
        try {
            // Load election info
            const electionName = await this.contract.electionName();
            const votingActive = await this.contract.votingActive();
            const totalVotes = await this.contract.totalVotes();

            document.getElementById("electionName").textContent = electionName;
            document.getElementById("votingStatus").textContent = votingActive ? "Active" : "Inactive";
            document.getElementById("totalVotes").textContent = totalVotes.toString();

            // Load candidates
            await this.loadCandidates();

            // Check voting status for current user
            if (!this.isAdmin) {
                await this.checkVotingStatus();
            }
        } catch (error) {
            console.error("Error loading election data:", error);
            this.showStatus("Error loading election data: ", error.message, "error");
        }
    }

    async loadCandidates() {
        try {
            const candidateCount = await this.contract.candidateCount();
            const candidatesList = document.getElementById("candidatesList");
            const votingOptions = document.getElementById("votingOptions");

            candidatesList.innerHTML = "";
            votingOptions.innerHTML = "";

            if (candidateCount.toString() === "0") {
                candidatesList.innerHTML = "<p>No candidate registered yet.</p>";
                votingOptions.innerHTML = "<p>No candidate available for voting.</p>";
                return;
            }

            for (let i = 1; i <= candidateCount; i++) {
                const candidate = await this.contract.getCandidate(i);
                const [id, name, position, voteCount] = candidate;

                // Add to candidate list
                const candidateDiv = document.createElement("div");
                candidateDiv.className = "candidate";
                candidateDiv.innerHTML = `
                    <strong>${name}:</strong> - ${position}
                    <br>Votes: ${voteCount.toString()}
                `;
                candidatesList.appendChild(candidateDiv);

                // Add to voting options
                const votingOption = document.createElement("div");
                votingOption.innerHTML = `
                    <button onclick="app.vote(${id})" class="vote-btn" data-candidate-id="${id}">
                        Vote for ${name} (${position})
                    </button>
                `;
                votingOptions.appendChild(votingOption);
            }

        } catch (error) {
            console.error("Error loading candidates:", error);
            this.showStatus("Error loading candidates", error.message, "error");
        }
    }

    async checkVotingStatus() {
        try {
            const isRegistered = await this.contract.isRegistered(this.currentAccount);
            const hasVoted = await this.contract.hasVoted(this.currentAccount);
            const votingActive = await this.contract.votingActive();

            let instructions = "";
            let buttonDisabled = true;

            if (!isRegistered) {
                instructions = "❌ You are not registered to vote. Contact the administrator.";
            } else if (hasVoted) {
                instructions = "✅ You have already voted. Thank you for participating!";
            } else if (!votingActive) {
                instructions = "⏸️ Voting is not currently active.";
            } else {
                instructions = "You are eligible to vote. Select a candidate below:";
                buttonDisabled = false;
            }

            document.getElementById("votingInstructions").textContent = instructions;

            // Enable/disable voting buttons
            const voteButtons = document.querySelectorAll(".vote-btn");
            voteButtons.forEach((button) => {
                button.disabled = buttonDisabled;
            });

        } catch (error) {
            console.error("Error checking voting status:", error);
            this.showStatus("Error checking voting status:", error.message, "error");
        }
    }

    async vote(candidateId) {
        try {
            const tx = await this.contract.vote(candidateId);
            this.showStatus("Submitting your vote... Please wait form confirmation.", "info");
            await tx.wait();
            this.showStatus("Vote submitted successfully! Thank you for participating.", "success");

            await this.loadElectionData();
        } catch (error) {
            console.error("Error voting", error);
            this.showStatus("Error submitting vote: ", error.message, "error");
        }
    }

    showStatus(message, type) {
        const statusDiv = document.createElement("connectionStatus");
        statusDiv.textContent = message;
        statusDiv.className = `status ${type}`;
    }

}

// Initialize the app
let app;
window.addEventListener('load', () => {
    app = new VotingApp();
})