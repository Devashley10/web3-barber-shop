import React, { useState, useEffect } from "react"
import "./sass/global.scss"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { createTheme, ThemeProvider, Container } from "@mui/material"
import { Nav } from "./components/Nav"
import { Dashboard } from "./pages/Dashboard"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5f9094",
      },
    },
  })
  const [celoConnected, setCeloConnected] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HashRouter>
          <div>
            <Nav />
          </div>
          <Routes>
            <Route
              path="/"
              element={<LandingPage isConnected={celoConnected} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
  )
}

export default App
