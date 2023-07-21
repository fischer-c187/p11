import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PageLayout } from './layouts/page';
import { loaderId, loaderAllLocation } from './utils/loader';
import { Home } from './pages/home/home';
import { Rental } from './pages/rental/rental';
import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/error';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<PageLayout />} errorElement={<ErrorPage title='404 - kasa' />}>
        <Route index element={<Home title='Accueil - kasa' />} loader={loaderAllLocation}/>
        <Route path='annonce/:id' element={<Rental />} loader={loaderId}/>
        <Route path='a-propos' element={<About title='A propos - kasa' />} loader={loaderAllLocation}/>
        <Route path='*' element={<ErrorPage title='404 - kasa' />} />
      </Route>
    ), {
      basename: '/p11/',
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
