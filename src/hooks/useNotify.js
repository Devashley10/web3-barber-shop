import { useState } from "react"

export const useNotify = () => {
  const [showWarning, setShowWarning] = useState(false)
  const [warningMsg, setWarningMsg] = useState("")
  const [severity, setSeverity] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  const setWarning = (severity, message) => {
    setShowWarning(true)
    setWarningMsg(message)
    setSeverity(severity)
  }

  const setSuccess = (message) => {
    setShowWarning(false)
    setShowSuccess(true)
    setSuccessMsg(message)
  }

  return {
    setWarning,
    setSuccess,
    severity,
    successMsg,
    warningMsg,
    showWarning,
    showSuccess,
  }
}
