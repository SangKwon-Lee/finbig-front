import { useNavigate } from "react-router";
import {
  MypageMenuWrapper,
  MypageTitle,
  MypageBtn,
} from "./MypageLayout.style";

interface IMypageLayoutProps {
  menu: string;
}

const MypageLayoutPresenter: React.FC<IMypageLayoutProps> = ({ menu }) => {
  const navigate = useNavigate();

  return (
    <MypageMenuWrapper>
      <MypageTitle
        onClick={() => {
          navigate("/mypage/main");
        }}
      >
        My Page
      </MypageTitle>
      <MypageBtn
        menu={menu === "payment" ? true : false}
        onClick={() => {
          navigate("/mypage/payment");
        }}
      >
        결제내역
      </MypageBtn>
      <MypageBtn
        menu={menu === "download" ? true : false}
        onClick={() => {
          navigate("/mypage/download");
        }}
      >
        다운로드 내역
      </MypageBtn>
      <MypageBtn
        menu={menu === "recent" ? true : false}
        onClick={() => {
          navigate("/mypage/recent");
        }}
      >
        최근 본 데이터
      </MypageBtn>
      <MypageBtn
        menu={menu === "profile" ? true : false}
        onClick={() => {
          navigate("/mypage/profile");
        }}
      >
        회원정보 변경
      </MypageBtn>
      <MypageBtn
        menu={menu === "withdraw" ? true : false}
        style={{ borderBottom: "none" }}
        onClick={() => {
          navigate("/mypage/withdraw");
        }}
      >
        회원탈퇴
      </MypageBtn>
    </MypageMenuWrapper>
  );
};
export default MypageLayoutPresenter;
