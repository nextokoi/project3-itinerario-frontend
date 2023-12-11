import { createBrowserRouter, redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage/LandingPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
      }
])