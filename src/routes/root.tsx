import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import countries from '../../data';

export function loader() {
  return { countries };
}

export default function Root() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={state.mode}>
      <div className="bg-light-mode-bg dark:bg-dark-mode-bg dark:text-white text-light-mode-text font-semibold text-16 min-h-screen h-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
