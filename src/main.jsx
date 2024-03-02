import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import ContactDetails from './ContactDetails.jsx'
import Contact from './Contact.jsx'
import NavBar from './NavBar.jsx'



const router = createBrowserRouter([
  {
  path: "/",
  errorElement: <ErrorPage />,
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/contact/:id",
      element: <ContactDetails />
    }
  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
