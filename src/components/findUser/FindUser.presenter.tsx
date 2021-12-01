import {
  FindUserBtn,
  FindUserError,
  FindUserInput,
  FindUserTitleId,
  FindUserTitlePass,
  FindUserTitleWrapper,
  FindUserWrapper,
  FindUserErrorSVG,
  FindUserInputWrapper,
  FindIdTitle,
  FindIdBox,
  FindIdResultTitle,
  FindIdResultSubTitle,
  FindId,
  FindIdDate,
  FindIdBtnWrapper,
  FindIdLeftBtn,
  FindIdRigthBtn,
  FindPassInputWrapper,
  FindPassInput,
  FindPassEamilAuthWrapper,
  FindPassEmailInput,
  FindPassEmailAuthBtn,
  FindPassBtn,
  FindPassResetWrapper,
  FindPassResetInputTitle,
  FindPassResetInput,
  FindPassResetBtn,
  FindPassReset,
  FindPassError,
} from "./FindUser.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InfoSVG from "../../assets/images/info.svg";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

interface IFindUserProps {
  isActive: {
    id: boolean;
    pass: boolean;
  };
  isFind: string;
  resultId: {
    id: string;
    email: string;
    username: string;
    createdAt: string;
  };
  isAuth: {
    isSend: boolean;
    isOk: boolean;
    isError: boolean;
  };
  errorMsg: {
    authError: boolean;
    findError: boolean;
  };
  handleIsActive: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleFindId: (data: any) => Promise<void>;
  handleEmailAuth: (email: string) => Promise<void>;
  handleEmailAuthCheck: (auth: string) => Promise<void>;
  handleFindPass: (input: any) => Promise<void>;
  handleResetPass: (input: any) => Promise<void>;
}

const schmaId = yup.object({
  name: yup.string().required("이름은 필수 입력입니다."),
  email: yup
    .string()
    .required("회원가입시 사용한 본인확인 이메일 주소를 기입해 주세요.")
    .email("이메일 형식에 맞게 입력해주세요."),
});
const schmaPass = yup.object({
  passName: yup.string().required("이름은 필수 입력입니다."),
  passEmail: yup
    .string()
    .required("회원가입시 사용한 본인확인 이메일 주소를 기입해 주세요.")
    .email("이메일 형식에 맞게 입력해주세요."),
  auth: yup.string(),
});

const schmaPassRest = yup.object({
  password: yup
    .string()
    .required()
    .min(8, "비밀번호는 8자 이상, 소문자와 대문자 포함되어야 합니다.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "비밀번호는 8자 이상, 소문자와 대문자 포함되어야 합니다."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호가 서로 다릅니다.")
    .oneOf([yup.ref("password")], "비밀번호가 서로 다릅니다."),
});

