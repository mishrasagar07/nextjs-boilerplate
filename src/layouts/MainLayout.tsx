import Header from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { useEffect } from "react";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
