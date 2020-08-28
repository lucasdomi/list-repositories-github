import React, { createContext, useState, useCallback, useContext } from 'react';

interface ThemeData {
  currentLoading: boolean;
  setLoading(type: boolean): void;
}

const Loading = createContext<ThemeData>({} as ThemeData);

export const LoadingProvider: React.FC = ({ children }) => {
  const [currentLoading, setCurrentTheme] = useState(false);

  const setLoading = useCallback((value) => {
    setCurrentTheme(value);
  }, []);

  return (
    <Loading.Provider value={{ currentLoading, setLoading }}>
      {children}
    </Loading.Provider>
  );
};

export function useLoading(): ThemeData {
  const context = useContext(Loading);
  if (!context) {
    throw new Error('useText must be used within a ThemeProvider');
  }
  return context;
}
