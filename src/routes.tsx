import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("../src/pages/home/Home.page")));

const Login = Loadable(lazy(() => import("../src/pages/login/Login.page")));

const Signup = Loadable(lazy(() => import("../src/pages/signup/Signup.page")));

const FindUser = Loadable(lazy(() => import("./pages/findUser/FindUser.page")));

const License = Loadable(lazy(() => import("./pages/license/License.page")));

const DataList = Loadable(lazy(() => import("./pages/dataList/DataList.page")));

const DataDetail = Loadable(
  lazy(() => import("./pages/dataDetail/DataDetail.page"))
);

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/findUser",
    element: <FindUser />,
  },
  {
    path: "/license",
    element: <License />,
  },
  {
    path: "/dataList",
    element: <DataList />,
  },
  {
    path: "/data/:dataId",
    element: <DataDetail />,
  },
];

export default routes;
