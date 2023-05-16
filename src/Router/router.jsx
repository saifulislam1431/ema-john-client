import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Shop from '../Pages/Shop/Shop';
import Home from '../Pages/Home/Home';
import MyOrders from '../Pages/MyOrders/MyOrders';
import OrderReview from '../Pages/OrderReview/OrderReview';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Signup/Signup';

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
          element:<Shop></Shop>
        },
        {
          path:"order",
          element:<MyOrders></MyOrders>
        },
        {
          path:"orderReview",
          element:<OrderReview></OrderReview>
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