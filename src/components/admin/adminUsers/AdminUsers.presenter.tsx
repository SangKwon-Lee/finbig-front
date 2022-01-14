import {
  Maybe,
  UsersPermissionsUser,
} from "../../../commons/types/generated/types";
import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import {
  AdminUsersBody,
  AdminUsersTableContents,
  AdminUsersTableContentsWrapper,
  AdminUsersTableHeaderTitle,
  AdminUsersTableHeaderWrapper,
  AdminUsersTableWrapper,
  AdminUsersTitle,
  AdminUsersWrapper,
} from "./AdminUsers.style";

interface AdminUsersProps {
  userList: Maybe<Maybe<UsersPermissionsUser>[]> | undefined;
}

const AdminUsersPresenter: React.FC<AdminUsersProps> = ({ userList }) => {
  return (
    <>
      <AdminUsersWrapper>
        <AdminLayoutContainer menu="회원" />
        <AdminUsersBody>
          <AdminUsersTitle>회원관리</AdminUsersTitle>
          <AdminUsersTableWrapper>
            <AdminUsersTableHeaderWrapper>
              <AdminUsersTableHeaderTitle style={{ flex: 0.5 }}>
                순번
              </AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>이름</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>ID</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle style={{ flex: 2 }}>
                이메일
              </AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle style={{ flex: 1.5 }}>
                연락처
              </AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>
                이메일수신
              </AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>SMS수신</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>구독여부</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>등록일</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle>탈퇴일</AdminUsersTableHeaderTitle>
              <AdminUsersTableHeaderTitle style={{ flex: 1.5 }}>
                탈퇴 / 수정
              </AdminUsersTableHeaderTitle>
            </AdminUsersTableHeaderWrapper>
            <AdminUsersTableContentsWrapper>
              {userList?.map((data) => (
                <>
                  <AdminUsersTableContents style={{ flex: 0.5 }}>
                    {data?.id}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.name}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.username}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents style={{ flex: 2 }}>
                    {data?.email}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents style={{ flex: 1.5 }}>
                    {data?.phone}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.emailReception ? "O" : "X"}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.smsReception ? "O" : "X"}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.isSubscribe ? "O" : "X"}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>{data?.id}</AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.deletedAt}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents style={{ flex: 1.5 }}>
                    {data?.id}
                  </AdminUsersTableContents>
                </>
              ))}
            </AdminUsersTableContentsWrapper>
          </AdminUsersTableWrapper>
        </AdminUsersBody>
      </AdminUsersWrapper>
    </>
  );
};

export default AdminUsersPresenter;
