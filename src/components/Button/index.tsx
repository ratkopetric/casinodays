import React, { FC } from 'react';
import {
  LoadingButton,
  LoadingButtonProps
} from '@mui/lab';
import { SxProps } from '@mui/system';

export type ButtonProps = {
  loading?: boolean;
} & LoadingButtonProps & SxProps;

export const Button: FC<ButtonProps> = ({
  loading,
  disabled,
  sx,
  children,
  ...props
}) => {
  return (
    <LoadingButton
      disabled={disabled}
      sx={{
        minWidth: '100px',
        ...sx,
      }}
      loading={loading}
      {...props}
    >
      {children}
    </LoadingButton>
  );
};
