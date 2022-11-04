//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
/**
@author Devashley10 on github
@title Barbing shop smart contract
*/

contract BarberShop {

    address payable public owner;


    constructor(){
        owner = payable(msg.sender);
    }

    /**
    user defined variable called prices
    */
    struct prices {
        uint hair_cut;
        uint treatment;
        uint washing;
        uint beard_trim;
        uint regular;
        uint vip;
        uint home_service;
    }

    /**
    user defined variable called TransactionDetails
    */
    struct TransactionDetails {
        string service;
        uint Startdate;
        string priority;
        uint amount;
    }

    /** Prices of various services offered

    key => value

    haircut => 5

    treatment => 7

    washing => 4

    beard_trim => 3

    regular => 2

    vip => 5

    home_service => 10

    */

    prices public servicePrices = prices(5,7,4,3,2,5,10);

    /// The latst booked date
    uint public latest_booking_date;

    mapping(address => TransactionDetails[]) internal transactions;

    event bookings(address _sender,uint _date, uint price);

    /**
    @dev function to book an appointment
    @param _service The service being rendered
    @param _day The date of booking appointment
    @param _day The Priority of the booked appointment (important or casual)
    @param _day The cost of the booked appointment
    */
    function bookAppointment(
        string memory _service,
        uint _day,
        string memory _priority,
        uint _amount
    ) public payable
    {
        require(_day > (latest_booking_date + 3600), "You have to book one hour ahead of the latest booked time");
        require(_day > ((block.timestamp) + 3600), "It must be ahead of current time by an hour");
        (bool sent,) = payable(owner).call{value: _amount}("");
        require(sent, "Failed to send amount");

        latest_booking_date = _day;

        transactions[payable(msg.sender)].push(TransactionDetails(
            _service, _day, _priority, _amount
        ));

        address _sender = (msg.sender);

        emit bookings(_sender,_day,_amount);
    }

    /**
    @dev function to get transaction of a particular address
    @param _booked_Address The address with a booked transaction
    @return array The array gives every detail of the transaction
    */

    function getTransactions(
        address _booked_Address
        ) 
    public view returns(TransactionDetails[] memory){
        TransactionDetails[] memory _transactions = transactions[msg.sender];
        return _transactions;
    }

}
