import { Button } from "@mui/material"
import React, { useState } from "react"
import { Logo } from "./Logo"
import { Ham } from "./Ham"
import { useLocation, Link } from "react-router-dom"

export const Nav = () => {
  const location = useLocation()
  const [active, setActive] = useState(false)
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <Logo />
        </Link>
        {location.pathname === "/" && (
          <>
            <div className="menu-btn">
              {/* <ConnectWallet /> */}
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  Book appointment
                </Button>
              </Link>
            </div>
            <Ham active={active} setActive={setActive} />
          </>
        )}
        {location.pathname === "/dashboard" && <h3>User Dashboard</h3>}
      </nav>
      {location.pathname === "/" && (
        <div>
          <MobileNav active={active} />
        </div>
      )}
    </>
  )
}

export const MobileNav = ({ active }) => {
  return (
    <div className={`mobile-nav ${active ? "active" : ""}`}>
      <div>
        <div className="">
          {/* <ConnectWallet /> */}
          <Link to="/dashboard">
            <Button variant="contained" sx={{ textTransform: "capitalize" }}>
              Book appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
