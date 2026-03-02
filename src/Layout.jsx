import Navbar from './components/navbar';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <Navbar />
      <Outlet /> {/* This renders the page inside */}
      <Footer />
    </div>
  );
}

export default Layout;
