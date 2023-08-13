pragma solidity ^0.5.0;

contract IdentityContract {
    struct User {
        address walletAddress;
        string publicKey;
    }

    struct Session {
        address user;
        bool active;
    }

    mapping(address => User) private users;
    mapping(address => Session) private sessions;

    function registerUser(address walletAddress, string memory publicKey) public {
        User memory newUser = User(walletAddress, publicKey);
        users[walletAddress] = newUser;
    }

    function authenticate(address walletAddress) public view returns (bool) {
        User memory user = users[walletAddress];
        return user.walletAddress != address(0);
    }

    function startSession(address walletAddress) public {
        require(authenticate(walletAddress), "User not authenticated");
        Session memory newSession = Session(walletAddress, true);
        sessions[walletAddress] = newSession;
    }

    function endSession(address walletAddress) public {
        require(authenticate(walletAddress), "User not authenticated");
        Session memory session = sessions[walletAddress];
        session.active = false;
        sessions[walletAddress] = session;
    }

    function getSession(address walletAddress) public view returns (bool) {
        Session memory session = sessions[walletAddress];
        return session.active;
    }
}