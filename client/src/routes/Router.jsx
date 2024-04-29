import { createBrowserRouter } from 'react-router-dom';
import { Home, About, Cities } from '../pages'
import Root from '../Layouts/Root';
import { citiesLoader } from '../pages/Cities/Cities';

const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CITIES: "/cities",
  CITY: "/cities/:id",
  COMPANIES: "/companies",
  COMPANY: "/companies/:id",
  FLIGHTS: "/flights",
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.ABOUT,
          element: <About />,
        },
        {
          path: ROUTES.CITIES,
          element: <Cities />,
          loader: citiesLoader
        },
      ],
    }
  ]
)

export default ROUTES;
