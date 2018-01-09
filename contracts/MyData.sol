pragma solidity ^0.4.10;

contract MyData {
    uint data;

    function set(uint x) public {
        data = x;
    }

    function get() public constant returns (uint retVal) {
        return data;
    }
}
