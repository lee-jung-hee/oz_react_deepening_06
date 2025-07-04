import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import UserDetail from './pages/admin/UserDetail';
import Settings from './pages/admin/Settings';
import NotFound from './pages/admin/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:id',
        element: <UserDetail />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
