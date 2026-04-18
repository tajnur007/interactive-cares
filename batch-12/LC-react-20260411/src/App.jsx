import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import UsersContainer from './pages/UsersContainer';
import NotFound from './pages/NotFound';
import './App.css';
import { router } from "./routes";

// // 1. Define your routes in an array objects
// React router v6
// const router = createBrowserRouter([
//   {
//     // The path '/' is the root of our application
//     path: '/',
//     // MainLayout is shared across all child routes
//     element: <MainLayout />,
//     // These are child routes that will be rendered inside MainLayout's <Outlet />
//     children: [
//       {
//         // This is the default child route (index)
//         index: true, 
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'users',
//         element: <Users />,
//       },
//       {
//         // Dynamic route with a parameter called ':id'
//         path: 'users/:id',
//         element: <UserProfile />,
//       },
//     ],
//   },
//   {
//     // A catch-all route for any undefined paths
//     path: '*',
//     element: <NotFound />,
//   },
// ]);


// React router v7
// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <Home />,
//     Component: MainLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//         // element: <Home />,
//       },
//       {
//         path: 'about',
//         Component: About,
//       },
//       {
//         path: 'users',
//         Component: UsersContainer,
//         // Component: Users,
//         children: [
//           {
//             index: true,
//             Component: Users,
//           },
//           {
//             path: ':id',
//             Component: UserProfile,
//           }
//         ]
//       },
//       // {
//       //   path: 'users/:id',  //    /users/:userId
//       //   Component: UserProfile,
//       // },
//       // {
//       //   path: 'users/:id/career',  //    /users/:userId
//       //   Component: UserProfile,
//       // }
//     ]
//   },
//   // {
//   //   path: '/about',
//   //   element: <About />,
//   // },
//   // {
//   //   path: '/users',
//   //   element: <Users />,
//   // },
//   {
//     path: '*',
//     Component: NotFound,
//   }
// ]);



function App() {
  return (
    // 2. Wrap your app in RouterProvider and pass the router configuration
    // <RouterProvider router={router} />
    <RouterProvider router={router} />
  );
}

export default App;
