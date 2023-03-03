import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

export default function Navbar() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <nav className="dark:bg-dark-mode-el drop-shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto h-24 ">
        <h2 className="font-extrabold text-2xl">Where in the world?</h2>
        <div
          className="flex items-center cursor-pointer"
          onClick={() =>
            dispatch({
              type: 'TOGGLE_DARK_MODE',
            })
          }
        >
          {state.mode === 'light' ? (
            <FaRegMoon className="mr-3" />
          ) : (
            <FaRegSun className="mr-3" />
          )}

          <span className="font-bold capitalize">
            {state.mode === 'light' ? 'dark' : 'light'} Mode
          </span>
        </div>
      </div>
    </nav>
  );
}
