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
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage.tsx';
import DashboardPage from './components/pages/DashboardPage/DashboardPage.tsx';
import UserDashboardPage from './components/pages/UserDashboardPage/UserDashboardPage.tsx';
import OrderHistoryDashboardPage from './components/pages/OrderHistoryDashboardPage/OrderHistoryDashboardPage.tsx';
import OrderDetailDashboardPage from './components/pages/OrderDetailDashboardPage/OrderDetailDashboardPage.tsx';

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
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            element: <UserDashboardPage/>,
            index: true,
          },
          {
            element: <OrderHistoryDashboardPage/>,
            path: "orderHistory",

          },
          {
            element: <OrderDetailDashboardPage/>,
            path: "orderDetail",
          },
        ]
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
