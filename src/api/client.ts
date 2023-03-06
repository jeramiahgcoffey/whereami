import countries, { ICountry } from '../../data';

export const getCountries = () => {
  return countries;
};

export const getCountry = (alpha3Code: string): ICountry => {
  return countries.find((country) => country.alpha3Code === alpha3Code)!;
};
