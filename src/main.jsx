import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Order from './Components/Order.jsx';
import PrivateRoute from './PrivateRouts/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'register',
        element: <Register></Register>
      },{
        path:'order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
// 