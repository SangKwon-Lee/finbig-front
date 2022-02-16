import styled from "@emotion/styled";
import XSVG from "../../../assets/images/x.svg";
import { ApolloQueryResult } from "@apollo/client";
import { useState } from "react";
import {
  Exact,
  useCreateEmailAuthMutation,
  useDeleteEmailAuthMutation,
  useEmailAuthsQuery,
  UserQuery,
  useUpdateUserMutation,
  useUserQuery,
} from "../../../commons/graphql/generated";

//* style
const ChangeEmaillWrapper = styled.div`
  position: absolute;
  box-shadow: 1px 3px 3px gray;
  width: 478px;
  height: 226px;
  border: 1px solid #cccccc;
  top: 50%;
  background-color: white;
  border-radius: 13px;
`;

const ChangeEmailTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
  padding-left: 34px;
  padding-right: 34px;
  background-color: #f9f9f9;
  border-radius: 13px 13px 0px 0px;
`;
const ChangeEmailTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
`;
const ChangeEmailXSVG = styled.img`
  cursor: pointer;
`;

const ChangeContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 27px 33px 19px 33px;
`;

const ChangeInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ChangeInput = styled.input`
  width: 332px;
  height: 36px;
  outline: none;
  border: 1px solid #cccccc;
  padding-left: 13px;
`;

const ChangeInputTitle = styled.div`
  font-size: 14px;
  width: 53px;
  margin-right: 27px;
`;

const ChangeBtnWrapper = styled.div`
  display: flex;
  width: 410px;
  justify-content: end;
`;

const ChangeCancel = styled.button`
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 68px;
  height: 31px;
  color: #999999;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  outline: none;
  margin-right: 12px;
`;

const ChangeBtn = styled.button`
  border-radius: 5px;
  border: none;
  width: 68px;
  height: 31px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: #4033a2;
  outline: none;
`;

const ChangeAuthBtn = styled.button`
  width: 93px;
  height: 36px;
  background-color: #333333;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
`;

interface IMypageProfileModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  userRefetch: (
    variables?:
      | Partial<
          Exact<{
            id: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<UserQuery>>;
}
const MypageProfileModalContainer: React.FC<IMypageProfileModalProps> = ({
  setIsModal,
  userRefetch,
}) => {
  //* 인증 상태
  const [isAuth, setIsAuth] = useState({
    isSend: false,
    isOk: false,
    isError: false,
  });

  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("");
  //* 이메일 인증 Mutation
  const [emailAuth] = useCreateEmailAuthMutation();

  //* 이메일 인증 후 데이터 삭제
  const [deleteEmailAuth] = useDeleteEmailAuthMutation();

  //* 이메일 인증 코드 데이터
  const { data, refetch } = useEmailAuthsQuery();

  //* 회원정보 변경 뮤테이션
  const [updateUser] = useUpdateUserMutation();

  //* 유저 정보 불러오기
  const { data: userData } = useUserQuery({
    variables: {
      id: String(sessionStorage.getItem("userId")),
    },
  });

  //* 인증번호 발송
  const handleEmailAuth = async () => {
    try {
      await emailAuth({
        variables: {
          input: {
            data: {
              email: email,
              code: "",
              type: "change",
            },
          },
        },
      });
      alert("인증코드가 메일로 전송됐습니다.");
      setIsAuth({
        ...isAuth,
        isSend: true,
      });
      refetch();
    } catch (error) {
      alert("이미 가입된 이메일입니다.");
    }
  };

  //* 인증번호 확인
  const handleEmailAuthCheck = async () => {
    let Auth: any[] = data!.emailAuths!.filter(
      (data: any) => data.code === auth
    );
    if (Auth.length === 1) {
      try {
        setIsAuth({
          ...isAuth,
          isOk: true,
          isError: false,
        });
        await deleteEmailAuth({
          variables: {
            input: {
              where: {
                id: Auth[0].id,
              },
            },
          },
        });
        alert("인증이 완료됐습니다.");
      } catch (error) {
        setIsAuth({
          ...isAuth,
          isError: true,
        });
      }
    } else {
      setIsAuth({
        ...isAuth,
        isError: true,
      });
    }
  };

  //*회원정보 변경 함수
  const handleUpdateUser = async () => {
    try {
      await updateUser({
        variables: {
          input: {
            data: {
              email: email,
            },
            where: {
              id: String(userData?.user?.id),
            },
          },
        },
      });
      alert("이메일이 변경됐습니다.");
      userRefetch();
    } catch (error) {}
  };
  return (
    <ChangeEmaillWrapper>
      <ChangeEmailTitleWrapper>
        <ChangeEmailTitle>이메일 변경</ChangeEmailTitle>
        <ChangeEmailXSVG
          src={XSVG}
          onClick={() => {
            setIsModal(false);
            setEmail("");
          }}
        />
      </ChangeEmailTitleWrapper>
      <ChangeContentsWrapper>
        <ChangeInputWrapper>
          <ChangeInputTitle>이메일</ChangeInputTitle>
          <ChangeInput
            style={{ width: "239px" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!isAuth.isSend ? (
            <ChangeAuthBtn onClick={handleEmailAuth}>인증번호</ChangeAuthBtn>
          ) : (
            <ChangeAuthBtn
              onClick={handleEmailAuthCheck}
              disabled={isAuth.isOk}
            >
              {isAuth.isOk ? "인증완료" : "인증확인"}
            </ChangeAuthBtn>
          )}
        </ChangeInputWrapper>
        <ChangeInputWrapper>
          <ChangeInputTitle>인증번호</ChangeInputTitle>
          <ChangeInput
            onChange={(e) => {
              setAuth(e.target.value);
            }}
          />
        </ChangeInputWrapper>
        <ChangeBtnWrapper>
          <ChangeCancel
            onClick={() => {
              setIsModal(false);
              setEmail("");
            }}
          >
            취소
          </ChangeCancel>
          <ChangeBtn
            disabled={!isAuth.isOk}
            onClick={() => {
              setIsModal(false);
              handleUpdateUser();
            }}
          >
            변경
          </ChangeBtn>
        </ChangeBtnWrapper>
      </ChangeContentsWrapper>
    </ChangeEmaillWrapper>
  );
};

export default MypageProfileModalContainer;
