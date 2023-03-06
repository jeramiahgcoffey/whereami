import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import Filters from '../components/Filters';
import { ICountry } from '../../data';

export default function Home() {
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

  const { countries } = useLoaderData() as { countries: ICountry[] };

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
    <main>
      <div className="max-w-6xl mx-auto relative px-4 pb-4">
        <Filters
          handleInputChange={handleSetQuery}
          value={query}
          options={regions()}
        />

        <div className="flex flex-wrap justify-around gap-12">
          {results().map((country) => (
            <CountryCard country={country} key={country.alpha2Code} />
          ))}
        </div>
      </div>
    </main>
  );
}
