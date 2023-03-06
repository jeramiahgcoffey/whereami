import { Link, useLoaderData } from 'react-router-dom';
import { ICountry } from '../../data';
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

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Link to={'/'}>
        <button className="bg-white dark:bg-dark-mode-el my-12 mb-12 px-8 py-2 rounded-lg drop-shadow-lg flex items-center">
          <FaArrowLeft className="mr-4" />
          Back
        </button>
      </Link>

      <div className="flex justify-between items-center">
        <div className="w-full mr-20">
          <img src={country.flag} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-extrabold mb-8">{country.name}</h1>
          <div className="flex justify-between mb-16">
            <div>
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
            <div>
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
          <div className="flex flex-wrap">
            <span className="mr-4 mb-2">Border Countries:</span>
            <div className="flex">
              {country.borders?.map((bc) => (
                <div className="bg-white dark:bg-dark-mode-el mr-2 px-4 rounded-md shadow-md self-center">
                  {bc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
