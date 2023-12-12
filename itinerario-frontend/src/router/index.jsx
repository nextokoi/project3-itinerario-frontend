import { createBrowserRouter, redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage.jsx'
import Root from '../layout/index.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement : <ErrorPage/>,
        children : [
          {
            path :"",
            element : <LandingPage/>
          },
          {
            path: "about",
            element: <About />
          }
        ]
      }
])

export default router