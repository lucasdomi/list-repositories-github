import React from 'react';

import { ThemeProvider } from './color';
import { LoadingProvider } from './loading';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    <LoadingProvider>{children}</LoadingProvider>
  </ThemeProvider>
);

export default AppProvider;
