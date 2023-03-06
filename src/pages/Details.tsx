import { Link, useLoaderData } from 'react-router-dom';
import { ICountry } from '../../data';
import { getCountry } from '../api';
import { FaArrowLeft } from 'react-icons/fa';

export default function Details() {
  const country = useLoaderData() as ICountry;

  const currencies = (): string => {
    return (
      country.currencies
        ?.map((currency, i) => {
          if (i + 1 === country.currencies?.length) {
            return currency.code;
          } else {
            return `${currency.code}, `;
          }
        })
        .join('') || ''
    );
  };

  const languages = (): string => {
    return country.languages
      .map((language, i) => {
        if (i + 1 === country.languages.length) {
          return `${language.name}`;
        } else {
          return `${language.name}, `;
        }
      })
      .join('');
  };

  const borderCountries = (): ICountry[] => {
    return (
      country.borders?.map((alpha3Code) => {
        return getCountry(alpha3Code);
      }) || []
    );
  };

  return (
    <div className="max-w-md md:max-w-6xl mx-auto px-4">
      <Link to={'/'}>
        <button className="bg-white dark:bg-dark-mode-el my-12 px-8 py-2 rounded-lg drop-shadow-lg flex items-center">
          <FaArrowLeft className="mr-4" />
          Back
        </button>
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-md md:max-w-lg md:w-1/2 md:mr-20 mb-12">
          <img src={country.flag} alt="" />
        </div>
        <div className="max-w-md w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold mb-8">{country.name}</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mr-4 mb-8">
              <p className="text-16 pb-2">
                Native Name:{' '}
                <span className="font-light">{country.nativeName}</span>
              </p>
              <p className="text-16 pb-2">
                Population:{' '}
                <span className="font-light">{country.population}</span>
              </p>
              <p className="text-16 pb-2">
                Region: <span className="font-light">{country.region}</span>
              </p>
              <p className="text-16 pb-2">
                Sub Region:{' '}
                <span className="font-light">{country.subregion}</span>
              </p>
              <p className="text-16 pb-2">
                Capital: <span className="font-light">{country.capital}</span>
              </p>
            </div>
            <div className="mb-8">
              <p className="text-16 pb-2">
                Top Level Domain:{' '}
                <span className="font-light">{country.topLevelDomain}</span>
              </p>
              {currencies && (
                <p className="text-16 pb-2">
                  Currencies: <span className="font-light">{currencies()}</span>
                </p>
              )}
              <p className="text-16 pb-2">
                Languages: <span className="font-light">{languages()}</span>
              </p>
            </div>
          </div>
          {!!borderCountries().length && (
            <div className="flex flex-wrap mb-8">
              <span className="mr-4 mb-2">Border Countries:</span>
              <div className="flex flex-wrap">
                {borderCountries()!.map((bc) => (
                  <Link to={`/${bc.alpha3Code}`}>
                    <div className="bg-white dark:bg-dark-mode-el mr-2 px-4 mb-2 rounded-md shadow-md self-center">
                      {bc?.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
