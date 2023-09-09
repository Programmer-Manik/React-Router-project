import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homes from './Components/Homes/Homes'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/Abouts/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Items from './Components/Items/Items'
import UserDetails from './Components/UserDetails.jsx/UserDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Homes></Homes>,
    ErrorPage:<ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      // dynamic  data pass-------------------
      {
        path:"Items",
        element:<Items></Items>,
        loader:() => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path:"Items/:ItemsId",
        element:<UserDetails></UserDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.ItemsId}`)
      },
        // dynamic  data pass-------------------------------------------------
      {
        path:"Contact",
        element:<Contact></Contact>
      },
      {
        path:"About",
        element:<About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
