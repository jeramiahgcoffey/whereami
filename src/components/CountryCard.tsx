import { Link } from 'react-router-dom';
import { ICountry } from '../../data';

export default function CountryCard({ country }: { country: ICountry }) {
  return (
    <Link className="flex-1" to={`/${country.name}`}>
      <div
        className="bg-white dark:bg-dark-mode-el rounded-lg flex flex-col "
        style={{ minWidth: '240px', maxWidth: '300px' }}
      >
        <img
          className="rounded-t-lg h-40 object-cover"
          src={country.flags.svg}
          alt={`flag of ${country.name}`}
        />

        <div className="p-6 text-14">
          <h2 className="font-extrabold text-16 pb-3">{country.name}</h2>
          <div>
            <h3 className="font-light">
              <span className="font-bold">Population:</span>{' '}
              {country.population}
            </h3>
            <h3 className="font-light">
              <span className="font-bold">Region:</span> {country.region}
            </h3>
            <h3 className="font-light">
              <span className="font-bold">Captial:</span> {country.capital}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
