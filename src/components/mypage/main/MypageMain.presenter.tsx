import { UsersPermissionsUser } from "../../../commons/types/generated/types";
import MypageLayoutContainer from "../../common/layout/mypage/MypageLayout.container";
import {
  MypageBody,
  MypageMainContentsWrapper,
  MypageMainTitle,
  MypageMainUsername,
  MypageMainWrapper,
} from "./MypageMain.style";

interface IMypageMainProps {
  data: any;
  userId: string | null;
}

const MypageMainPresenter: React.FC<IMypageMainProps> = ({ data, userId }) => {
  const user: UsersPermissionsUser = data?.user;

  return (
    <MypageMainWrapper>
      <MypageBody>
        <MypageLayoutContainer menu={"mypage"} />
        <MypageMainContentsWrapper>
          <MypageMainTitle>
            <MypageMainUsername>{user?.username}</MypageMainUsername>님
            안녕하세요!
          </MypageMainTitle>
        </MypageMainContentsWrapper>
      </MypageBody>
    </MypageMainWrapper>
  );
};

export default MypageMainPresenter;
