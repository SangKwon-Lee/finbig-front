import FooterPresenter from "./Footer.presenter";
interface Layout {
  children: React.ReactNode;
}
const FooterContainer = ({ children }: Layout) => {
  return (
    <>
      <FooterPresenter />
      <div>{children}</div>
    </>
  );
};

export default FooterContainer;
