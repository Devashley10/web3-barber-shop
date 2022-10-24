import React from "react"

export const Ham = ({ active, setActive }) => {
  return (
    <>
      <div
        className={`ham ${active ? "active" : ""}`}
        onClick={() => {
          if (active) setActive(false)
          else setActive(true)
        }}
      >
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </>
  )
}
