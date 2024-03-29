import {
  AdminLayoutLogo,
  AdminLayoutMenuTitle,
  AdminLayoutMenuWrapper,
  AdminLayoutWrapper,
} from "./AdminLayout.style";
import whiteLogo from "../../../../assets/images/whiteLogo.svg";
import { useNavigate } from "react-router";
interface AdminLayoutProps {
  menu: string;
}
const AdminLayoutPresenter: React.FC<AdminLayoutProps> = ({ menu }) => {
  const navigate = useNavigate();

  return (
    <AdminLayoutWrapper>
      <AdminLayoutLogo src={whiteLogo} />
      <AdminLayoutMenuWrapper>
        <AdminLayoutMenuTitle
          isActive={menu === "구독"}
          onClick={() => {
            navigate("/admin/subsciption");
          }}
        >
          구독관리
        </AdminLayoutMenuTitle>
        <AdminLayoutMenuTitle
          isActive={menu === "게시물"}
          onClick={() => {
            navigate("/admin/visuals");
          }}
        >
          게시물 관리
        </AdminLayoutMenuTitle>
        {/* <AdminLayoutMenuTitle
          isActive={menu === "정산"}
          onClick={() => {
            navigate("/admin/subsciption");
          }}
        >
          정산관리
        </AdminLayoutMenuTitle> */}
        <AdminLayoutMenuTitle
          isActive={menu === "회원"}
          onClick={() => {
            navigate("/admin/users");
          }}
        >
          회원관리
        </AdminLayoutMenuTitle>
      </AdminLayoutMenuWrapper>
    </AdminLayoutWrapper>
  );
};

export default AdminLayoutPresenter;
