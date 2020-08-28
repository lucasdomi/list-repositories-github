import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface CurrentThemeProps {
  title: string;

  colors: {
    primary: string;
    background: string;
    backgroundCard: string;
    buttonSubmit: string;
  };
}

interface ThemeData {
  currentTheme: CurrentThemeProps;
  setTheme(): void;
}

const Theme = createContext<ThemeData>({} as ThemeData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const storageValue = localStorage.getItem('theme');

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return light;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  const setTheme = useCallback(() => {
    setCurrentTheme(currentTheme.title === 'light' ? dark : light);
  }, [currentTheme.title]);

  return (
    <Theme.Provider value={{ currentTheme, setTheme }}>
      {children}
    </Theme.Provider>
  );
};

export function useTheme(): ThemeData {
  const context = useContext(Theme);
  if (!context) {
    throw new Error('useText must be used within a ThemeProvider');
  }
  return context;
}
