import React, {useCallback, useState} from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  InputBase,
  Slide,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import {TransitionProps} from "@mui/material/transitions";
import {useHistory} from "react-router";

import {ROUTES} from "@/constants";
import {UserModel} from "@/resources/models";
import {useAuthState, useLogout, useSetAccountAction, useShowToastAction} from "@/hooks/redux";
import {Button} from "@/components/Button";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const NavBar = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const { account } = useAuthState();
  const setAccount = useSetAccountAction();
  const logout = useLogout();
  const history = useHistory();
  const theme = useTheme();
  const showToast = useShowToastAction();

  const navigateToLogin = () => {
    history.push(ROUTES.LOGIN);
  }

  const navigateToApps = () => {
    history.push(ROUTES.APPS);
  }

  const handleClickLogout = () => {
    setOpenLogoutDialog(true);
  }

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  }

  const handleLogout = () => {
    handleCloseLogoutDialog();
    logout();
    showToast('logout successfully!');
  }

  const handleEditUsername = useCallback(() => {
    setUsername(account.username)
  }, [account]);

  const handleUpdateUsername = () => {
    setAccount({
      ...account,
      username
    } as UserModel);
    setUsername(undefined);
    showToast('username is updated successfully!');
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            ml: 'auto'
          }
        }}>
        {account !== null && (
          <>
            {username === undefined ? (
              <Typography sx={{ mr: 2 }}>{account.username}</Typography>
            ) : (
              <InputBase
                sx={{ color: '#fff' }}
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoFocus={true}
              />
            )}
            <Tooltip title={username !== undefined ? "Save" : "Settings"}>
              <IconButton onClick={username !== undefined ? handleUpdateUsername : handleEditUsername} size="large" color="inherit">
                {username !== undefined ? <CheckIcon /> : <SettingsIcon />}
              </IconButton>
            </Tooltip>
          </>
        )}
        <Tooltip title="Navigate to game browser">
          <IconButton onClick={navigateToApps} size="large" color="inherit">
            <AppsIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={account ? 'Logout' : 'Login'}>
          <IconButton onClick={account !== null ? handleClickLogout : navigateToLogin} size="large" color="inherit">
            {account !== null ? <LogoutIcon /> : <LoginIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog
        open={openLogoutDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseLogoutDialog}
      >
        <DialogTitle>{'Do you want log out?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleLogout}>Ok</Button>
          <Button onClick={handleCloseLogoutDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}