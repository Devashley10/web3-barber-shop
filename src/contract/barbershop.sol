//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


interface IERC20Token {
  function transferFrom(address, address, uint256) external returns (bool);
}

contract BarberShop {
    /// @dev List of barber services
    enum Service {
        HairCut,
        Treatment,
        Washing,
        BeardTrim
    }

    /// @dev List of priorities
    enum Priority {
        Regular,
        VIP,
        HomeService
    }

    /// @dev Structure of transaction detail
    struct TransactionDetails {
        Service service;
        Priority priority;
        uint256 amount;
        uint256 bookAt;
        uint256 expiredAt;
    }

    mapping(Service => uint256) public servicePrices;
    mapping(Priority => uint256 public additionalPrices);
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    address internal shopAddress = 0xA2fb54295438715198505c466195a22c7e4e6d65;

    mapping(address => TransactionDetails[]) internal transactions;
    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner, "access denied");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function bookAppointment(
        Service _service,
        Priority _priority,
        uint256 _amount,
        uint256 _bookAt,
        uint256 _expiredAt
    ) public {
        require(block.timestamp < _bookAt && _bookAt < _expiredAt, "invalid timestamp");
        uint256 totalPrice = servicePrices[_service] + additionalPrices[_priority];
        require(_amount == totalPrice, "not enough deposit");

        transactions[msg.sender].push(TransactionDetails(
            _service, _priority, _amount, _bookAt, _expiredAt
        ));

        // prevent reentrancy attacks
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                shopAddress,
                _amount
            ),
            "Transfer Attempt Failed!"
        );
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

    function setServicePrice(Service _service, uint256 _price) external onlyOwner {
        servicePrices[_service] = _price;
    }

    function setAdditionalPrice(Priority _priority, uint256 _price) external onlyOwner {
        additionalPrices[_priority] = _price;
    }

    function setOwner(address _newOwner) external onlyOwner {
        owner = _newOwner;
    }
}