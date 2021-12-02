// SPDX-License-Identifier: MIT  

pragma solidity ^0.8.7;

contract Veto {

    uint internal projectLength = 0;

    struct Project {
        address creator;
        string name;
        string info;
        bool exists;
        uint maxC;
        uint cost;
        Contestant[] contestants;
    }

    struct Contestant {
        address owner;
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
        uint _cost
    ) public {
        projects[projectLength].creator = msg.sender;
        projects[projectLength].name = _name;
        projects[projectLength].info = _info;
        projects[projectLength].exists = true;
        projects[projectLength].maxC = _maxC;
        projects[projectLength].cost = _cost;
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
    ) public {
        require( projects[_index].exists == true, "project doesn't exist");
        require( projects[_index].contestants.length < projects[_index].maxC, "Maximum number of contestants/propositions reached" );
        bool ifEntry = checkIfEntry(msg.sender, _index);
        require( !ifEntry, "An address can have only one entry" );
        projects[_index].contestants.push(Contestant(msg.sender, _name, _info, 0));
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

}