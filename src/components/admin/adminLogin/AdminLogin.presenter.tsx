import {
  AdminInput,
  AdminLoginBtn,
  AdminLoginError,
  AdminLoginWrapper,
  AdminLogo,
} from "./AdminLogin.style";
import WhiteLogo from "../../../assets/images/whiteLogo.svg";

interface AdminLoginProps {
  loginInput: {
    username: string;
    password: string;
    error: boolean;
  };
  onEnterLogin: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleAdminLogin: () => Promise<void>;
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdminLoginPresneter: React.FC<AdminLoginProps> = ({
  loginInput,
  onEnterLogin,
  handleLoginInput,
  handleAdminLogin,
}) => {
  return (
    <>
      <AdminLoginWrapper>
        <AdminLogo src={WhiteLogo} />
        <AdminInput
          placeholder="아이디"
          name="username"
          onChange={handleLoginInput}
          onKeyPress={onEnterLogin}
        />
        <AdminInput
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={handleLoginInput}
          onKeyPress={onEnterLogin}
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
