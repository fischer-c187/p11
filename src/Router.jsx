import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { Test } from './components/test';
import { ErrorPage } from './pages/errorPage';

function Router() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Test />} />
        <Route path='annonce/:id' element={<Test />} />
        <Route path='a-propos' element={<Test />} />
      </Route>

    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
