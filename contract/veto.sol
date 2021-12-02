// SPDX-License-Identifier: MIT  

pragma solidity ^0.8.7;

interface IERC20Token {
  function transfer(address, uint256) external returns (bool);
  function approve(address, uint256) external returns (bool);
  function transferFrom(address, address, uint256) external returns (bool);
  function totalSupply() external view returns (uint256);
  function balanceOf(address) external view returns (uint256);
  function allowance(address, address) external view returns (uint256);

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract Veto {

    uint internal projectLength = 0;

    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    struct Project {
        address payable creator;
        string name;
        string info;
        bool exists;
        uint maxC;
        uint costToEntry;
        uint costToVote;
        Contestant[] contestants;
    }

    struct Contestant {
        address payable owner;
        string name;
        string info;
        uint votes;
    }

    // Project[] public projects;
    mapping(uint => Project) internal projects;

    function addProject(
        string memory _name,
        string memory _info,
        uint _maxC,
        uint _costToEntry,
        uint _costToVote
    ) public {
        projects[projectLength].creator = payable(msg.sender);
        projects[projectLength].name = _name;
        projects[projectLength].info = _info;
        projects[projectLength].exists = true;
        projects[projectLength].maxC = _maxC;
        projects[projectLength].costToEntry = _costToEntry;
        projects[projectLength].costToVote = _costToVote;
        projectLength++;
    }

    function getFirstProject(uint _index) public view returns (Project memory) {
        return (
            projects[_index]
        );
    }

    function addContestant(
        uint _index,
        string memory _name,
        string memory _info
    ) public payable {
        require( projects[_index].exists == true, "project doesn't exist");
        require( projects[_index].contestants.length < projects[_index].maxC, "Maximum number of contestants/propositions reached" );
        bool ifEntry = checkIfEntry(msg.sender, _index);
        require( !ifEntry, "An address can have only one entry" );
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                projects[_index].creator,
                projects[_index].costToEntry
            ),
            "Transfer failed"
        );
        projects[_index].contestants.push(Contestant(payable(msg.sender), _name, _info, 0));
    }

    function checkIfEntry(address owner, uint _index) internal view returns (bool) {
        bool addressHasEntry = false;
        for (uint i=0; i < projects[_index].contestants.length; i++) {
            address cAddress = projects[_index].contestants[i].owner;
            if (owner == cAddress) {
                addressHasEntry = true;
                break;
            }
        }
        return addressHasEntry;
    }

    function getContestants(
        uint _projectIndex,
        uint _contIndex
    ) public view returns (address, string memory, uint) {
        return (
            projects[_projectIndex].contestants[_contIndex].owner,
            projects[_projectIndex].contestants[_contIndex].name,
            projects[_projectIndex].contestants[_contIndex].votes
        );
    }

    function addVote(uint _projectIndex, uint _contIndex) public payable {
        require( projects[_projectIndex].exists == true && projects[_projectIndex].contestants[_contIndex].owner != address(0) , "project or contestant doesn't exist");
        require( msg.sender != projects[_projectIndex].contestants[_contIndex].owner, "You can't vote for yourself" );
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                projects[_projectIndex].creator,
                projects[_projectIndex].costToVote
            ),
            "Transfer failed"
        );
        projects[_projectIndex].contestants[_contIndex].votes++;
    }
}

// contract Veto {

//     uint internal projectLength = 0;

//     struct Project {
//         address creator;
//         string name;
//         string info;
//         bool exists;
//         uint maxC;
//         uint cost;
//         Contestant[] contestants;
//     }

//     struct Contestant {
//         address owner;
//         string name;
//         string info;
//         uint votes;
//     }

//     // Project[] public projects;
//     mapping(uint => Project) internal projects;

//     function addProject(
//         string memory _name,
//         string memory _info,
//         uint _maxC,
//         uint _cost
//     ) public {
//         projects[projectLength].creator = msg.sender;
//         projects[projectLength].name = _name;
//         projects[projectLength].info = _info;
//         projects[projectLength].exists = true;
//         projects[projectLength].maxC = _maxC;
//         projects[projectLength].cost = _cost;
//         projectLength++;
//     }

//     function getFirstProject(uint _index) public view returns (Project memory) {
//         return (
//             projects[_index]
//         );
//     }

//     function addContestant(
//         uint _index,
//         string memory _name,
//         string memory _info
//     ) public {
//         require( projects[_index].exists == true, "project doesn't exist");
//         require( projects[_index].contestants.length < projects[_index].maxC, "Maximum number of contestants/propositions reached" );
//         bool ifEntry = checkIfEntry(msg.sender, _index);
//         require( !ifEntry, "An address can have only one entry" );
//         projects[_index].contestants.push(Contestant(msg.sender, _name, _info, 0));
//     }

//     function checkIfEntry(address owner, uint _index) internal view returns (bool) {
//         bool addressHasEntry = false;
//         for (uint i=0; i < projects[_index].contestants.length; i++) {
//             address cAddress = projects[_index].contestants[i].owner;
//             if (owner == cAddress) {
//                 addressHasEntry = true;
//                 break;
//             }
//         }
//         return addressHasEntry;
//     }


//     function getContestants(
//         uint _projectIndex,
//         uint _contIndex
//     ) public view returns (address, string memory, uint) {
//         return (
//             projects[_projectIndex].contestants[_contIndex].owner,
//             projects[_projectIndex].contestants[_contIndex].name,
//             projects[_projectIndex].contestants[_contIndex].votes
//         );
//     }

// }