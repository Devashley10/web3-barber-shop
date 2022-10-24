import { useState } from "react"

export const useTransactions = (contract) => {
  const [transactions, setTransactions] = useState()
  const getTransactions = async () => {
    try {
      const transactions = await contract.methods.getTransactions().call()
      setTransactions(transactions)
    } catch (error) {
      console.log(error)
    }
  }
  return { transactions, getTransactions }
}
