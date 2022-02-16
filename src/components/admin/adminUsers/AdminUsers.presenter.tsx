import dayjs from "dayjs";
import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import {
  AdminUsersBody,
  AdminUsersModalTitle,
  AdminUsersModalTitleWrapper,
  AdminUsersTableContents,
  AdminUsersTableContentsWrapper,
  AdminUsersTableDeleteBtn,
  AdminUsersTableEditBtn,
  AdminUsersTableHeaderTitle,
  AdminUsersTableHeaderWrapper,
  AdminUsersTableWrapper,
  AdminUsersTitle,
  AdminUsersWrapper,
  AdminUsersModalCancel,
  AdminUsersModalTableBtn,
  AdminUsersModalTableContents,
  AdminUsersModalTableContentsWrapper,
  AdminUsersModalTableHeader,
  AdminUsersModalTableHeaderWrapper,
  AdminUsersModalTableInput,
  AdminUsersModalTableRadio,
  AdminUsersModalTableRadioTitle,
} from "./AdminUsers.style";
import { Box, Modal } from "@mui/material";
import XWhite from "../../../assets/images/XWhite.svg";
import { UserQuery, UsersQuery } from "../../../commons/graphql/generated";

interface AdminUsersProps {
  User: UserQuery | undefined;
  userList: UsersQuery | undefined;
  userListLoading: boolean;
  open: boolean;
  userInput: {
    name: string;
    username: string;
    email: string;
    phone: string;
    smsReception: boolean;
    emailReception: boolean;
  };
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  handleSaveUser: () => Promise<void>;
  handleUserInput: (e: any) => void;
  handleDeleteUser: (e: React.MouseEvent<HTMLElement>) => Promise<void>;
}

const AdminUsersPresenter: React.FC<AdminUsersProps> = ({
  userList,
  handleDeleteUser,
  handleClose,
  handleOpen,
  open,
  User,
  userInput,
  handleUserInput,
  handleSaveUser,
  userListLoading,
}) => {
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
              <AdminUsersTableHeaderTitle style={{ flex: 2.2 }}>
                탈퇴 / 수정
              </AdminUsersTableHeaderTitle>
            </AdminUsersTableHeaderWrapper>
            {!userListLoading &&
              userList!.users!.map((data) => (
                <AdminUsersTableContentsWrapper key={data?.id}>
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
                  <AdminUsersTableContents>
                    {dayjs(data?.created_at).format("YYYY.MM.DD")}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents>
                    {data?.deletedAt &&
                      dayjs(data?.deletedAt).format("YYYY.MM.DD")}
                  </AdminUsersTableContents>
                  <AdminUsersTableContents style={{ flex: 2.2 }}>
                    <AdminUsersTableEditBtn id={data?.id} onClick={handleOpen}>
                      수정
                    </AdminUsersTableEditBtn>
                    <AdminUsersTableDeleteBtn
                      id={data?.id}
                      onClick={handleDeleteUser}
                    >
                      탈퇴
                    </AdminUsersTableDeleteBtn>
                  </AdminUsersTableContents>
                </AdminUsersTableContentsWrapper>
              ))}
          </AdminUsersTableWrapper>
        </AdminUsersBody>
      </AdminUsersWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            bgcolor: "background.paper",
            boxShadow: 24,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingBottom: 3,
            overflow: "scroll",
          }}
        >
          <AdminUsersModalTitleWrapper>
            <AdminUsersModalTitle>회원 정보 수정</AdminUsersModalTitle>
            <AdminUsersModalCancel onClick={handleClose} src={XWhite} />
          </AdminUsersModalTitleWrapper>
          <AdminUsersModalTableHeaderWrapper>
            <AdminUsersModalTableHeader>이름</AdminUsersModalTableHeader>
            <AdminUsersModalTableHeader>ID</AdminUsersModalTableHeader>
            <AdminUsersModalTableHeader>이메일</AdminUsersModalTableHeader>
            <AdminUsersModalTableHeader>연락천</AdminUsersModalTableHeader>
            <AdminUsersModalTableHeader>이메일 수신</AdminUsersModalTableHeader>
            <AdminUsersModalTableHeader style={{ borderRight: "none" }}>
              SMS 수신
            </AdminUsersModalTableHeader>
          </AdminUsersModalTableHeaderWrapper>
          <AdminUsersModalTableContentsWrapper>
            <AdminUsersModalTableContents>
              <AdminUsersModalTableInput
                value={userInput.name}
                onChange={handleUserInput}
                name="name"
              />
            </AdminUsersModalTableContents>
            <AdminUsersModalTableContents>
              <AdminUsersModalTableInput
                value={userInput.username}
                onChange={handleUserInput}
                name="username"
              />
            </AdminUsersModalTableContents>
            <AdminUsersModalTableContents>
              <AdminUsersModalTableInput
                value={userInput.email}
                onChange={handleUserInput}
                name="email"
              />
            </AdminUsersModalTableContents>
            <AdminUsersModalTableContents>
              <AdminUsersModalTableInput
                value={userInput.phone}
                onChange={handleUserInput}
                name="phone"
              />
            </AdminUsersModalTableContents>
            <AdminUsersModalTableContents>
              <AdminUsersModalTableRadio
                type="radio"
                id="emailTrue"
                value="true"
                name="emailReception"
                defaultChecked={User?.user?.emailReception ? true : false}
                onChange={handleUserInput}
              />
              <AdminUsersModalTableRadioTitle htmlFor="emailTrue">
                허용
              </AdminUsersModalTableRadioTitle>
              <AdminUsersModalTableRadio
                type="radio"
                id="emailFalse"
                value="false"
                name="emailReception"
                onChange={handleUserInput}
                defaultChecked={User?.user?.emailReception ? false : true}
              />
              <AdminUsersModalTableRadioTitle htmlFor="emailFalse">
                거부
              </AdminUsersModalTableRadioTitle>
            </AdminUsersModalTableContents>
            <AdminUsersModalTableContents style={{ borderRight: "none" }}>
              <AdminUsersModalTableRadio
                type="radio"
                id="smsTrue"
                value="true"
                name="smsReception"
                onClick={handleUserInput}
                defaultChecked={User?.user?.smsReception ? true : false}
              />
              <AdminUsersModalTableRadioTitle htmlFor="smsTrue">
                허용
              </AdminUsersModalTableRadioTitle>
              <AdminUsersModalTableRadio
                type="radio"
                id="smsFalse"
                value="false"
                name="smsReception"
                onClick={handleUserInput}
                defaultChecked={User?.user?.smsReception ? false : true}
              />
              <AdminUsersModalTableRadioTitle htmlFor="smsFalse">
                거부
              </AdminUsersModalTableRadioTitle>
            </AdminUsersModalTableContents>
          </AdminUsersModalTableContentsWrapper>
          <AdminUsersModalTableBtn onClick={handleSaveUser}>
            저장
          </AdminUsersModalTableBtn>
        </Box>
      </Modal>
    </>
  );
};

export default AdminUsersPresenter;
