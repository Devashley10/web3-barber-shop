import React from "react"
import { IconButton, Alert, Collapse } from "@mui/material"
import { BookAppointment } from "../components/BookAppointment"
import CloseIcon from "@mui/icons-material/Close"
import { WalletBalance } from "../components/WalletBalance"
import erc20Abi from "../contract/erc20.abi.json"
import { useBalance } from "../hooks/useBalance"
import { useAddress } from "../hooks/useAddress"
import { useNotify } from "../hooks/useNotify"
import { useKit } from "../hooks/useKit"
import { useTransactions } from "../hooks/useTransactions"

export const Dashboard = () => {
  const ERC20_DECIMAL = 18
  const { setWarning, setSuccess, severity, ...notifyRest } = useNotify()
  const { showSuccess, showWarning, warningMsg, successMsg } = notifyRest
  const [open, setOpen] = React.useState(true)
  const [paymentStatus, setPaymentStatus] = React.useState({
    show: false,
    message: "",
    severity: "warning",
  })
  const { initializeContractKit, kit, account, contract } = useKit()
  const { getBalance, balance } = useBalance(kit, ERC20_DECIMAL)
  const { cUSDContractAddress, contractAddress } = useAddress()
  const { getTransactions, transactions } = useTransactions(contract)

  const connectWallet = async () => {
    if (window.celo) {
      setWarning("warning", "Please approve this DApp to use it.")
      try {
        await window.celo.enable()
        setSuccess("Celo Wallet is Enabled!")
        await initializeContractKit(contractAddress)
      } catch (error) {
        setWarning("error", error.message)
      }
    } else {
    }
  }

  const approve = async (amount) => {
    const cUSDContract = new kit.web3.eth.Contract(
      erc20Abi,
      cUSDContractAddress
    )
    const result = await cUSDContract.methods
      .approve(contractAddress, amount)
      .send({ from: kit.defaultAccount })
    return result
  }

  React.useEffect(() => {
    connectWallet()
  }, [])
  React.useEffect(() => {
    if (kit && account && contract) {
      getBalance()
      getTransactions()
    }
  }, [kit, account, contract])

  return (
    <>
      {showWarning && (
        <Alert severity={severity} sx={{ mb: 2 }}>
          {warningMsg}
        </Alert>
      )}
      {paymentStatus.show && (
        <Alert severity={paymentStatus.severity} sx={{ mb: 2 }}>
          {paymentStatus.message}
        </Alert>
      )}
      {showSuccess && !showWarning ? (
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {successMsg}
          </Alert>
        </Collapse>
      ) : (
        <></>
      )}
      {!showWarning && (
        <div className="dashboard">
          <WalletBalance balance={balance} />
          <div>
            <BookAppointment
              contract={contract}
              approve={approve}
              setMsg={setPaymentStatus}
              kit={kit}
              getBalance={getBalance}
              getTransactions={getTransactions}
              transactions={transactions}
            />
          </div>
        </div>
      )}
    </>
  )
}
