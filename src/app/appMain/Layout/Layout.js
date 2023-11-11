import Sidebar from "../components/sidebar.js/Sidebar";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layoutChild">{children}</div>
    </div>
  );
};

export default Layout;
