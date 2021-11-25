import HeaderPresenter from "./Header.presenter";
interface Layout {
  children: React.ReactNode;
}
const HeaderContainer = ({ children }: Layout) => {
  return (
    <>
      <HeaderPresenter />
      <div>{children}</div>
    </>
  );
};
export default HeaderContainer;
