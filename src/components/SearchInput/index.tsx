import React, {FC} from "react";
import SearchIcon from '@mui/icons-material/Search';

import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "./styles";

interface SearchInputProps {
  value: string;
  onChange(val: string): void;
}

export const SearchInput: FC<SearchInputProps> = (props: SearchInputProps) => {
  const { value, onChange } = props;

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search games..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}