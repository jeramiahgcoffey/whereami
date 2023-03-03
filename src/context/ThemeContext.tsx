import { createContext } from 'react';

export const initialThemeState = { mode: 'light' };

export const themeReducer = (
  state: { mode: string },
  action: { type: string }
) => {
  if (action.type === 'TOGGLE_DARK_MODE') {
    return state.mode === 'light'
      ? { ...state, mode: 'dark' }
      : { ...state, mode: 'light' };
  }
  return state;
};

export const ThemeContext = createContext<{
  state: { mode: string };
  dispatch: React.Dispatch<any>;
}>({ state: initialThemeState, dispatch: () => null });
