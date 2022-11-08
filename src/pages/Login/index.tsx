import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Box, Typography, Paper } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ROUTES } from '@/constants';
import { useLoginAction } from '@/hooks/redux/auth';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import {showToastAction} from "@/redux/actions";
import {useShowToastAction} from "@/hooks/redux";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('This field should not be null!'),
  password: Yup.string().required('This field should not be null!').min(8, 'Short password!')
});

const Login = () => {
  const login = useLoginAction();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const showToast = useShowToastAction();

  const handleSubmit = (values: any) => {
    const { email, password } = values;

    setLoading(true);
    login(email, password);
    setLoading(false);
    showToast('login successfully!');
    goBack();
  };

  const goBack = () => {
    history.push(ROUTES.HOME);
  }

  const form = useFormik({
    validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit
  });

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          m: 'auto',
        }}>
        <Typography variant="h4" color="primary" mb={10}>{'Login'}</Typography>

        <form onSubmit={form.handleSubmit}>
          <Input
            fullWidth
            label={'Email'}
            placeholder={'Insert email'}
            sx={{ mb: 3 }}
            {...form.getFieldProps('email')}
            errorText={ (form.errors.email && form.touched.email) ? (form.errors.email as string) : ''}
          />

          <Input
            fullWidth
            type="password"
            label={'Password'}
            placeholder={'Enter password'}
            sx={{ mb: 10 }}
            {...form.getFieldProps('password')}
            errorText={ form.errors.password && form.touched.password ? (form.errors.password as string) : ''}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              color="primary"
              loading={loading}
            >
              {'Login'}
            </Button>
            <Button
              onClick={goBack}
              color="primary"
              variant="contained"
            >
              {'Cancel'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
