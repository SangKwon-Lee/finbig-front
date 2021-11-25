import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("../src/pages/home/Home.page")));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
