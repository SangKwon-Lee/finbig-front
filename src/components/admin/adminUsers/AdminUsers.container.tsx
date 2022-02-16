import { useEffect, useState } from "react";
import {
  useUpdateUserMutation,
  useUserQuery,
  useUsersQuery,
} from "../../../commons/graphql/generated";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import AdminUsersPresenter from "./AdminUsers.presenter";

const AdminUsersContainer = () => {
  //* 유저 ID 저장
  const [userId, setUserId] = useState("0");

  //* 유저 Input
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    smsReception: false,
    emailReception: false,
  });

  //* 모달 상태
  const [open, setOpen] = useState(false);

  //* 모든 회원 정보
  const {
    data: useList,
    refetch: userListRefetch,
    loading: userListLoading,
  } = useUsersQuery();

  //* 회원 1명 정보
  const { data: User, refetch: userRefetch } = useUserQuery({
    variables: {
      id: userId,
    },
    fetchPolicy: "no-cache",
  });

  //* 회원 정보 수정 및 삭제 뮤테이션
  const [updateUser] = useUpdateUserMutation();

  //* 기존 정보 불러오기
  useEffect(() => {
    if (User?.user) {
      setUserInput({
        ...userInput,
        name: String(User?.user?.name),
        username: String(User?.user?.username),
        email: String(User?.user?.email),
        phone: String(User?.user?.phone),
        emailReception: Boolean(User?.user?.emailReception),
        smsReception: Boolean(User?.user?.smsReception),
      });
      setOpen(true);
    }
    if (userId === "0") {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [User, userId]);

  //* 회원정보 수정 모달
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    setUserId(id);
  };

  //* 모달 닫기
  const handleClose = () => {
    setOpen(false);
    setUserInput({
      ...userInput,
      name: String(User?.user?.name),
      username: String(User?.user?.username),
      email: String(User?.user?.email),
      phone: String(User?.user?.phone),
      emailReception: Boolean(User?.user?.emailReception),
      smsReception: Boolean(User?.user?.smsReception),
    });
    setUserId("0");
  };

  //* 회원 탈퇴 시키는 함수
  const handleDeleteUser = async (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    try {
      await updateUser({
        variables: {
          input: {
            data: {
              deletedAt: new Date(),
              isDeleted: true,
            },
            where: {
              id: id,
            },
          },
        },
      });
      alert("회원이 탈퇴 되었습니다.");
    } catch {
      alert("오류가 발생했습니다.");
    }
  };

  //* 회원 정보 수정
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isTrue = true;
    if (e.target.value === "false") {
      isTrue = false;
    }
    if (
      e.target.name === "emailReception" ||
      e.target.name === "smsReception"
    ) {
      setUserInput({
        ...userInput,
        [e.target.name]: isTrue,
      });
    } else {
      setUserInput({
        ...userInput,
        [e.target.name]: e.target.value,
      });
    }
  };

  //* 수정된 회원 정보 저장
  const handleSaveUser = async () => {
    const { email, emailReception, name, phone, smsReception, username } =
      userInput;
    try {
      await updateUser({
        variables: {
          input: {
            data: {
              name,
              username,
              phone,
              email,
              emailReception,
              smsReception,
            },
            where: {
              id: userId,
            },
          },
        },
      });
      userListRefetch();
      userRefetch();
      setUserId("0");
    } catch (e) {
      alert("오류가 발생했습니다.");
    } finally {
      setOpen(false);
      setUserId("0");
    }
  };

  return (
    <AdminUsersPresenter
      open={open}
      userInput={userInput}
      User={User}
      userList={useList}
      userListLoading={userListLoading}
      handleDeleteUser={handleDeleteUser}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleUserInput={handleUserInput}
      handleSaveUser={handleSaveUser}
    />
  );
};

export default WithAdminAuth(AdminUsersContainer);
