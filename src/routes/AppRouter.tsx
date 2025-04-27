import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Product from "@/pages/Product";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home page with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* About and Contact pages with SecondaryLayout */}
        <Route
          element={
            <SecondaryLayout>
              <React.Fragment />
            </SecondaryLayout>
          }
        >
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Dynamic Product route */}
        <Route path="/product/:type" element={<Product />} />

        {/* NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
