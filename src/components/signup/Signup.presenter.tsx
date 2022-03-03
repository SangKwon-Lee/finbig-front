import {
  CheckImg,
  SignupSubTitle,
  SignupTitle,
  SignupTitleWrapper,
  SignupWrapper,
  SignupBodyWrapper,
  SignupContents,
  Divider,
  SignupBox,
  SignupBtnWrapper,
  SignupWhiteBtn,
  SignupBlueBtn,
  SignupErrorMsg,
  SignupInputTitle,
  SignupInputWrapper,
  SignupInput,
  SignupRadio,
  SignupRadioWrapper,
  SignupRadioTitle,
  SignupEmailBtn,
  SignipErrorImg,
  SignupErrorWrapper,
  SignupSuccessMsg,
  SignupBigCheckWrapper,
  SignupSuccessTitle,
  SignupSuccessSubTitle,
} from "./Signup.style";
import CheckGraySVG from "../../assets/images/checkGray.svg";
import CheckColorSVG from "../../assets/images/checkColor.svg";
import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InfoSVG from "../../assets/images/info.svg";
import BigCheckSVG from "../../assets/images/bigCheck.svg";
import { MutationCreateUserArgs } from "../../commons/graphql/generated";
import ServiceContainer from "../terms/Service.container";
import PrivacyPolicyContainer from "../terms/PrivacyPolicy.container";

interface ISignupProps {
  step: number;
  errorMsg: boolean;
  isAuth: {
    isSend: boolean;
    isOk: boolean;
    isError: boolean;
  };
  checkInput: {
    first: boolean;
    second: boolean;
  };
  setCheckInput: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
    }>
  >;
  isCheckName: boolean;
  handleNextBtn: () => void;
  checkUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAllCheck: () => void;
  handleEmailAuth: (email: string) => Promise<void>;
  handleCreateUser: (data: MutationCreateUserArgs) => void;
  handleEmailAuthCheck: (auth: string) => Promise<void>;
}

