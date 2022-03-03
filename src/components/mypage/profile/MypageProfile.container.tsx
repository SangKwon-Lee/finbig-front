import { useState } from "react";
import { useNavigate } from "react-router";
import MypageProfilePresenter from "./MypageProfile.presenter";
import WithAuth from "../../common/hocs/withAuth";
import {
  useLoginMutation,
  useTokensQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../../commons/graphql/generated";
const MypageProfileContainer = () => {
  const token = sessionStorage.getItem("accessToken");
  const tokenId = sessionStorage.getItem("token");

  //* 토큰
  const { data: user } = useTokensQuery({
    variables: {
      where: {
        token: token,
        id: tokenId,
      },
    },
  });

  const navigate = useNavigate();

  //* 다음 스탭
  const [step, setStep] = useState(0);

  //* 비밀번호 Input
  const [input, setInput] = useState({
    password: "",
  });

  //*모달 오픈
  const [isModal, setIsModal] = useState(false);

  //* 비밀번호 에러
  const [pwError, setPwError] = useState(false);

  //* 유저 정보 불러오기
  const { data: userData, refetch: userRefetch } = useUserQuery({
    variables: {
      id: String(user?.tokens![0]?.userId),
    },
  });

  //* 로그인 뮤테이션
  const [login] = useLoginMutation();

  //* 회원정보 변경 뮤테이션
  const [updateUser] = useUpdateUserMutation();

  //* 회원정보 변경을 위한 로그인
  const handleLogin = async () => {
    try {
      await login({
        variables: {
          input: {
            identifier: String(userData?.user?.username),
            password: input.password,
          },
        },
      });
      setPwError(false);
      setStep(() => step + 1);
    } catch (error) {
      alert("비밀번호가 일치하지 않습니다.");
      setPwError(true);
    }
  };

  //*패스워드 입력
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //*회원정보 변경 함수
  const handleUpdateUser = async (data: any) => {
    try {
      const emailReception = data.emailReception === "true" ? true : false;
      const smsReception = data.smsReception === "true" ? true : false;
      await updateUser({
        variables: {
          input: {
            data: {
              email: data.email,
              password: data.password,
              phone: data.phone,
              smsReception,
              emailReception,
            },
            where: {
              id: String(userData?.user?.id),
            },
          },
        },
      });
      alert("회원정보가 변경됐습니다.");
      navigate("/mypage/main");
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  };

  //* 엔터 키 누를 시 로그인 실행
  const onEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <MypageProfilePresenter
      step={step}
      isModal={isModal}
      setIsModal={setIsModal}
      pwError={pwError}
      userData={userData}
      userRefetch={userRefetch}
      handleLogin={handleLogin}
      onEnterLogin={onEnterLogin}
      handlePasswordInput={handlePasswordInput}
      handleUpdateUser={handleUpdateUser}
    />
  );
};

export default WithAuth(MypageProfileContainer);
