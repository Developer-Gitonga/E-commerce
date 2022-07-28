import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './pages/Error';
import Orders from './pages/shop/Orders';
import Layout from './utils/Layout';
import DashLayout from './utils/DashLayout';
import { Spinner } from './components';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedCosRoutes from './app/ProtectedCosRoutes';
import ProtectedDashRoutes from './app/ProtectedDashRoutes';
import { PaypalProvider } from './context/PaypalContext';
import BecomeVendor from './pages/BecomeVendor';

const HomePage = React.lazy(() => import('./pages/Home'));
const SearchPage = React.lazy(() => import('./pages/Search'));
const SuccessPage = React.lazy(() => import('./pages/Success'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const SignupPage = React.lazy(() => import('./pages/Signup'));
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const ActivationPage = React.lazy(() => import('./pages/Activation'));

const CartPage = React.lazy(() => import('./pages/shop/Cart'));
const ShopPage = React.lazy(() => import('./pages/shop/Shop'));
const ProductPage = React.lazy(() => import('./pages/shop/ProductPage'));
const BillingPage = React.lazy(() => import('./pages/shop/Billing'));
const ShippingPage = React.lazy(() => import('./pages/shop/Shipping'));
const SingleCategoryPage = React.lazy(() =>
  import('./pages/shop/SingleCategory')
);

const DashboardPage = React.lazy(() => import('./pages/vendor/Dashboard'));
const CreatePage = React.lazy(() => import('./pages/vendor/Create'));
const InventoryPage = React.lazy(() => import('./pages/vendor/Inventory'));
const LedgerPage = React.lazy(() => import('./pages/vendor/Ledger'));
const PendingOrdersPage = React.lazy(() =>
  import('./pages/vendor/PendingOrders')
);
const FullfilledOrderPage = React.lazy(() =>
  import('./pages/vendor/FullfilledOrder')
);
const ReportsPage = React.lazy(() => import('./pages/vendor/Reports'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <PaypalProvider>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='/shop' element={<ShopPage />} />
                  <Route path='/spinner' element={<Spinner />} />
                  <Route path='/search' element={<SearchPage />} />

                  <Route path='login' element={<LoginPage />} />
                  <Route path='activation' element={<ActivationPage />} />
                  <Route
                    path='becomeVendor'
                    element={
                      <ProtectedCosRoutes>
                        <BecomeVendor />
                      </ProtectedCosRoutes>
                    }
                  />

                  <Route
                    path='category/:name/:id'
                    element={<SingleCategoryPage />}
                  />
                  <Route path='signup' element={<SignupPage />} />
                  <Route path='product/:id' element={<ProductPage />} />

                  <Route path='/cart' element={<CartPage />}>
                    <Route index element={<Orders />} />
                    <Route path='billing' element={<BillingPage />} />
                    <Route
                      path='shipping'
                      element={
                        <ProtectedCosRoutes>
                          <ShippingPage />
                        </ProtectedCosRoutes>
                      }
                    />
                    <Route path='done' element={<SuccessPage />} />
                    <Route path='*' element={<Error />} />
                  </Route>

                  <Route
                    path='profile'
                    element={
                      <ProtectedCosRoutes>
                        <ProfilePage />
                      </ProtectedCosRoutes>
                    }
                  />
                </Route>
                <Route
                  path='/dashboard'
                  element={
                    <ProtectedDashRoutes>
                      <DashLayout />
                    </ProtectedDashRoutes>
                  }
                >
                  <Route index element={<DashboardPage />} />
                  <Route path='create' element={<CreatePage />} />
                  <Route path='inventory' element={<InventoryPage />} />
                  <Route path='ledger' element={<LedgerPage />} />
                  <Route path='orders' element={<PendingOrdersPage />} />
                  <Route
                    path='fullfilled-orders'
                    element={<FullfilledOrderPage />}
                  />
                  <Route path='reports' element={<ReportsPage />} />
                  <Route path='*' element={<Error />} />
                </Route>

                <Route path='*' element={<Error />} />
              </Routes>
            </PaypalProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
