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

    /**
        * @dev allow users to book an appointment
        * @notice Input data needs to contain only valid/non-empty values
     */
    function bookAppointment(
        string calldata _service,
        string calldata _day,
        string calldata _time,
        string calldata _priority,
        string memory _expiration_time,
        uint _amount
    ) public payable
    {
        require(bytes(_service).length > 0, "Invalid service selected");
        require(bytes(_day).length > 0, "Empty day");
        require(bytes(_time).length > 0, "Empty time");
        require(bytes(_priority).length > 0, "Empty priority");
        require(bytes(_expiration_time).length > 0, "Empty expiration time");
        // ensures that amount is found in servicePrices
        require(_amount == 5 || _amount == 7 ||_amount == 4 ||_amount == 3 ||_amount == 0 || _amount == 10, "Invalid amount");
        transactions[payable(msg.sender)].push(TransactionDetails(
            _service, _day, _time, _priority, _amount, _expiration_time
        ));
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                payable(shopAddress),
                _amount
            ),
            "Transfer Attempt Failed!"
        );

    }

    /**
        * @dev reverses the array a from newest added value to oldest value
     */
    function reverse(TransactionDetails[] memory a) internal pure returns (TransactionDetails[] memory) {
        TransactionDetails memory t;
        uint length = a.length;
        for (uint i = 0; i < length / 2; i++) {
            t = a[i];
            a[i] = a[length - i - 1];
            a[length - i - 1] = t;
        }
        return a;
    }

    /**
        * @dev return transactions for barber shop from most recent to oldest
     */
    function getTransactions() public view returns(TransactionDetails[] memory){
        TransactionDetails[] memory _transactions = reverse(transactions[msg.sender]);
        return _transactions;
    }

}
