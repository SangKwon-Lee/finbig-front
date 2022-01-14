import {
  AdminInput,
  AdminLoginBtn,
  AdminLoginError,
  AdminLoginWrapper,
  AdminLogo,
} from "./AdminLogin.style";
import WhiteLogo from "../../../assets/images/whiteLogo.svg";

interface AdminLoginProps {
  handleAdminLogin: () => Promise<void>;
  handleLoginInput: (e: any) => void;
  loginInput: {
    username: string;
    password: string;
    error: boolean;
  };
}

const AdminLoginPresneter: React.FC<AdminLoginProps> = ({
  handleAdminLogin,
  handleLoginInput,
  loginInput,
}) => {
  return (
    <>
      <AdminLoginWrapper>
        <AdminLogo src={WhiteLogo} />
        <AdminInput
          placeholder="아이디"
          name="username"
          onChange={handleLoginInput}
        />
        <AdminInput
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={handleLoginInput}
        />
        {loginInput.error && (
          <AdminLoginError>
            아이디 또는 비밀번호가 잘못됐습니다.
          </AdminLoginError>
        )}
        <AdminLoginBtn onClick={handleAdminLogin}>로그인</AdminLoginBtn>
      </AdminLoginWrapper>
    </>
  );
};

export default AdminLoginPresneter;
