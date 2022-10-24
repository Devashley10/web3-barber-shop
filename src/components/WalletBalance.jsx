import React from "react"

export const WalletBalance = ({ balance }) => {
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div className="wallet">{balance} cUSD</div>
    </div>
  )
}
