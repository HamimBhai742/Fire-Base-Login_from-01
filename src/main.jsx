import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componen6ts/Home/Home.jsx';
import Login from './Componen6ts/Login/Login.jsx';
import Singup from './Componen6ts/Singup/Singup.jsx';
import { Root } from 'postcss';
import Header from './Componen6ts/Header/Header.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singup',
        element:<Singup></Singup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
