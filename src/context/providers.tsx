import { ThemeContext, themeReducer, initialThemeState } from './ThemeContext';

import { useReducer } from 'react';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
