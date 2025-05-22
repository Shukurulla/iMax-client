import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
