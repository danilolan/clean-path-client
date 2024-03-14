import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFilter } from "../context/useFilter";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { error } from "console";

type Inputs = {
  value: string;
};

export default function FilterInput() {
  const { filterValue, setFilterValue, filterKey, setFilterKey } = useFilter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ value }) => {
    setFilterValue(value);
  };

  console.log(errors);
  return (
    <div className="grid grid-cols-[70%,30%] w-full bg-white rounded shadow p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="value"
          control={control}
          defaultValue={filterValue}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              {...fieldState}
              error={!!errors.value}
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
          )}
        />
      </form>
      <div className="pl-4">
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Field</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterKey}
            label="Age"
            onChange={(e) => {
              setFilterKey(e.target.value);
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
  );
}
