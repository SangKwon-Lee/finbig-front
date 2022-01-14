import AdminLayoutPresenter from "./AdminLayout.presneter";

interface AdminLayoutProps {
  menu: string;
}

const AdminLayoutContainer: React.FC<AdminLayoutProps> = ({ menu }) => {
  return <AdminLayoutPresenter menu={menu} />;
};

export default AdminLayoutContainer;
