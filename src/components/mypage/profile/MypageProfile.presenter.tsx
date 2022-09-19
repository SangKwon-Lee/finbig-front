import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  MypageBody,
  MypageProfileWrapper,
  MypageProfileContentsWrapper,
  MypageProfileTitle,
  MypageProfileContents,
  MypageLine,
  MypageProfileIDWrapper,
  MypageProfileIDTitle,
  MypageProfileID,
  MypageProfilePWInput,
  MyapgeBtnWrapper,
  MypageBtnCancel,
  MypageBtnNext,
  ErrorMsg,
  ErrorImg,
  MypageProfileChangeWrapper,
  MypageProfileChangeTitle,
  MypageProfileChangeContents,
  MypageProfileChangeInput,
  MypageProfileRadio,
  MypageRadioTitle,
  MypageChangeEmailBtn,
} from "./MypageProfile.style";
import InfoSVG from "../../../assets/images/info.svg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MypageProfileModalContainer from "./MypageProfileModal.container";
import { ApolloQueryResult } from "@apollo/client";
import { Exact, UserQuery } from "../../../commons/graphql/generated";

interface IMypageProfleProps {
  step: number;
  pwError: boolean;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserQuery | undefined;
  userRefetch: (
    variables?:
      | Partial<
          Exact<{
            id: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<UserQuery>>;
  handleLogin: () => Promise<void>;
  onEnterLogin: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleUpdateUser: (data: any) => Promise<void>;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const schma = yup.object({
  password: yup
    .string()
    .required("비밀번호는 8자 이상, 숫자 + 영문 조합이어야 합니다.")
    .min(8, "비밀번호는 8자 이상, 숫자 + 영문 조합이어야 합니다.")
    .matches(
      /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
      "비밀번호는 8자 이상, 숫자 + 영문 조합이어야 합니다."
    ),
  confirmPassword: yup
    .string()
    .required("비밀번호가 서로 다릅니다.")
    .oneOf([yup.ref("password")], "비밀번호가 서로 다릅니다."),
  phone: yup.string().required("필수 입력입니다."),
  emailReception: yup.string().required(),
  smsReception: yup.string().required(),
});

const MypageProfilePresenter: React.FC<IMypageProfleProps> = ({
  userData,
  handleLogin,
  handlePasswordInput,
  pwError,
  step,
  handleUpdateUser,
  isModal,
  setIsModal,
  userRefetch,
  onEnterLogin,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schma) });

  const navigate = useNavigate();

  return (
    <MypageProfileWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="profile" />
        <MypageProfileContentsWrapper>
          <MypageProfileTitle>회원정보 변경</MypageProfileTitle>
          {step === 0 && (
            <MypageProfileContents>
              회원 개인정보를 확인하고 수정 할 수 있습니다
            </MypageProfileContents>
          )}

          <MypageLine style={{ marginTop: "17.5px", marginBottom: "41.5px" }} />
          {step === 0 && (
            <>
              <MypageProfileIDWrapper>
                <MypageProfileIDTitle>아이디</MypageProfileIDTitle>
                <MypageProfileID>{userData?.user?.username}</MypageProfileID>
              </MypageProfileIDWrapper>
              <MypageProfileIDWrapper>
                <MypageProfileIDTitle>비밀번호</MypageProfileIDTitle>
                <MypageProfilePWInput
                  name="password"
                  type="password"
                  onChange={handlePasswordInput}
                  pwError={pwError}
                  onKeyPress={onEnterLogin}
                />
                {pwError && (
                  <>
                    <ErrorImg src={InfoSVG}></ErrorImg>
                    <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
                  </>
                )}
              </MypageProfileIDWrapper>
            </>
          )}
          {step === 1 && (
            <>
              <form onSubmit={handleSubmit(handleUpdateUser)}>
                <MypageProfileChangeWrapper style={{ marginBottom: "24px" }}>
                  <MypageProfileChangeTitle>아이디</MypageProfileChangeTitle>
                  <MypageProfileChangeContents>
                    {userData?.user?.username}
                  </MypageProfileChangeContents>
                </MypageProfileChangeWrapper>
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>비밀번호</MypageProfileChangeTitle>
                  <MypageProfileChangeInput
                    type="password"
                    {...register("password")}
                    passwordError={errors?.password?.message}
                  />
                  {errors?.password?.message && (
                    <>
                      <ErrorImg src={InfoSVG} />
                      <ErrorMsg>{errors?.password?.message}</ErrorMsg>
                    </>
                  )}
                </MypageProfileChangeWrapper>
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>
                    비밀번호 확인
                  </MypageProfileChangeTitle>
                  <MypageProfileChangeInput
                    type="password"
                    {...register("confirmPassword")}
                    passwordError={errors?.confirmPassword?.message}
                  />
                  {errors?.confirmPassword?.message && (
                    <>
                      <ErrorImg src={InfoSVG} />
                      <ErrorMsg>{errors?.confirmPassword?.message}</ErrorMsg>
                    </>
                  )}
                </MypageProfileChangeWrapper>
                <MypageLine
                  style={{ marginTop: "33.5px", marginBottom: "33.5px" }}
                />
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>이메일</MypageProfileChangeTitle>
                  <MypageProfileChangeContents>
                    {userData?.user?.email}
                  </MypageProfileChangeContents>
                  <MypageChangeEmailBtn
                    onClick={() => {
                      setIsModal(true);
                    }}
                  >
                    이메일 변경
                  </MypageChangeEmailBtn>
                </MypageProfileChangeWrapper>
                <MypageLine
                  style={{ marginTop: "33.5px", marginBottom: "33.5px" }}
                />
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>이름</MypageProfileChangeTitle>
                  <MypageProfileChangeContents>
                    {userData?.user?.name}
                  </MypageProfileChangeContents>
                </MypageProfileChangeWrapper>
                <MypageProfileChangeWrapper style={{ marginTop: "23px" }}>
                  <MypageProfileChangeTitle>
                    휴대전화번호
                  </MypageProfileChangeTitle>
                  <MypageProfileChangeInput
                    type="number"
                    placeholder="(-)없이 숫자만 입력해주세요"
                    {...register("phone")}
                    defaultValue={
                      userData?.user?.phone ? userData?.user?.phone : ""
                    }
                  />
                </MypageProfileChangeWrapper>
                <MypageLine
                  style={{ marginTop: "33.5px", marginBottom: "33.5px" }}
                />
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>
                    이메일 수신
                  </MypageProfileChangeTitle>
                  {userData?.user?.emailReception === true && (
                    <>
                      <MypageProfileRadio
                        type="radio"
                        id="emailTrue"
                        value="true"
                        {...register("emailReception")}
                        checked
                      />
                      <MypageRadioTitle htmlFor="emailTrue">
                        수신 허용
                      </MypageRadioTitle>
                      <MypageProfileRadio
                        type="radio"
                        id="emailFalse"
                        value="false"
                        {...register("emailReception")}
                      />
                      <MypageRadioTitle htmlFor="emailFalse">
                        수신 거부
                      </MypageRadioTitle>
                    </>
                  )}
                  {userData?.user?.emailReception === false && (
                    <>
                      <MypageProfileRadio
                        type="radio"
                        id="emailTrue"
                        value="true"
                        {...register("emailReception")}
                      />
                      <MypageRadioTitle htmlFor="emailTrue">
                        수신 허용
                      </MypageRadioTitle>
                      <MypageProfileRadio
                        type="radio"
                        id="emailFalse"
                        value="false"
                        {...register("emailReception")}
                        checked
                      />
                      <MypageRadioTitle htmlFor="emailFalse">
                        수신 거부
                      </MypageRadioTitle>
                    </>
                  )}
                </MypageProfileChangeWrapper>
                <MypageProfileChangeWrapper style={{ marginTop: "34px" }}>
                  <MypageProfileChangeTitle>SMS 수신</MypageProfileChangeTitle>
                  {userData?.user?.smsReception && (
                    <>
                      <MypageProfileRadio
                        type="radio"
                        id="SMSTrue"
                        value="true"
                        {...register("smsReception")}
                        checked
                      />
                      <MypageRadioTitle htmlFor="SMSTrue">
                        수신 허용
                      </MypageRadioTitle>
                      <MypageProfileRadio
                        type="radio"
                        id="SMSFalse"
                        value="false"
                        {...register("smsReception")}
                      />
                      <MypageRadioTitle htmlFor="SMSFalse">
                        수신 거부
                      </MypageRadioTitle>
                    </>
                  )}
                  {userData?.user?.smsReception === false && (
                    <>
                      <MypageProfileRadio
                        type="radio"
                        id="SMSTrue"
                        value="true"
                        {...register("smsReception")}
                      />
                      <MypageRadioTitle htmlFor="SMSTrue">
                        수신 허용
                      </MypageRadioTitle>
                      <MypageProfileRadio
                        type="radio"
                        id="SMSFalse"
                        value="false"
                        {...register("smsReception")}
                        checked
                      />
                      <MypageRadioTitle htmlFor="SMSFalse">
                        수신 거부
                      </MypageRadioTitle>
                    </>
                  )}
                </MypageProfileChangeWrapper>
                <MypageLine style={{ marginTop: "41.5px" }} />
                <MyapgeBtnWrapper>
                  <MypageBtnCancel
                    onClick={() => {
                      navigate("/mypage/main");
                    }}
                  >
                    취소
                  </MypageBtnCancel>
                  <MypageBtnNext type="submit">다음</MypageBtnNext>
                </MyapgeBtnWrapper>
              </form>
            </>
          )}
          {step === 0 && (
            <MyapgeBtnWrapper>
              <MypageBtnCancel
                onClick={() => {
                  navigate("/mypage/main");
                }}
              >
                취소
              </MypageBtnCancel>
              <MypageBtnNext onClick={handleLogin}>다음</MypageBtnNext>
            </MyapgeBtnWrapper>
          )}
        </MypageProfileContentsWrapper>
      </MypageBody>
      {isModal && (
        <MypageProfileModalContainer
          setIsModal={setIsModal}
          userRefetch={userRefetch}
        />
      )}
    </MypageProfileWrapper>
  );
};

export default MypageProfilePresenter;
