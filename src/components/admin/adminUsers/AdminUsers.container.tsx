import { useQuery } from "@apollo/client";
import { Query, QueryUsersArgs } from "../../../commons/types/generated/types";
import AdminUsersPresenter from "./AdminUsers.presenter";
import { USERS } from "./AdminUsers.query";

const AdminUsersContainer = () => {
  const { data } = useQuery<Query, QueryUsersArgs>(USERS);

  return <AdminUsersPresenter userList={data?.users} />;
};

export default AdminUsersContainer;
