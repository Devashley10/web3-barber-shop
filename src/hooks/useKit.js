import { newKitFromWeb3 } from "@celo/contractkit"
import Web3 from "web3"
import { useState } from "react"
import barbershopAbi from "../contract/barbershop.abi.json"

export const useKit = () => {
  const [account, setAccount] = useState()
  const [kit, setkit] = useState()
  const [contract, setContract] = useState()

  const initializeContractKit = async (contractAddress) => {
    const web3 = new Web3(window.celo)
    let kit = newKitFromWeb3(web3)
    const accounts = await kit.web3.eth.getAccounts()
    kit.defaultAccount = accounts[0]
    let contract_ = new kit.web3.eth.Contract(barbershopAbi, contractAddress)
    setkit(kit)
    setAccount(kit.defaultAccount)
    setContract(contract_)
  }

  return {
    initializeContractKit,
    kit,
    account,
    contract,
  }
}
