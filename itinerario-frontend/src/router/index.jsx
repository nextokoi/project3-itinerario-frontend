import { createBrowserRouter, redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage.jsx'
import Root from '../layout/index.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import About from '../pages/About.jsx'
import PlanningPage from '../pages/PlanningPage.jsx'
import { LogInPage } from '../pages/LogInPage.jsx'
import SignUpPage from '../pages/SignUpPage.jsx'
import Profile from '../pages/MyProfile.jsx'

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
      }, {
        path: "login",
        element: <LogInPage />
      },
      {
        path: "signup",
        element: <SignUpPage />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
])

export default router