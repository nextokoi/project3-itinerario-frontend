import { createBrowserRouter, redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage/LandingPage.jsx'
import Root from '../layout/index.jsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement : <ErrorPage/>,
        children : [{
          path :"",
          element : <LandingPage/>
        }]
      }
])

export default router