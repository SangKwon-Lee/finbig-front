import { createContext, useState } from "react";
import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import useScrollReset from "./components/common/hooks/useScrollReset";
import SocketProvider from "../src/components/contexts/SocketContext";
import { Maybe, UsersPermissionsUser } from "./commons/graphql/generated";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ogImg from "../src/assets/images/logo.svg";

const userDataInit: Maybe<UsersPermissionsUser> | undefined = {
  id: "",
  email: "",
  username: "",
  role: {
    id: "",
    name: "",
    description: "",
    type: "",
  },
  name: "",
  created_at: "",
  updated_at: "",
  confirmed: false,
  deletedAt: "",
  emailReception: false,
  expirationDate: "",
  isAdmin: false,
  isDeleted: false,
  isSubscribe: false,
  phone: "",
  smsReception: false,
  subscriptionDate: "",
  subscription_histories: [],
};

//* 전역 상태 값
export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (__: string) => {},
  userData: userDataInit,
  setUserData: (__: any) => {},
});

function App() {
  //* 전역상태 관리
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState<any>(userDataInit);
  const value = {
    accessToken,
    setAccessToken,
    userData,
    setUserData,
  };

  //* 라우트 설정
  const content = useRoutes(routes);

  //* 스크롤 초기화
  useScrollReset();

  return (
    <>
      <SocketProvider>
        <GlobalContext.Provider value={value}>
          <HelmetProvider>
            <Helmet title="빅데이터 플랫폼">
              <meta charSet="utf-8" />
              <meta name="theme-color" content="#000000" />
              <meta name="subject" content="자본시장 빅데이터 플랫폼" />
              <meta name="author" content="이노핀" />
              <meta
                name="keywords"
                content="주식앱, 주식앱추천, 증권앱, 주식어플리케이션, 모바일어플리케이션, 종목상담, 종목상담앱, 주식투자어플리케이션, 모바일앱, 인공지능, 로보어드바이저, 주식분석, 주식종목추천, 주식로봇, 주식인공지능, 가치투자, 모멘텀분석, 모멘텀발굴, 주식알고리즘, 수익률, 주식수익률, 인공지능수익률, 로보어드바이저수익률, AI1008, AI2001"
              />
              <meta name="description" content="자본시장 빅데이터 플랫폼" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="자본시장 빅데이터 플랫폼" />
              <meta
                property="og:description"
                content="자본시장 빅데이터 플랫폼"
              />
              <meta
                property="og:site_name"
                content="자본시장 빅데이터 플랫폼"
              />
              <meta property="og:image" content={ogImg} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta property="og:image:type" content="image/png" />
              {/* <meta property="og:url" content="https://app.tudal.co.kr" /> */}
              <meta name="content-language" content="kr" />
              <link rel="apple-touch-icon" href="../src/assets/ogimg.png" />
              <link rel="icon" href={ogImg} />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            </Helmet>
          </HelmetProvider>
          <GlobalStyles />
          {content}
        </GlobalContext.Provider>
      </SocketProvider>
    </>
  );
}

export default App;
