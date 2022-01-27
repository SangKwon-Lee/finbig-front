import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Mutation,
  MutationUpdateUserArgs,
} from "../../../commons/types/generated/types";
import WithAuth from "../../common/hocs/withAuth";
import MypageWithdrawPresenter from "./MypageWithdraw.presenter";
import { DELETE_USER } from "./MypageWithdraw.query";

const MypageWithdrawContainer = () => {
  const navigate = useNavigate();

  //* 약관동의 체크
  const [check, setCheck] = useState(false);

  //* 탈퇴
  const [deleteUser] = useMutation<Mutation, MutationUpdateUserArgs>(
    DELETE_USER
  );

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
                id: String(sessionStorage.getItem("userId")),
              },
            },
          },
        });
        alert("정상적으로 탈퇴됐습니다.");
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
      } catch (error) {
        console.log(error);
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
