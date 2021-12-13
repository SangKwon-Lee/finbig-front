import MypageLayoutPresenter from "./MypageLayout.presenter";

interface IMypageLayoutProps {
  menu: string;
}

const MypageLayoutContainer: React.FC<IMypageLayoutProps> = ({ menu }) => {
  return <MypageLayoutPresenter menu={menu} />;
};
export default MypageLayoutContainer;
