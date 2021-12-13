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

const VisualList = Loadable(
  lazy(() => import("./pages/visualList/VisualList.page"))
);

const VisualDetail = Loadable(
  lazy(() => import("./pages/visualDetail/VisualDetail.page"))
);

const MypageMain = Loadable(
  lazy(() => import("./pages/mypage/MypageMain.page"))
);

const MypagePayment = Loadable(
  lazy(() => import("./pages/mypage/MypagePayment.page"))
);
const MypageDownload = Loadable(
  lazy(() => import("./pages/mypage/MypageDownload.page"))
);
const MypageRecent = Loadable(
  lazy(() => import("./pages/mypage/MypageRecent.page"))
);
const MypageProfile = Loadable(
  lazy(() => import("./pages/mypage/MypageProfile.page"))
);
const MypageWithdraw = Loadable(
  lazy(() => import("./pages/mypage/MypageWithdraw.page"))
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
    path: "/dataList/:search",
    element: <DataList />,
  },
  {
    path: "/data/:dataId",
    element: <DataDetail />,
  },
  {
    path: "/visualList",
    element: <VisualList />,
  },
  {
    path: "/visual/:visualId",
    element: <VisualDetail />,
  },
  {
    path: "/mypage/main",
    element: <MypageMain />,
  },
  {
    path: "/mypage/payment",
    element: <MypagePayment />,
  },
  {
    path: "/mypage/download",
    element: <MypageDownload />,
  },
  {
    path: "/mypage/recent",
    element: <MypageRecent />,
  },
  {
    path: "/mypage/profile",
    element: <MypageProfile />,
  },
  {
    path: "/mypage/withdraw",
    element: <MypageWithdraw />,
  },
];

export default routes;
