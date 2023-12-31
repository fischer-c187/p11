import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AppLayout } from './layouts/appLayout';
import { loaderId, loaderAllLocation } from './utils/loader';
import { Home } from './pages/home/home.jsx';
import { Rental } from './pages/rental/rental';
import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/error';


/**
 * The App component contains all routes for the project.
 * This component uses version 6.4 of react-router, which includes the new "loader" feature.
 * The loader feature fetches data at the same time as it renders.
 * @returns {React.Component} Returns a RouterProvider with all the routes for the application.
 */
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<AppLayout />} >
          <Route index element={<Home title='Accueil - kasa' />} loader={loaderAllLocation}/>
          <Route path='annonce/:id' element={<Rental />} loader={loaderId}/>
          <Route path='a-propos' element={<About title='A propos - kasa' />} loader={loaderAllLocation}/>
        </Route>
        <Route path='/*' element={<ErrorPage title='404 - kasa' />} />
      </>

    )
  );

  return <RouterProvider router={router} />;
}

export default App;