const FindUserPresenter: React.FC<IFindUserProps> = ({
  isActive,
  handleIsActive,
  handleFindId,
  isFind,
  resultId,
  handleEmailAuth,
  isAuth,
  handleEmailAuthCheck,
  handleFindPass,
  handleResetPass,
  errorMsg,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(
      isFind === "findId"
        ? schmaId
        : isFind === "pass"
        ? schmaPassRest
        : schmaPass
    ),
  });
  const navigate = useNavigate();

  return (
    <>
      <FindUserWrapper>
        {isFind === "findId" && (
          <>
            <FindUserTitleWrapper>
              <FindUserTitleId
                id="id"
                style={{ marginRight: "51px" }}
                isActive={isActive}
                onClick={(e) => {
                  handleIsActive(e);
                }}
              >
                아이디 찾기
              </FindUserTitleId>
              <FindUserTitlePass
                id="pass"
                isActive={isActive}
                onClick={handleIsActive}
              >
                비밀번호 찾기
              </FindUserTitlePass>
            </FindUserTitleWrapper>
            <form onSubmit={handleSubmit(handleFindId)}>
              <>
                <FindUserInputWrapper>
                  <FindUserInput placeholder="이름" {...register("name")} />
                  <FindUserInput
                    placeholder="본인 확인 이메일 주소"
                    {...register("email")}
                  />
                </FindUserInputWrapper>
                {errors?.name?.message && (
                  <FindUserError>
                    <FindUserErrorSVG src={InfoSVG} />
                    {errors?.name?.message}
                  </FindUserError>
                )}
                {errors?.email?.message && (
                  <FindUserError>
                    <FindUserErrorSVG src={InfoSVG} />
                    {errors?.email?.message}
                  </FindUserError>
                )}
                <FindUserBtn type="submit">아이디 찾기</FindUserBtn>
              </>
            </form>
          </>
        )}
        {isFind === "findPass" && (
          <>
            <FindUserTitleWrapper>
              <FindUserTitleId
                id="id"
                style={{ marginRight: "51px" }}
                isActive={isActive}
                onClick={handleIsActive}
              >
                아이디 찾기
              </FindUserTitleId>
              <FindUserTitlePass
                id="pass"
                isActive={isActive}
                onClick={handleIsActive}
              >
                비밀번호 찾기
              </FindUserTitlePass>
            </FindUserTitleWrapper>
            <form
              onSubmit={handleSubmit((input) => {
                if (isAuth.isOk) {
                  handleFindPass(input);
                }
              })}
            >
              <>
                <FindPassInputWrapper>
                  <FindPassInput placeholder="이름" {...register("passName")} />
                  <FindPassEamilAuthWrapper>
                    <FindPassEmailInput
                      placeholder="본인 확인 이메일 주소"
                      disabled={isAuth.isSend}
                      {...register("passEmail")}
                    />
                    {isAuth.isSend ? (
                      <>
                        <FindPassEmailAuthBtn
                          disabled={isAuth.isOk}
                          onClick={() => {
                            handleEmailAuthCheck(getValues("auth"));
                          }}
                        >
                          인증번호 확인
                        </FindPassEmailAuthBtn>
                      </>
                    ) : (
                      <>
                        <FindPassEmailAuthBtn
                          disabled={isAuth.isOk}
                          type="button"
                          onClick={() => {
                            handleEmailAuth(getValues("passEmail"));
                          }}
                        >
                          인증번호 발송
                        </FindPassEmailAuthBtn>
                      </>
                    )}
                  </FindPassEamilAuthWrapper>
                  <FindPassInput
                    placeholder="인증번호"
                    disabled={isAuth.isOk}
                    {...register("auth")}
                  />
                </FindPassInputWrapper>
                {errorMsg.findError && (
                  <FindUserError>
                    <FindUserErrorSVG src={InfoSVG} />
                    회원가입 시 사용한 본인확인 이메일 주소를 기입해 주세요
                  </FindUserError>
                )}
                {errorMsg.authError && (
                  <FindUserError>
                    <FindUserErrorSVG src={InfoSVG} />
                    인증번호를 다시 확인 해주세요
                  </FindUserError>
                )}
                <FindPassBtn type="submit">비밀번호 찾기</FindPassBtn>
              </>
            </form>
          </>
        )}
        {isFind === "id" && (
          <>
            <FindIdTitle>아이디 찾기</FindIdTitle>
            <FindIdBox>
              {resultId.username === "" ? (
                <>
                  <FindIdResultTitle>
                    입력해 주신 내용과 일치하는 아이디가 없습니다.
                  </FindIdResultTitle>
                </>
              ) : (
                <>
                  <FindIdResultTitle>
                    아래의 아이디를 확인해주세요
                  </FindIdResultTitle>
                  <FindIdResultSubTitle>
                    회원님의 정보와 일치하는 아이디 정보입니다
                  </FindIdResultSubTitle>
                </>
              )}
            </FindIdBox>
            {resultId.username && (
              <>
                <FindId>아이디 : {resultId.username}</FindId>
                <FindIdDate>
                  가입일 : {dayjs(resultId.createdAt).format("YYYY.MM.DD")}
                </FindIdDate>
              </>
            )}

            <FindIdBtnWrapper>
              <FindIdLeftBtn>비밀번호 찾기</FindIdLeftBtn>
              <FindIdRigthBtn
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </FindIdRigthBtn>
            </FindIdBtnWrapper>
          </>
        )}
        {isFind === "pass" && (
          <>
            <form
              onSubmit={handleSubmit((input) => {
                if (isFind === "pass") {
                  handleResetPass(input);
                }
              })}
            >
              <FindPassReset>
                <FindIdTitle>비밀번호 재설정</FindIdTitle>
                <FindIdBox>
                  <FindIdResultTitle>
                    비밀번호를 다시 설정 해주세요
                  </FindIdResultTitle>
                  <FindIdResultSubTitle>
                    새로운 비밀번호를 설정하시고 FinBig을 이용해 보세요.
                  </FindIdResultSubTitle>
                </FindIdBox>
                <FindPassResetWrapper>
                  <FindPassResetInputTitle>새 비밀번호</FindPassResetInputTitle>
                  <FindPassResetInput
                    {...register("password")}
                    type="password"
                  />
                </FindPassResetWrapper>
                <FindPassResetWrapper>
                  <FindPassResetInputTitle>
                    비밀번호 확인
                  </FindPassResetInputTitle>
                  <FindPassResetInput
                    {...register("passwordCheck")}
                    type="password"
                  />
                </FindPassResetWrapper>
                {errors?.passwordCheck?.message && (
                  <>
                    <FindPassError>
                      <FindUserErrorSVG src={InfoSVG}></FindUserErrorSVG>
                      {errors?.passwordCheck?.message}
                    </FindPassError>
                  </>
                )}
                {errors?.password?.message && (
                  <>
                    <FindPassError>
                      <FindUserErrorSVG src={InfoSVG}></FindUserErrorSVG>
                      {errors?.password?.message}
                    </FindPassError>
                  </>
                )}
                <FindPassResetBtn type="submit">확인</FindPassResetBtn>
              </FindPassReset>
            </form>
          </>
        )}
      </FindUserWrapper>
    </>
  );
};

export default FindUserPresenter;
