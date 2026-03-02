import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      <main className="pt-16 flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;