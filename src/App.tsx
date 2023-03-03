import Navbar from './Navbar';
import { FaSearch, FaArrowDown } from 'react-icons/fa';
import countries from '../data';
import CountryCard from './CountryCard';

import { useContext, useState } from 'react';
import ThemeProvider from './context/providers';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { state } = useContext(ThemeContext);

  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(() => e.target.value);
  };

  return (
    <>
      <ThemeProvider>
        <div className={state.mode}>
          <div className="dark:text-white text-light-mode-text font-semibold text-16">
            <Navbar />
            <main className=" bg-light-mode-bg dark:bg-dark-mode-bg h-full">
              <div className="max-w-6xl mx-auto">
                <div className="py-12">
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <FaSearch className="absolute top-1/2 transform -translate-y-1/2 ml-4 pointer-events-none text-light-mode-input dark:text-white" />
                      <input
                        type="text"
                        placeholder="Search for a country..."
                        className="dark:bg-dark-mode-el placeholder:dark:text-white placeholder:text-light-mode-input  placeholder:text-sm w-96 pl-12 pr-2 py-4 rounded-lg"
                        onChange={handleInputChange}
                        value={query}
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="region"
                        id="region"
                        className="dark:bg-dark-mode-el placeholder:text-white placeholder:text-sm py-4 pl-6 pr-12 rounded-lg appearance-none"
                      >
                        <option value="">Filter by Region</option>
                        <option value="">Americas</option>
                        <option value="">Europe</option>
                      </select>
                      <FaArrowDown className="absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between">
                  {countries
                    .filter(
                      (country) =>
                        country.name
                          .toLowerCase()
                          .includes(query.toLowerCase()) ||
                        country.region
                          .toLowerCase()
                          .includes(query.toLowerCase()) ||
                        country.capital
                          ?.toLowerCase()
                          .includes(query.toLowerCase())
                    )
                    .map((country) => (
                      <CountryCard country={country} key={country.alpha2Code} />
                    ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
