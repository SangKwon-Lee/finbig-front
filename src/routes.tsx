import { Suspense, lazy } from "react";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );

const Header = Loadable(
  lazy(() => import("../src/components/common/layout/header/Header.container"))
);

const Footer = Loadable(
  lazy(() => import("../src/components/common/layout/footer/Footer.container"))
);

const Home = Loadable(
  lazy(() => import("../src/components/home/Home.container"))
);

const Login = Loadable(
  lazy(() => import("../src/components/login/Login.container"))
);

const Signup = Loadable(
  lazy(() => import("../src/components/signup/Signup.container"))
);

const FindUser = Loadable(
  lazy(() => import("./components/findUser/FindUser.container"))
);

const License = Loadable(
  lazy(() => import("./components/license/License.container"))
);

//* 데이터 상품
const DataList = Loadable(
  lazy(() => import("./components/dataList/DataList.container"))
);
const DataDetail = Loadable(
  lazy(() => import("./components/dataDetail/DataDetail.container"))
);

//* 데이터 시각화/활용
const VisualList = Loadable(
  lazy(() => import("./components/visualList/VisualList.container"))
);
const VisualDetail = Loadable(
  lazy(() => import("./components/visualDetail/VisualDetail.container"))
);

//* 마이페이지
const MypageMain = Loadable(
  lazy(() => import("./components/mypage/main/MypageMain.container"))
);
const MypagePayment = Loadable(
  lazy(() => import("./components/mypage/payment/MypagePayment.container"))
);
const MypageDownload = Loadable(
  lazy(() => import("./components/mypage/download/MypageDownload.container"))
);
const MypageRecent = Loadable(
  lazy(() => import("./components/mypage/recent/MypageRecent.container"))
);
const MypageProfile = Loadable(
  lazy(() => import("./components/mypage/profile/MypageProfile.container"))
);
const MypageWithdraw = Loadable(
  lazy(() => import("./components/mypage/withdraw/MypageWithdraw.container"))
);

//* 오늘의 시장
const StockMarket = Loadable(
  lazy(() => import("./components/stockMarket/StockMarket.container"))
);

//* 관리자 페이지
const AdminLogin = Loadable(
  lazy(() => import("./components/admin/adminLogin/AdminLogin.container"))
);

const AdminUsers = Loadable(
  lazy(() => import("./components/admin/adminUsers/AdminUsers.container"))
);

const VisualCreate = Loadable(
  lazy(() => import("./components/admin/visualCreate/VisualCreate.container"))
);

const AdminVisualList = Loadable(
  lazy(() => import("./components/admin/visualList/VisualList.container"))
);

const AdminSubsciptionList = Loadable(
  lazy(
    () =>
      import("./components/admin/subscriptionList/SubscriptionList.container")
  )
);

//* 이용약관

const Service = Loadable(
  lazy(() => import("./components/terms/Service.container"))
);
const Privacypolicy = Loadable(
  lazy(() => import("./components/terms/PrivacyPolicy.container"))
);

const routes = [
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Home />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header></Header>
        <Login />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header></Header>
        <Signup />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/findUser",
    element: (
      <>
        <Header></Header>
        <FindUser />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/license",
    element: (
      <>
        <Header></Header>
        <License />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/dataList",
    element: (
      <>
        <Header></Header>
        <DataList />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/dataList/:search",
    element: (
      <>
        <Header></Header>
        <DataList />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/data/:dataId",
    element: (
      <>
        <Header></Header>
        <DataDetail />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/visualList",
    element: (
      <>
        <Header></Header>
        <VisualList />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/visual/:visualId",
    element: (
      <>
        <Header></Header>
        <VisualDetail />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/main",
    element: (
      <>
        <Header></Header>
        <MypageMain />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/payment",
    element: (
      <>
        <Header></Header>
        <MypagePayment />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/download",
    element: (
      <>
        <Header></Header>
        <MypageDownload />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/recent",
    element: (
      <>
        <Header></Header>
        <MypageRecent />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/profile",
    element: (
      <>
        <Header></Header>
        <MypageProfile />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/mypage/withdraw",
    element: (
      <>
        <Header></Header>
        <MypageWithdraw />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/stockmarket",
    element: (
      <>
        <Header></Header>
        <StockMarket />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "/admin/visual/create",
    element: <VisualCreate />,
  },
  {
    path: "/admin/visuals",
    element: <AdminVisualList />,
  },
  {
    path: "/admin/visual/:visualId/edit",
    element: <VisualCreate path="edit" />,
  },
  {
    path: "/admin/visual/:visualId/",
    element: <VisualDetail path="edit" />,
  },
  {
    path: "/admin/subsciption",
    element: <AdminSubsciptionList />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/privacypolicy",
    element: <Privacypolicy />,
  },
];

export default routes;
