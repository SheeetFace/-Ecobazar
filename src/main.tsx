import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import MainPage from './components/pages/MainPage/MainPage.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';

import AboutPage from './components/pages/AboutPage/AboutPage.tsx';

import ErrorBoundary from './components/pages/ErrorBoundary/ErrorBoundary.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <MainPage/>,
        index: true,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
