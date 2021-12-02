// import { GlobalContext } from "../../App";
import { useNavigate } from "react-router";
import LicensePresenter from "./License.presenter";
// import React, { useContext } from "react";
const LicenseContainer = () => {
  // const { accessToken } = useContext(GlobalContext);

  const navigate = useNavigate();
  const handleBuy = () => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      navigate("/login");
      return;
    }
    alert("개발중..");
  };
  return <LicensePresenter handleBuy={handleBuy} />;
};

export default LicenseContainer;