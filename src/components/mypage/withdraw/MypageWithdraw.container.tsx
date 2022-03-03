import { useState } from "react";
import { useNavigate } from "react-router";
import {
  useTokensQuery,
  useUpdateUserMutation,
} from "../../../commons/graphql/generated";
import WithAuth from "../../common/hocs/withAuth";
import MypageWithdrawPresenter from "./MypageWithdraw.presenter";
const MypageWithdrawContainer = () => {
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

  //* 약관동의 체크
  const [check, setCheck] = useState(false);

  //* 탈퇴
  const [deleteUser] = useUpdateUserMutation();

  //* 탈퇴 함수
  const handleDeleteUser = async () => {
    if (check) {
      try {
        await deleteUser({
          variables: {
            input: {
              data: {
                isDeleted: true,
                deletedAt: new Date(),
              },
              where: {
                id: String(user?.tokens![0]?.userId),
              },
            },
          },
        });
        alert("정상적으로 탈퇴됐습니다.");
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
      } catch (error) {
        alert("오류가 발생했습니다.");
      }
    } else {
      alert("안내사항에 동의해주셔야 합니다.");
    }
  };

  return (
    <MypageWithdrawPresenter
      check={check}
      setCheck={setCheck}
      handleDeleteUser={handleDeleteUser}
    />
  );
};

export default WithAuth(MypageWithdrawContainer);
