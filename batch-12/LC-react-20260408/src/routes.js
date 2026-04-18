import { createBrowserRouter } from "react-router";

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import UsersContainer from './pages/UsersContainer';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <Home />,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        // element: <Home />,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'users',
        Component: UsersContainer,
        // Component: Users,
        children: [
          {
            index: true,
            Component: Users,
          },
          {
            path: ':id',
            Component: UserProfile,
          }
        ]
      },
      // {
      //   path: 'users/:id',  //    /users/:userId
      //   Component: UserProfile,
      // },
      // {
      //   path: 'users/:id/career',  //    /users/:userId
      //   Component: UserProfile,
      // }
    ]
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/users',
  //   element: <Users />,
  // },
  {
    path: '*',
    Component: NotFound,
  }
]);