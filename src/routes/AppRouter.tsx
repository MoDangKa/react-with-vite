import MainLayout from "@/layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import BlankLayout from "@/layouts/ฺBlankLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductPage from "@/pages/ProductPage";
import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomePage page with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        <Route
          element={
            <BlankLayout>
              <Fragment />
            </BlankLayout>
          }
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* AboutPage and ContactPage pages with SecondaryLayout */}
        <Route
          element={
            <SecondaryLayout>
              <Fragment />
            </SecondaryLayout>
          }
        >
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Dynamic ProductPage route */}
        <Route path="/product/:type" element={<ProductPage />} />

        {/* NotFoundPage page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
