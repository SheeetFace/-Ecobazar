import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import MainPage from './components/pages/MainPage/MainPage.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage/>,
        index: true
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <LoginPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
