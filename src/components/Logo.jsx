import React from "react"
import ContentCutIcon from "@mui/icons-material/ContentCut"
import { Icon } from "@mui/material"

export const Logo = () => {
  return (
    <div className="logo">
      <Icon component={ContentCutIcon} color="primary" />
      <div className="logo-text">
        <span>The</span>
        <span style={{ color: "#5f9094" }}>cut</span>
      </div>
    </div>
  )
}
