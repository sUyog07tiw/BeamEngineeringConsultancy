// src/layouts/MainLayout.jsx
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Fixed navbar */}
      <NavBar />

      {/* Push content below navbar */}
      <main className="flex-1 pt-20 md:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
