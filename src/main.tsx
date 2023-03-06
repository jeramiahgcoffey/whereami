import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as homeLoader } from './routes/root';
import ThemeProvider from './context/providers';
import Home from './pages/Home';
import './index.css';
import Details from './pages/Details';
import countries from '../data';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: '/:name',
          element: <Details />,
          loader: ({ params }) => {
            return countries.find((country) => country.name == params.name);
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
