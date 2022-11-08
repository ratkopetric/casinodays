import React, { FC } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from '@/themes';

const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
