import React from "react"
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material"

export const SelectItem = ({ label, value, onChange, menu }) => {
  return (
    <FormControl fullWidth sx={{ marginTop: "1rem" }}>
      <InputLabel id={label} sx={{ textTransform: "capitalize" }}>
        {label}
      </InputLabel>
      <Select
        labelId={label}
        id={`${label}_id`}
        value={value}
        label={label}
        size="small"
        onChange={onChange}
        required
      >
        {menu.map((item, key) => {
          return (
            <MenuItem value={item} key={key}>
              {label === "service" || label === "priority" || label === "day"
                ? item.split("#")[1]
                : item}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
