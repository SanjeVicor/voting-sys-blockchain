pragma solidity ^0.5.16;

contract Election {
  struct Candidate {
    uint id;
    string name;
    string group;
    string state;
    uint voteCount;
    string imageURL;
    string speech;
    string proporsals;
  }

  // voted event
  event votedEvent (
      uint indexed _candidateId
  );

  //store voters
  mapping( address => bool ) public voters;

  // store candidates
  mapping( uint => Candidate ) public candidates;
  
  uint public candidatesCount = 0;

  constructor () public {
    addCandidate(
      "Alfaro",
      "M.C.",
      "Jalisco",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "https://pbs.twimg.com/profile_images/1169714415693914113/Rz13l6k8_400x400.jpg",
      "Propuesta MC 1,Propuesta MC 2,Propuesta MC 3"
    );

    addCandidate(
      "Lopez",
      "Morena",
      "Jalisco",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "https://c.tcdn.co/8e3/864/8e386432-105c-11e9-bfd7-866420764000/channel256.png",
      "Propuesta Morena 1,Propuesta Morena 2,Propuesta Morena 3"
    );
  }

  function addCandidate ( 
    string memory _name, string memory _group, string memory _state,
    string memory _speech, string memory _image, 
    string memory _proporsal1
  ) private {
    candidates[candidatesCount] = Candidate(
      candidatesCount,
      _name,
      _group,
      _state,
      0,
      _image,
      _speech,
      _proporsal1
    );
    candidatesCount++;
  }

  function vote ( uint _candidateID ) public {
    // require that voter has not voted before
    require( 
      !voters[msg.sender],
      "Ya existe un voto referente a tu cuenta"
    );
    // require that candidate exists
    require(
      _candidateID >= 0,
      "ID de candidato incorrecto, contacta al administrador o encargado"
    );
    // our ids start from zero
    require(
      _candidateID < candidatesCount,
      "ID de candidato incorrecto, contacta al administrador o encargado"
    );
    // record voter has voted
    voters[msg.sender] = true;
    // update counter for votes
    candidates[_candidateID].voteCount++;   
    // trigger voted event
    emit votedEvent(_candidateID);
  }
}