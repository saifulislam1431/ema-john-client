import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Shop from '../Pages/Shop/Shop';
import Home from '../Pages/Home/Home';
import MyOrders from '../Pages/MyOrders/MyOrders';
import OrderReview from '../Pages/OrderReview/OrderReview';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"shop",
          element:<Shop></Shop>,
          loader:()=>fetch("http://localhost:5000/totalProducts")
        },
        {
          path:"cart",
          element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
          path:"orderReview",
          element:<PrivateRoute><OrderReview></OrderReview></PrivateRoute>
        },
        {
          path: "login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  

export default router;