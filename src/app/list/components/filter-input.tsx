import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  filterValue: string;
  setFilterValue: (value: string) => void;
  filterkey: string;
  setFilterkey: (value: string) => void;
};

export default function FilterInput({
  filterValue,
  setFilterValue,
  filterkey,
  setFilterkey,
}: Props) {
  return (
    <div className="w-full bg-white rounded shadow p-4">
      <div className="grid grid-cols-[70%,30%]">
        <TextField
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          label="Search"
          size="small"
          className="w-full"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="text-darkGrey left-2" />
              </InputAdornment>
            ),
          }}
        />
        <div className="pl-4">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Field</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterkey}
              label="Age"
              onChange={(e) => {
                setFilterkey(e.target.value);
              }}
            >
              <MenuItem value={"id"}>Id</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"email"}>Email</MenuItem>
              <MenuItem value={"phone"}>Phone</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
