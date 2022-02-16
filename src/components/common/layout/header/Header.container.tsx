import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDeleteTokenMutation } from "../../../../commons/graphql/generated";
import HeaderPresenter from "./Header.presenter";

const HeaderContainer = (props: any) => {
  const navigate = useNavigate();
  //* 검색창 오픈
  const [isSearch, setIsSearch] = useState(false);

  //* 검색어 상태
  const [search, setSearch] = useState("");

  //* 토큰 삭제
  const [deleteToken] = useDeleteTokenMutation();

  const tokenId = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  //* 로그아웃
  const handleLogout = async () => {
    if (userId) {
      try {
        const { data } = await deleteToken({
          variables: {
            input: {
              where: {
                id: String(tokenId),
              },
            },
          },
        });
        sessionStorage.clear();
        alert("로그아웃 됐습니다.");
        navigate("/");
        if (!data?.deleteToken?.token) {
          return;
        }
      } catch (e) {
        alert("오류가 발생했습니다.");
      }
    } else {
      navigate("/login");
    }
  };

  //* 검색어
  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };
  return (
    <>
      <HeaderPresenter
        search={search}
        isSearch={isSearch}
        setSearch={setSearch}
        setIsSearch={setIsSearch}
        handleLogout={handleLogout}
        handleSearchWord={handleSearchWord}
      />
    </>
  );
};
export default HeaderContainer;
