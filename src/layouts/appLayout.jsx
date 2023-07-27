import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Footer } from './footer/footer';

/**
 * Renders AppLayout component. This component acts as a container for other 
 * components which are displayed in place of the 'Outlet'. It includes the 
 * Header and Footer components, which are always displayed, and the dynamic 
 * content that replaces the 'Outlet'.
 *
 * @returns {React.Component} JSX for AppLayout component
 */
export function AppLayout() {
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