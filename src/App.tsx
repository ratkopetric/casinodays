import React, { memo } from 'react';
import { AppRoutes } from '@/routes';
import ThemeProvider from '@/providers/ThemeProvider';
import Toast from '@/components/Toast';

const App = memo(() => {
  return (
    <ThemeProvider>
      <Toast />

      <AppRoutes />
    </ThemeProvider>
  );
});

export default App;
