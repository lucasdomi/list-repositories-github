import React from 'react';

import { ThemeProvider } from './color';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
