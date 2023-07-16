import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export function PageLayout() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}