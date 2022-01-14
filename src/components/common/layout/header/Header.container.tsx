import React, { useState } from "react";
import { useNavigate } from "react-router";
import HeaderPresenter from "./Header.presenter";

const HeaderContainer = (props: any) => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const userId = sessionStorage.getItem("userId");
  const handleLogout = () => {
    if (userId) {
      sessionStorage.clear();
      localStorage.clear();
      navigate("/");
      alert("로그아웃 됐습니다.");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <HeaderPresenter
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        handleSearchWord={handleSearchWord}
        search={search}
        setSearch={setSearch}
        handleLogout={handleLogout}
      />
    </>
  );
};
export default HeaderContainer;
