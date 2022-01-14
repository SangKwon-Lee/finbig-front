import { createContext, useState } from "react";
import { GlobalStyles } from "./commons/styles/globalStyles";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import useScrollReset from "./components/common/hooks/useScrollReset";
import { UsersPermissionsMe } from "./commons/types/generated/types";
import SocketProvider from "../src/components/contexts/SocketContext";
const userDataInit: UsersPermissionsMe = {
  id: "",
  email: "",
  username: "",
  role: {
    id: "",
    name: "",
    description: "",
    type: "",
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
      <SocketProvider>
        <GlobalContext.Provider value={value}>
          <GlobalStyles />
          {content}
        </GlobalContext.Provider>
      </SocketProvider>
    </>
  );
}

export default App;