const schma = yup.object({
  username: yup
    .string()
    .required("필수 입력입니다.")
    .min(4, "아이디는 4글자 이상이어야 합니다."),
  password: yup
    .string()
    .required("비밀번호는 8자 이상, 소문자와 대문자기 포함되어야 합니다.")
    .min(8, "비밀번호는 8자 이상, 소문자와 대문자가 포함되어야 합니다.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "비밀번호는 8자 이상, 소문자와 대문자가 포함되어야 합니다."
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호가 서로 다릅니다.")
    .oneOf([yup.ref("password")], "비밀번호가 서로 다릅니다."),
  email: yup
    .string()
    .required("필수 입력입니다.")
    .email("이메일 형식을 지켜주세요."),
  name: yup.string().required("필수 입력입니다."),
  phone: yup.string().required("필수 입력입니다."),
  emailReception: yup.string().required(),
  smsReception: yup.string().required(),
});

const SignupPresenter: React.FC<ISignupProps> = ({
  step,
  isAuth,
  errorMsg,
  checkInput,
  isCheckName,
  checkUsername,
  setCheckInput,
  handleNextBtn,
  handleAllCheck,
  handleCreateUser,
  handleEmailAuth,
  handleEmailAuthCheck,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schma) });
  const navigate = useNavigate();

  return (
    <SignupWrapper>
      {step === 0 ? (
        <SignupTitle>회원가입 약관동의</SignupTitle>
      ) : step === 1 ? (
        <SignupTitle>회원가입 입력</SignupTitle>
      ) : (
        <SignupTitle>회원가입 완료</SignupTitle>
      )}
      <SignupBodyWrapper>
        {step === 0 && (
          <>
            <SignupTitleWrapper onClick={handleAllCheck}>
              <CheckImg
                src={
                  checkInput.first && checkInput.second
                    ? CheckColorSVG
                    : CheckGraySVG
                }
              />
              <SignupSubTitle>전체 약관동의</SignupSubTitle>
            </SignupTitleWrapper>
            <SignupContents>
              전체 동의는 필수 및 선택 정보에 대한 동의도 포함 되어 있으며,
              개별적으로도 동의를 선택 할 수 있습니다.
            </SignupContents>
            <Divider />
            <SignupTitleWrapper
              onClick={() => {
                setCheckInput({
                  ...checkInput,
                  first: !checkInput.first,
                });
              }}
            >
              <CheckImg src={checkInput.first ? CheckColorSVG : CheckGraySVG} />
              <SignupSubTitle>이용약관 동의(필수)</SignupSubTitle>
            </SignupTitleWrapper>
            <SignupBox>
              <ServiceContainer />
            </SignupBox>
            <SignupTitleWrapper
              onClick={() => {
                setCheckInput({
                  ...checkInput,
                  second: !checkInput.second,
                });
              }}
            >
              <CheckImg
                src={checkInput.second ? CheckColorSVG : CheckGraySVG}
              />
              <SignupSubTitle>이용약관 동의(필수)</SignupSubTitle>
            </SignupTitleWrapper>
            <SignupBox>
              <PrivacyPolicyContainer />
            </SignupBox>
            {errorMsg && (
              <SignupErrorMsg>
                모든 약관에 동의해야 회원가입을 진행할 수 있습니다.
              </SignupErrorMsg>
            )}
            <SignupBtnWrapper>
              <SignupWhiteBtn
                onClick={() => {
                  navigate("/");
                }}
              >
                취소
              </SignupWhiteBtn>
              <SignupBlueBtn onClick={handleNextBtn}>다음</SignupBlueBtn>
            </SignupBtnWrapper>
          </>
        )}
        {step === 1 && (
          <>
            <form onSubmit={handleSubmit(handleCreateUser)}>
              <SignupSubTitle>가입 정보 입력</SignupSubTitle>
              <Divider />
              <SignupInputWrapper>
                <SignupInputTitle>아이디</SignupInputTitle>
                <SignupInput
                  isCheckName={isCheckName}
                  {...register("username")}
                  onChange={checkUsername}
                ></SignupInput>
                {isCheckName && (
                  <>
                    <SignupErrorWrapper>
                      <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                      중복된 아이디입니다.
                    </SignupErrorWrapper>
                  </>
                )}
                {errors?.username?.message && (
                  <SignupErrorWrapper>
                    <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                    {errors?.username?.message}
                  </SignupErrorWrapper>
                )}
              </SignupInputWrapper>
              <SignupInputWrapper>
                <SignupInputTitle>비밀번호</SignupInputTitle>
                <SignupInput
                  type="password"
                  {...register("password")}
                  passwordError={errors?.password?.message}
                ></SignupInput>

                {errors?.password?.message && (
                  <SignupErrorWrapper>
                    <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                    {errors?.password?.message}
                  </SignupErrorWrapper>
                )}
              </SignupInputWrapper>
              <SignupInputWrapper>
                <SignupInputTitle>비밀번호 확인</SignupInputTitle>
                <SignupInput
                  {...register("confirmPassword")}
                  type="password"
                  passwordError={errors?.confirmPassword?.message}
                ></SignupInput>
                {errors?.confirmPassword?.message && (
                  <SignupErrorWrapper>
                    <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                    {errors?.confirmPassword?.message}
                  </SignupErrorWrapper>
                )}
              </SignupInputWrapper>
              <Divider style={{ marginTop: "16px" }} />
              <SignupInputWrapper>
                <SignupInputTitle>이메일</SignupInputTitle>
                <SignupInput
                  // disabled={isAuth.isSend}
                  style={{ width: "335px" }}
                  {...register("email")}
                ></SignupInput>
                {isAuth.isSend ? (
                  <>
                    <SignupEmailBtn
                      // disabled={isAuth.isOk}
                      onClick={() => handleEmailAuthCheck(getValues("auth"))}
                    >
                      인증번호 확인
                    </SignupEmailBtn>
                    {isAuth.isOk && (
                      <SignupSuccessMsg>인증 성공</SignupSuccessMsg>
                    )}
                    {isAuth.isError && (
                      <SignupErrorWrapper>
                        인증 실패했습니다.
                      </SignupErrorWrapper>
                    )}
                    {errors?.email?.message && (
                      <SignupErrorWrapper>
                        <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                        {errors?.email?.message}
                      </SignupErrorWrapper>
                    )}
                  </>
                ) : (
                  <>
                    <SignupEmailBtn
                      // disabled={isAuth.isOk}
                      onClick={() => {
                        handleEmailAuth(getValues("email"));
                      }}
                    >
                      인증번호 발송
                    </SignupEmailBtn>
                    {errors?.email?.message && (
                      <SignupErrorWrapper>
                        <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                        {errors?.email?.message}
                      </SignupErrorWrapper>
                    )}
                  </>
                )}
              </SignupInputWrapper>
              <SignupInputWrapper>
                <SignupInputTitle>인증번호</SignupInputTitle>
                <SignupInput
                  disabled={isAuth.isOk}
                  {...register("auth")}
                ></SignupInput>
              </SignupInputWrapper>
              <Divider style={{ marginTop: "16px" }} />
              <SignupInputWrapper>
                <SignupInputTitle>이름</SignupInputTitle>
                <SignupInput {...register("name")}></SignupInput>
                {errors?.name?.message && (
                  <SignupErrorWrapper>
                    <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                    {errors?.name?.message}
                  </SignupErrorWrapper>
                )}
              </SignupInputWrapper>
              <SignupInputWrapper>
                <SignupInputTitle>휴대전화번호</SignupInputTitle>
                <SignupInput
                  type="number"
                  placeholder="(-)없이 숫자만 입력해주세요"
                  {...register("phone")}
                ></SignupInput>
                {errors?.phone?.message && (
                  <SignupErrorWrapper>
                    <SignipErrorImg src={InfoSVG}></SignipErrorImg>
                    {errors?.phone?.message}
                  </SignupErrorWrapper>
                )}
              </SignupInputWrapper>
              <Divider style={{ marginTop: "16px" }} />
              <SignupInputWrapper>
                <SignupInputTitle>이메일 수신</SignupInputTitle>
                <SignupRadioWrapper>
                  <SignupRadio
                    type="radio"
                    id="emailTrue"
                    {...register("emailReception")}
                    value="true"
                    checked
                  />
                  <SignupRadioTitle htmlFor="emailTrue">
                    수신 허용
                  </SignupRadioTitle>
                </SignupRadioWrapper>
                <SignupRadioWrapper>
                  <SignupRadio
                    type="radio"
                    id="emailFalse"
                    {...register("emailReception")}
                    value="false"
                  />
                  <SignupRadioTitle htmlFor="emailFalse">
                    수신 거부
                  </SignupRadioTitle>
                </SignupRadioWrapper>
              </SignupInputWrapper>
              <SignupInputWrapper>
                <SignupInputTitle>SMS 수신</SignupInputTitle>
                <SignupRadioWrapper>
                  <SignupRadio
                    type="radio"
                    id="SMSTrue"
                    value="true"
                    {...register("smsReception")}
                    checked
                  />
                  <SignupRadioTitle htmlFor="SMSTrue">
                    수신 허용
                  </SignupRadioTitle>
                </SignupRadioWrapper>
                <SignupRadioWrapper>
                  <SignupRadio
                    type="radio"
                    id="SMSFalse"
                    value="false"
                    {...register("smsReception")}
                  />
                  <SignupRadioTitle htmlFor="SMSFalse">
                    수신 거부
                  </SignupRadioTitle>
                </SignupRadioWrapper>
              </SignupInputWrapper>
              <Divider style={{ marginTop: "16px", marginBottom: "54px" }} />
              <SignupBtnWrapper>
                <SignupWhiteBtn
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  취소
                </SignupWhiteBtn>
                <SignupBlueBtn type="submit">다음</SignupBlueBtn>
              </SignupBtnWrapper>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <SignupBigCheckWrapper>
              <CheckImg
                style={{ width: "111px", margin: "0px" }}
                src={BigCheckSVG}
              />
              <SignupSuccessTitle>
                금융 빅데이터 플랫폼 회원가입이 완료되었습니다.
              </SignupSuccessTitle>
              <SignupSuccessSubTitle>
                가입해주셔서 감사합니다.
              </SignupSuccessSubTitle>
            </SignupBigCheckWrapper>
            <SignupBtnWrapper>
              <SignupWhiteBtn
                onClick={() => {
                  navigate("/");
                }}
              >
                메인화면
              </SignupWhiteBtn>
              <SignupBlueBtn
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </SignupBlueBtn>
            </SignupBtnWrapper>
          </>
        )}
      </SignupBodyWrapper>
    </SignupWrapper>
  );
};

export default SignupPresenter;
