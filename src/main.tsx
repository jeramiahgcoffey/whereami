import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ThemeProvider from './context/providers';
import Home from './pages/Home';
import './index.css';
import Details from './pages/Details';
import { getCountries, getCountry } from './api';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: async () => {
            return await getCountries();
          },
        },
        {
          path: '/:alpha3Code',
          element: <Details />,
          loader: async ({ params }) => {
            return await getCountry(params.alpha3Code!);
          },
        },
      ],
    },
  ],
  { basename: '/whereami' }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
