import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default routes;
