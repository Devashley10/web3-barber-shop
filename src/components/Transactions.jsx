import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import BigNumber from "bignumber.js"

export const Transactions = ({ transactions }) => {
  return (
    <div className="book-history">
      <h1>Booking History</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>S/N</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Service
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Day
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Time
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Priority
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Expired
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Amount(cUSD)
              </TableCell>
            </TableRow>
          </TableHead>

          {!transactions ? (
            <small style={{ padding: "1rem" }}>No Transactions!</small>
          ) : (
            transactions.map((row, key) => (
              <TableBody key={key}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {key}
                  </TableCell>
                  <TableCell align="right">{row.service}</TableCell>
                  <TableCell align="right">{row.day}</TableCell>
                  <TableCell align="right">{row.time}</TableCell>
                  <TableCell align="right">{row.priority}</TableCell>
                  <TableCell align="right">
                    {Number(row.expiration_time) - Date.now() > 0
                      ? "false"
                      : "true"}
                  </TableCell>
                  <TableCell align="right">
                    {[new BigNumber(row.amount).c][0] / 10000}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))
          )}
        </Table>
      </TableContainer>
    </div>
  )
}
