//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


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

contract BarberShop {
    struct prices {
        uint hair_cut;
        uint treatment;
        uint washing;
        uint beard_trim;
        uint regular;
        uint vip;
        uint home_service;
    }

    struct TransactionDetails {
        string service;
        string day;
        string time;
        string priority;
        uint amount;
        string expiration_time;
    }

    prices public servicePrices = prices(5,7,4,3,0,5,10);
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    address internal shopAddress = 0xA2fb54295438715198505c466195a22c7e4e6d65;

    mapping(address => TransactionDetails[]) internal transactions;

   

    function getPrices() public view returns (prices memory){
        return servicePrices;
    }

    function bookAppointment(
        string memory _service,
        string memory _day,
        string memory _time,
        string memory _priority,
        uint _amount,
        string memory _expiration_time
    ) public payable
    {
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                payable(shopAddress),
                _amount
            ),
            "Transfer Attempt Failed!"
        );
        transactions[payable(msg.sender)].push(TransactionDetails(
            _service, _day, _time, _priority, _amount, _expiration_time
        ));
    }

    function reverse(TransactionDetails[] memory a) internal pure returns (bool) {
        TransactionDetails memory t;
        for (uint i = 0; i < a.length / 2; i++) {
            t = a[i];
            a[i] = a[a.length - i - 1];
            a[a.length - i - 1] = t;
        }
        return true;
    }

    function getTransactions() public view returns(TransactionDetails[] memory){
        TransactionDetails[] memory _transactions = transactions[msg.sender];
        reverse(_transactions);
        return _transactions;
    }

}