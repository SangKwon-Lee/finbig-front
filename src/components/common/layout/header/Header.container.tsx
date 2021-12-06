import React, { useState } from "react";
import HeaderPresenter from "./Header.presenter";
interface Layout {
  children: React.ReactNode;
}
const HeaderContainer = ({ children }: Layout) => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  return (
    <>
      <HeaderPresenter
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        handleSearchWord={handleSearchWord}
        search={search}
        setSearch={setSearch}
      />
      <div>{children}</div>
    </>
  );
};
export default HeaderContainer;
