import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function FreeSolo() {
  return (
    <Stack spacing={1} sx={{ width: 400, margin: "-10px 10px" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Youtube Search..." />
        )}
      />
    </Stack>
  );
}

const top100Films = [
  { title: "Youtube Clones", year: 2022 },
  { title: "React Tutorials", year: 2021 },
];
