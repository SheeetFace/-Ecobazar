import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { lazy } from 'react';

import { store } from './store/store.ts';
import {Provider} from 'react-redux';

import MainPage from './components/pages/MainPage/MainPage.tsx';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage.tsx';
import ShopPage from './components/pages/ShopPage/ShopPage.tsx';
import ProductPage from './components/pages/ProductPage/ProductPage.tsx';
import WishlistPage from './components/pages/WishlistPage/WishlistPage.tsx';
import ShoppingCartPage from './components/pages/ShoppingCartPage/ShoppingCartPage.tsx';
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage.tsx';

import UserDashboardPage from './components/pages/UserDashboardPage/UserDashboardPage.tsx';
import OrderHistoryDashboardPage from './components/pages/OrderHistoryDashboardPage/OrderHistoryDashboardPage.tsx';
import OrderDetailDashboardPage from './components/pages/OrderDetailDashboardPage/OrderDetailDashboardPage.tsx';
import SettingsDashboardPage from './components/pages/SettingsDashboardPage/SettingsDashboardPage.tsx';
import LogOutDashboardPage from './components/pages/LogOutDashboardPage/LogOutDashboardPage.tsx';
import BlogPage from './components/pages/BlogPage/BlogPage.tsx';
import BlogPostPage from './components/pages/BlogPostPage/BlogPostPage.tsx';

import PrivateRoute from './components/molecules/PrivateRoute/PrivateRoute.tsx';

import FullScreenLoader from './components/organisms/FullScreenLoader/FullScreenLoader.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss'
import { Suspense } from 'react';

const AboutPage = lazy(() => import('./components/pages/AboutPage/AboutPage.tsx'));
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage.tsx'));
const ResetPasswordPage = lazy(() => import('./components/pages/ResetPasswordPage/ResetPasswordPage.tsx'));
const ContactPage = lazy(() => import('./components/pages/ContactPage/ContactPage.tsx'));
const FaqPage = lazy(() => import('./components/pages/FaqPage/FaqPage.tsx'));
const DashboardPage = lazy(() => import('./components/pages/DashboardPage/DashboardPage.tsx'));
const ErrorBoundary = lazy(() => import('./components/pages/ErrorBoundary/ErrorBoundary.tsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Provider store={store}>
        <App/>
      </Provider>,

    errorElement: (<Suspense fallback={<FullScreenLoader/>}><ErrorBoundary /></Suspense>),
    children: [
      {
        element: <MainPage/>,
        index: true,
      },
      {
        path: "login",
        element: (<Suspense fallback={<FullScreenLoader/>}><LoginPage /></Suspense>),
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "reset-password",
        element: (<Suspense fallback={<FullScreenLoader/>}><ResetPasswordPage /></Suspense>),
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
          <BlogPage />
      },
      {
        path: "blog/:name",
        element: <BlogPostPage />,
      },
      {
        path: "about",
        element: (<Suspense fallback={<FullScreenLoader/>}><AboutPage /></Suspense>),
      },
      {
        path: "contacts",
        element: (<Suspense fallback={<FullScreenLoader/>}><ContactPage /></Suspense>),
      },
      {
        path: "faq",
        element: (<Suspense fallback={<FullScreenLoader/>}><FaqPage /></Suspense>),
      },
      {
        path: 'wishlist',
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <WishlistPage />,
          },
        ]
      },
      {
        path: 'shopping-cart',
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <ShoppingCartPage />,
          },
        ]
      },
      {
        path: 'checkout',
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <CheckoutPage />,
          },
        ]
      },
      {
        path: 'dashboard',
        element: <PrivateRoute />,
        children: [
          {
            path: '',
            element: (<Suspense fallback={<FullScreenLoader/>}><DashboardPage /></Suspense>),
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
