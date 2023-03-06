import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <nav className=" bg-white dark:bg-dark-mode-el drop-shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto h-24 px-4">
        <Link to="/">
          <h2 className="font-extrabold text-xl md:text-2xl">
            Where in the world?
          </h2>
        </Link>
        <div
          className="flex items-center cursor-pointer text-14"
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
