import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { Test } from './components/test';
import { ErrorPage } from './pages/errorPage';
import { loaderId, loaderAllLocation } from './utils/loader';
import { Home } from './pages/home/home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} loader={loaderAllLocation}/>
        <Route path='annonce/:id' element={<Test />} loader={loaderId}/>
        <Route path='a-propos' element={<Test />} loader={loaderAllLocation}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
