import React from "react"

export const useBalance = (kit, ERC20_DECIMAL) => {
  const [balance, setBalance] = React.useState(0)
  const getBalance = async () => {
    try {
      let totalBalance = await kit.getTotalBalance(kit.defaultAccount)
      let cUSDBalance = totalBalance.cUSD.shiftedBy(-ERC20_DECIMAL).toFixed(2)
      setBalance(cUSDBalance)
    } catch (error) {
      console.log(error)
    }
  }

  return { getBalance, balance }
}
