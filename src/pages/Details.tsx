import { useLoaderData } from 'react-router-dom';
import { ICountry } from '../../data';

export default function Details() {
  const country = useLoaderData() as ICountry;

  return (
    <div className="max-w-6xl mx-auto">
      <h1>{country.name}</h1>
    </div>
  );
}
