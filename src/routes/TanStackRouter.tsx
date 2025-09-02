import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import BlankLayout from "@/layouts/BlankLayout";
import MainLayout from "@/layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProductPage from "@/pages/ProductPage";
import LoginFormWithActionState from "@/components/forms/LoginForm/LoginFormWithActionState";
import LoginFormWithFormStatus from "@/components/forms/LoginForm/LoginFormWithFormStatus";

const MainLayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const BlankLayoutWrapper = () => (
  <BlankLayout>
    <Outlet />
  </BlankLayout>
);

const SecondaryLayoutWrapper = () => (
  <SecondaryLayout>
    <Outlet />
  </SecondaryLayout>
);

const rootRoute = createRootRoute({
  component: Outlet,
});

const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main-layout",
  component: MainLayoutWrapper,
});

const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: HomePage,
});

const blankLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "blank-layout",
  component: BlankLayoutWrapper,
});

const loginRoute = createRoute({
  getParentRoute: () => blankLayoutRoute,
  path: "/login",
  component: LoginPage,
});

const loginWithActionStateRoute = createRoute({
  getParentRoute: () => blankLayoutRoute,
  path: "/login-with-action-state",
  component: LoginFormWithActionState,
});

const loginWithFormStatusRoute = createRoute({
  getParentRoute: () => blankLayoutRoute,
  path: "/login-with-form-status",
  component: LoginFormWithFormStatus,
});

const secondaryLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "secondary-layout",
  component: SecondaryLayoutWrapper,
});

const aboutRoute = createRoute({
  getParentRoute: () => secondaryLayoutRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => secondaryLayoutRoute,
  path: "/contact",
  component: ContactPage,
});

const productRoute = createRoute({
  getParentRoute: () => secondaryLayoutRoute,
  path: "/product/$type",
  component: ProductPage,
  // Example validation: only allow 'category' as a string in search params
  validateSearch: (search: Record<string, unknown>) => {
    if (typeof search.category === "string") {
      return { category: search.category };
    }
    return {};
  },
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$",
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([indexRoute]),
  blankLayoutRoute.addChildren([
    loginRoute,
    loginWithActionStateRoute,
    loginWithFormStatusRoute,
  ]),
  secondaryLayoutRoute.addChildren([aboutRoute, contactRoute, productRoute]),
  notFoundRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }

  interface ProductRouteParams {
    type: string;
  }
}

const TanStackRouter = () => <RouterProvider router={router} />;

export default TanStackRouter;
