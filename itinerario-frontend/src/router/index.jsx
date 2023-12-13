import { createBrowserRouter, redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage.jsx'
import Root from '../layout/index.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'
import PlanningPage from '../pages/PlanningPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />
      },
      {
        path: "planning",
        element: <PlanningPage />

      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
])

export default router