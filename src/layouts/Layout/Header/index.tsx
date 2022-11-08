import React from "react";
import {AppBar, Box, Toolbar} from "@mui/material";

import {SearchInput} from "@/components/SearchInput";
import {useChangeFilterAction, useGameState} from "@/hooks/redux";
import {NavBar} from "@/layouts/Layout/NavBar";

export const LayoutHeader = () => {
  const changeFilter = useChangeFilterAction();
  const { filterBy } = useGameState();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <SearchInput value={filterBy} onChange={changeFilter} />
        <Box sx={{ flexGrow: 1 }} />
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}