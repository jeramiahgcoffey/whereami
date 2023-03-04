import { useContext, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';

import Navbar from './components/Navbar';
import countries from '../data';
import CountryCard from './components/CountryCard';
import Filters from './components/Filters';

export default function Home() {
  const { state } = useContext(ThemeContext);

  const [query, setQuery] = useState({ search: '', region: '' });

  const handleSetQuery = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      [e.target.id]: e.target.value,
    }));
  };

  const results = () => {
    let results = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(query.search.toLowerCase()) ||
        country.capital?.toLowerCase().includes(query.search.toLowerCase())
    );
    if (query.region.length)
      return results.filter((country) => country.region === query.region);
    else return results;
  };

  const regions = () => {
    return [...new Set(countries.map((country) => country.region))].map(
      (region) => ({ text: region, value: region })
    );
  };

  return (
    <div className={state.mode}>
      <div className="bg-light-mode-bg dark:bg-dark-mode-bg dark:text-white text-light-mode-text font-semibold text-16 min-h-screen h-full">
        <Navbar />
        <main>
          <div className="max-w-6xl mx-auto relative">
            <Filters
              handleInputChange={handleSetQuery}
              value={query}
              options={regions()}
            />

            <div className="flex flex-wrap justify-between">
              {results().map((country) => (
                <CountryCard country={country} key={country.alpha2Code} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
