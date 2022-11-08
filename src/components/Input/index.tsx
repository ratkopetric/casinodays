import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, TextFieldProps, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SxProps } from '@mui/system';

export type InputProps = {
 className?: string;
 errorText?: string;
 showErrorText?: boolean;
} & TextFieldProps & SxProps

export const Input: FC<InputProps> = ({
  className = '',
  type = 'text',
  errorText,
  showErrorText = true,
  ...props
}) => {
  const [t] = useTranslation('common');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={type !== 'password' ? type : (showPassword ? 'text' : 'password')}
      InputProps={{
        endAdornment: type === 'password' ? (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={(e) => e.preventDefault()}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ) : null
      }}
      error={!!errorText}
      helperText={showErrorText ? t(errorText) : ''}
      {...props}
    />
  )
};
