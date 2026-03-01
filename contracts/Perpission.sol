// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Perpission {

struct Position{

address trader;

string pair;

uint amount;

uint leverage;

}

Position[] public positions;

function openPosition(

string memory pair,

uint amount,

uint leverage

) public {

positions.push(

Position(

msg.sender,

pair,

amount,

leverage

)

);

}

function getPositions()

public view returns(uint){

return positions.length;

}

}
