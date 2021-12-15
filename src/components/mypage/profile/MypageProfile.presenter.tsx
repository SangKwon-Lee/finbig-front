import {
  Query,
  QueryUserArgs,
  UsersPermissionsUser,
} from "../../../commons/types/generated/types";
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

interface IMypageProfleProps {
  userData: any;
  handleLogin: () => Promise<void>;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pwError: boolean;
  step: number;
  handleUpdateUser: (data: any) => Promise<void>;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  userRefetch(
    variables?: Partial<QueryUserArgs> | undefined
  ): Promise<ApolloQueryResult<Query>>;
}

const schma = yup.object({
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
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schma) });
  const user: UsersPermissionsUser = userData?.user;
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
                <MypageProfileID>{user?.username}</MypageProfileID>
              </MypageProfileIDWrapper>
              <MypageProfileIDWrapper>
                <MypageProfileIDTitle>비밀번호</MypageProfileIDTitle>
                <MypageProfilePWInput
                  name="password"
                  type="password"
                  onChange={handlePasswordInput}
                />
                {pwError && (
                  <>
                    <ErrorImg src={InfoSVG}></ErrorImg>
                    <ErrorMsg>비밀번호가 다릅니다.</ErrorMsg>
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
                    {user?.username}
                  </MypageProfileChangeContents>
                </MypageProfileChangeWrapper>
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>비밀번호</MypageProfileChangeTitle>
                  <MypageProfileChangeInput
                    type="password"
                    {...register("password")}
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
                  <MypageProfileChangeContents {...register("email")}>
                    {user?.email}
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
                    {user?.name}
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
                    defaultValue={user?.phone ? user?.phone : ""}
                  />
                </MypageProfileChangeWrapper>
                <MypageLine
                  style={{ marginTop: "33.5px", marginBottom: "33.5px" }}
                />
                <MypageProfileChangeWrapper>
                  <MypageProfileChangeTitle>
                    이메일 수신
                  </MypageProfileChangeTitle>
                  {user?.emailReception === true && (
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
                  {user?.emailReception === false && (
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
                  {user?.smsReception && (
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
                  {user?.smsReception === false && (
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
