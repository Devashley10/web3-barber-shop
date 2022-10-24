import React from "react"
import { Button } from "@mui/material"
import barber from "../images/barber.png"
import celoIcon from "../images/celo.jpg"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import StarIcon from "@mui/icons-material/Star"
import { Icon } from "@mui/material"
import { Link } from "react-router-dom"

export const LandingPage = ({ isConnected }) => {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="landing">
      <div className="landing-text">
        <h2>
          We are looking to make you{" "}
          <span style={{ color: "#5f9094" }}>handsome</span>
        </h2>
        <p>
          You'll leave{" "}
          <span style={{ color: "#f4ac45", fontWeight: "500" }}>
            lookin' sharp
          </span>
          , relaxed and ready to take on the world, with the swagger in your
          stride. Make a reservation, be a gentleman.
        </p>
        <Link to={"/dashboard"}>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", marginTop: "1rem" }}
            size="large"
            startIcon={<Icon component={AccountBalanceWalletIcon} />}
          >
            Book Appointment
          </Button>
        </Link>

        <div className="celo">
          <div className="celo-logo">
            <img src={celoIcon} alt="celo logo" />
          </div>
          <div>
            <h4>#1 Payment Option</h4>
            <small>Pay Seemlessly with Celo usd</small>
            <div style={{ marginTop: "0.2rem" }}>
              {stars.map((star) => (
                <Icon
                  key={star}
                  component={StarIcon}
                  sx={{ fontSize: "1rem", color: "#f4ac45" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="landing-img">
        <img src={barber} alt="A Barber" />
        <div className="landing-img-box-1"></div>
        <div className="landing-img-box-2"></div>
      </div>
    </div>
  )
}
