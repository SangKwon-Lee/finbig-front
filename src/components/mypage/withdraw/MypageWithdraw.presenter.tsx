import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  MypageBody,
  MypageWithdrawContentsWrapper,
  MypageWithdrawTitle,
  MypageWithdrawWrapper,
  MypageLine,
  MypageWithdrawTopBox,
  MypageWithdrawContentsTitle,
  MypageWithdrawContents,
  MypageWithdrawBottomBox,
  MypageWithdrawBottomLine,
  MypageWithdrawAgree,
  MypageWithdrawCheckImg,
  MypageWithdrawBtnWrapper,
  MypageWithdrawBtn,
  MypageWithdrawCancelBtn,
} from "./MypageWithdraw.style";
import CheckGraySVG from "../../../assets/images/checkGray.svg";
import CheckColorSVG from "../../../assets/images/checkColor.svg";

interface IMypageWithdrawProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteUser: () => Promise<void>;
}

const MypageWithdrawPresenter: React.FC<IMypageWithdrawProps> = ({
  check,
  setCheck,
  handleDeleteUser,
}) => {
  return (
    <MypageWithdrawWrapper>
      <MypageBody>
        <MypageLayoutContainer menu="withdraw" />
        <MypageWithdrawContentsWrapper>
          <MypageWithdrawTitle>회원탈퇴</MypageWithdrawTitle>
          <MypageLine />
          <MypageWithdrawTopBox>
            <MypageWithdrawContentsTitle>
              회원정보 및 내역 삭제
            </MypageWithdrawContentsTitle>

            <MypageWithdrawContents>
              회원 탈퇴 즉시 회원정보와 구매한 데이터는 모두 삭제되고, 재가입 시
              복구되지 않습니다.
              <br />
              [주의사항] 회원 탈퇴 후 재가입 시 기존에 구매한 데이터가 모두
              삭제되었기에 재구매 하셔야 합니다.
            </MypageWithdrawContents>
          </MypageWithdrawTopBox>
          <MypageWithdrawBottomBox>
            <MypageWithdrawContentsTitle>
              고객의 사전 동의 및 법령에 따른 개인정보 보유
            </MypageWithdrawContentsTitle>
            <MypageWithdrawContents>
              · 보존 근거 : 전자상거래 등에서의 소비자보호를 위한 법률
              <br />
              · 보존 기간 : 회원탈퇴 후 5년간
              <br />· 보존 정보 : 계약, 구매내역, 대금결제, 민원 등에 관한 기록
            </MypageWithdrawContents>
          </MypageWithdrawBottomBox>
          <MypageWithdrawContents>
            구독 기간이 남았을경우 별도의 환불 없이 아이디가 삭제 됩니다
          </MypageWithdrawContents>
          <MypageWithdrawBottomLine style={{ marginTop: "20px" }} />
          <MypageWithdrawAgree
            onClick={() => {
              setCheck(() => !check);
            }}
          >
            <MypageWithdrawCheckImg
              src={!check ? CheckGraySVG : CheckColorSVG}
            />
            상기 사항을 모두 확인하였으며, 안내사항에 동의합니다
          </MypageWithdrawAgree>
          <MypageWithdrawBottomLine />
          <MypageWithdrawBtnWrapper>
            <MypageWithdrawBtn onClick={handleDeleteUser}>
              회원탈퇴
            </MypageWithdrawBtn>
            <MypageWithdrawCancelBtn>취소</MypageWithdrawCancelBtn>
          </MypageWithdrawBtnWrapper>
        </MypageWithdrawContentsWrapper>
      </MypageBody>
    </MypageWithdrawWrapper>
  );
};

export default MypageWithdrawPresenter;
