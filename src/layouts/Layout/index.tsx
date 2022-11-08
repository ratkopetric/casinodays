import React, {ReactNode} from "react";
import Box from "@mui/material/Box";

import {LayoutHeader} from "@/layouts/Layout/Header";
import {useTheme} from "@mui/material";

export const Layout = ({children}: {children: ReactNode}) => {
  const theme = useTheme();

  return (
    <Box>
      <LayoutHeader />
      <Box
        sx={{
          height: '100vh',
          p: 4,
          pt: 8,
          [theme.breakpoints.down('sm')]: {
            pt: '103px'
          }
        }}>
        {children}
      </Box>
    </Box>
  );
};