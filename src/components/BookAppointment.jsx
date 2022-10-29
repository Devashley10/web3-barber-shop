import React from "react"
import { Button } from "@mui/material"
import celoIcon from "../images/celo.png"
import { Transactions } from "./Transactions"
import BigNumber from "bignumber.js"
import { SelectItem } from "./Select"
import { dateFormater } from "../hooks/useDate"

export const BookAppointment = ({
  contract,
  approve,
  setMsg,
  kit,
  getBalance,
  getTransactions,
  transactions,
}) => {
  const [service, setService] = React.useState("")
  const [day, setDay] = React.useState("")
  const [time, setTime] = React.useState("")
  const [priority, setPriority] = React.useState("")
  const [amount, setAmount] = React.useState(0)
  const [prices, setPrices] = React.useState([])
  const getPrices = async () => {
    try {
      const prices = await contract.methods.getPrices().call()
      setPrices(prices)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    if (contract && kit) {
      getPrices()
    }
  }, [contract, kit])
  const day_ = (dayNumber) =>
    new Date(new Date().setDate(new Date().getDate() + dayNumber))
  const onBooking = async (e) => {
    const big = 1e18
    e.preventDefault()
    setMsg({
      show: true,
      message: "Waiting for Payment approval",
      severity: "warning",
    })

    try {
      await approve(new BigNumber(Number(amount) * big).toString())
    } catch (error) {
      setMsg({
        show: true,
        message: error.message,
        severity: "error",
      })
    }
    setMsg({
      show: true,
      message: "Awaiting Payment...",
      severity: "warning",
    })
    try {
      await contract.methods
        .bookAppointment(
          service.split("#")[1],
          day.split("#")[1],
          time,
          priority.split("#")[1],
          new BigNumber(Number(amount) * big).toString(),
          `${Date.now() + Number(day.split("#")[0])}`
        )
        .send({ from: kit.defaultAccount })
      setMsg({
        show: true,
        message: `You successfully Booked an Appointment with a barber.`,
        severity: "success",
      })
      await getBalance()
      await getTransactions()
    } catch (error) {
      setMsg({
        show: true,
        message: error.message,
        severity: "error",
      })
    }
  }

  React.useEffect(() => {
    const [serviceAmount, priorityAmount] = [
      Number(service.split("#")[0]),
      Number(priority.split("#")[0]),
    ]
    setAmount(() => serviceAmount + priorityAmount)
  }, [service, priority])
  return (
    <div className="book">
      <form className="appointment-form" onSubmit={onBooking}>
        <h3>Book Appointment</h3>
        <SelectItem
          label={"service"}
          onChange={(e) => setService(e.target.value)}
          value={service}
          menu={[
            `${prices.hair_cut}#Hair Cut`,
            `${prices.beard_trim}#Beard Trim`,
            `${prices.treatment}#Treatment`,
            `${prices.washing}#Washing`,
          ]}
        />
        <SelectItem
          label={"day"}
          onChange={(e) => setDay(e.target.value)}
          value={day}
          menu={[
            `8.64e7#${dateFormater(day_(1)).date}`,
            `1.728e8#${dateFormater(day_(2)).date}`,
            `2.592e8#${dateFormater(day_(3)).date}`,
            `3.456e8#${dateFormater(day_(4)).date}`,
            `4.32e8#${dateFormater(day_(5)).date}`,
          ]}
        />
        <SelectItem
          label={"time"}
          onChange={(e) => setTime(e.target.value)}
          value={time}
          menu={["9am", "10:30am", "12pm", "1:30pm", "3pm"]}
        />

        <SelectItem
          label={"priority"}
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          menu={[
            `${prices.vip}#VIP`,
            `${prices.regular}#Regular`,
            `${prices.home_service}#Home service`,
          ]}
        />
        <p>
          Amount Payable:{" "}
          <span style={{ fontWeight: "bold" }}>{`${amount} cUSD`}</span>
        </p>

        <Button variant="contained" fullWidth type="submit">
          Pay with Celo USD{" "}
          <img
            src={celoIcon}
            alt=""
            style={{ height: "100%", width: "1.5rem" }}
          />
        </Button>
      </form>
      <Transactions transactions={transactions} />
    </div>
  )
}
