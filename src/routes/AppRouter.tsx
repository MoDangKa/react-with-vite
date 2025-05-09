import MainLayout from "@/layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default AppRouter;
