import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { store } from './store/store.ts';
import {Provider} from 'react-redux';

import MainPage from './components/pages/MainPage/MainPage.tsx';
import LoginPage from './components/pages/LoginPage/LoginPage.tsx';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage.tsx';
import ResetPasswordPage from './components/pages/ResetPasswordPage/ResetPasswordPage.tsx';
import ShopPage from './components/pages/ShopPage/ShopPage.tsx';
import ProductPage from './components/pages/ProductPage/ProductPage.tsx';
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
import SettingsDashboardPage from './components/pages/SettingsDashboardPage/SettingsDashboardPage.tsx';
import LogOutDashboardPage from './components/pages/LogOutDashboardPage/LogOutDashboardPage.tsx';
import BlogPage from './components/pages/BlogPage/BlogPage.tsx';
import BlogPostPage from './components/pages/BlogPostPage/BlogPostPage.tsx';

import PrivateRoute from './components/molecules/PrivateRoute/PrivateRoute.tsx';

import ErrorBoundary from './components/pages/ErrorBoundary/ErrorBoundary.tsx';

import { ProductFilterProvider } from './context/ProductFilterContext.tsx';
import { BlogFilterProvider } from './context/BlogFilterContext.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element:
          <ProductFilterProvider>

            <Provider store={store}>
              <App/>
            </Provider>

          </ProductFilterProvider>,

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
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "shop",
        element: 
            <ShopPage/>,
      },
      {
        path: "shop/:name",
        element: <ProductPage />,
      },
      {
        path: "blog",
        element: 
        <BlogFilterProvider>
          <BlogPage />
        </BlogFilterProvider>,
      },
      {
        path: "blog/:name",
        element: <BlogPostPage />,
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
        path: 'dashboard',
        element: <PrivateRoute />,
        children: [
          {
            path: '',
            element: <DashboardPage />,
            children: [
              {
                index: true,
                element: <UserDashboardPage />,
              },
              {
                path: 'orderHistory',
                element: <OrderHistoryDashboardPage />,
              },
              {
                path: 'orderDetail',
                element: <OrderDetailDashboardPage />,
              },
              {
                path: 'settings',
                element: <SettingsDashboardPage />,
              },
              {
                path: 'logout',
                element: <LogOutDashboardPage />,
              },
            ],
          },
        ],
      },
    ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

