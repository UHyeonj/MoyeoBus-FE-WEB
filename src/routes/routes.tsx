import { createBrowserRouter, Outlet } from 'react-router';
import MainLayout from '../layouts/MainLayOut';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
