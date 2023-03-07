import axios from 'axios';
import { ICountry } from '../../data';

export const getCountries = async (): Promise<{ countries: ICountry[] }> => {
  try {
    const { data } = await axios.get('https://restcountries.com/v2/all');
    return { countries: data };
  } catch (error) {
    console.error(error);
    return { countries: [] };
  }
};

export const getCountry = async (alpha3Code: string): Promise<ICountry> => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/alpha/${alpha3Code}`
  );

  return data;
};
