import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Footer } from './footer';

export function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}