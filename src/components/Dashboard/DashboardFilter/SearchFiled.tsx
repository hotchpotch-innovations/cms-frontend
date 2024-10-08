import { Stack, TextField, Typography } from "@mui/material";

type TSearchFiledProps = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFiled = ({ setSearchText }: TSearchFiledProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };
  return (
    <div>
      <Stack>
        <Typography color={"primary.main"} align="center">
          Search By Text
        </Typography>
        <TextField
          onChange={handleChange}
          sx={{ m: 1, minWidth: 120, width: "250px" }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
      </Stack>
    </div>
  );
};

export default SearchFiled;
