import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import MainPage from './components/pages/MainPage/MainPage.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage.tsx';
import AboutPage from './components/pages/AboutPage/AboutPage.tsx';
import ContactPage from './components/pages/ContactPage/ContactPage.tsx';
import FaqPage from './components/pages/FaqPage/FaqPage.tsx';
import WishlistPage from './components/pages/WishlistPage/WishlistPage.tsx';
import ShoppingCartPage from './components/pages/ShoppingCartPage/ShoppingCartPage.tsx';

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
        element: <RegistrationPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "shoppingcart",
        element: <ShoppingCartPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
