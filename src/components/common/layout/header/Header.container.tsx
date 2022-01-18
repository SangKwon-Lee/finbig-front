import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Mutation,
  MutationDeleteTokenArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_TOKEN } from "../../../login/Login.query";
import HeaderPresenter from "./Header.presenter";

const HeaderContainer = (props: any) => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const [deleteToken] = useMutation<Mutation, MutationDeleteTokenArgs>(
    DELETE_TOKEN
  );

  const tokenId = sessionStorage.getItem("token");

  const handleLogout = async () => {
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
      if (!data?.deleteToken?.token) {
        return;
      }
      sessionStorage.clear();
      alert("로그아웃 됐습니다.");
      navigate("/");
    } catch (e) {
      console.log(e);
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
