import { ICountry } from '../../data';

export default function CountryCard({ country }: { country: ICountry }) {
  return (
    <div className="bg-white dark:bg-dark-mode-el w-60 rounded-lg mb-12 flex flex-col justify-between">
      <div className="relative h-36">
        <img
          className="rounded-t-lg"
          src={country.flags.svg}
          alt={`flag of ${country.name}`}
        />
      </div>
      <div className="p-6">
        <h2 className="font-extrabold">{country.name}</h2>
        <h3 className="font-light text-14">
          <span className="font-bold">Population:</span> {country.population}
        </h3>
        <h3 className="font-light text-14">
          <span className="font-bold">Region:</span> {country.region}
        </h3>
        <h3 className="font-light text-14">
          <span className="font-bold">Captial:</span> {country.capital}
        </h3>
      </div>
    </div>
  );
}
