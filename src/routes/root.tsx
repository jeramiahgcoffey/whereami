import { Outlet } from 'react-router-dom';
import ThemeProvider from '../context/providers';

export default function Root() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
