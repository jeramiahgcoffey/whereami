import { createContext } from 'react';

const localThemeState = localStorage.getItem('theme');
export const initialThemeState = localThemeState
  ? JSON.parse(localThemeState)
  : { mode: 'light' };

export const themeReducer = (
  state: { mode: string },
  action: { type: string }
) => {
  if (action.type === 'TOGGLE_DARK_MODE') {
    const result =
      state.mode === 'light'
        ? { ...state, mode: 'dark' }
        : { ...state, mode: 'light' };

    localStorage.setItem('theme', JSON.stringify({ mode: result.mode }));

    return result;
  }
  return state;
};

export const ThemeContext = createContext<{
  state: { mode: string };
  dispatch: React.Dispatch<any>;
}>({ state: initialThemeState, dispatch: () => null });
