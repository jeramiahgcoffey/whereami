import countries, { ICountry } from '../../data';

export const getCountries = (): { countries: ICountry[] } => {
  return { countries } || { countries: [] };
};

export const getCountry = (alpha3Code: string): ICountry => {
  return countries.find((country) => country.alpha3Code === alpha3Code)!;
};
