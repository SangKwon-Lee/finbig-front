import { useMutation, useQuery } from "@apollo/client";
import {
  Mutation,
  MutationUpdateUserArgs,
  Query,
  QueryUsersArgs,
} from "../../../commons/types/generated/types";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import { DELETE_USER } from "../../mypage/withdraw/MypageWithdraw.query";
import AdminUsersPresenter from "./AdminUsers.presenter";
import { USERS } from "./AdminUsers.query";

const AdminUsersContainer = () => {
  const { data } = useQuery<Query, QueryUsersArgs>(USERS);

  const [deleteUser] = useMutation<Mutation, MutationUpdateUserArgs>(
    DELETE_USER
  );

  const handleDeleteUser = async (e: any) => {
    try {
      await deleteUser({
        variables: {
          input: {
            data: {
              deletedAt: new Date(),
              isDeleted: true,
            },
            where: {
              id: e.target.id,
            },
          },
        },
      });
      alert("회원이 탈퇴 되었습니다.");
    } catch {}
  };

  return (
    <AdminUsersPresenter
      userList={data?.users}
      handleDeleteUser={handleDeleteUser}
    />
  );
};

export default WithAdminAuth(AdminUsersContainer);
