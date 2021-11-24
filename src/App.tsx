import { createContext, useState } from "react";
import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import useScrollReset from "./components/common/useScrollReset";

const userDataInit = {
  _id: "",
  email: "",
  createdAt: "",
  username: "",
  role: {
    _id: "",
    name: "",
  },
};

//* 전역 상태 값
export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (__: string) => {},
  userData: userDataInit,
  setUserData: (__: typeof userDataInit) => {},
});

function App() {
  //* 전역상태 관리
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState(userDataInit);
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
      <GlobalContext.Provider value={value}>
        <GlobalStyles />
        {content}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
