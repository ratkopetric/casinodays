import React from 'react';
import {
  Alert as MuiAlert,
  AlertProps,
  Snackbar
} from '@mui/material';
import {
  useHideToastAction,
  useToastState,
} from '@/hooks/redux';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = () => {
  const { show, type, content } = useToastState();
  const hideToast = useHideToastAction();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
      open={show}
      onClose={hideToast}
      sx={{ maxWidth: '400px' }}
    >
      <Alert onClose={hideToast} severity={type} sx={{ width: '100%' }} >
        {content}
      </Alert>
    </Snackbar>
  )
};

export default Toast;
