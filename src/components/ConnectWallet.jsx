import React, { useState, useEffect } from "react"
import { Button, Icon } from "@mui/material"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import Logout from "@mui/icons-material/Logout"

export const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(true)
  // toast("🦄 Wow so easy!", {
  //   position: toast.POSITION.TOP_CENTER,
  // })

  return (
    <>
      {isConnected ? (
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          size="medium"
          startIcon={<Icon component={Logout} />}
          color="error"
          disabled
        >
          Disconnect Wallet
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          size="medium"
          startIcon={<Icon component={AccountBalanceWalletIcon} />}
        >
          Connect Wallet
        </Button>
      )}
    </>
  )
}
