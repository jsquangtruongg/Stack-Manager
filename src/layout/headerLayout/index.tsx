import "./style.scss";
import avatar from "../../assets/images/avatar.jpg";
import CreateIcon from "@mui/icons-material/Create";
import SiderLayout from "../siderLayout";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import { Outlet } from "react-router-dom";
const BoardsComponent = () => {
  return (
    <>
      <div className="header-boards">
        <div className="header-nav">
          <div className="from-text-boards">
            <span className="text-boards">Task Boards</span>
            <CreateIcon className="icon-pen" />
          </div>
          <div className="nav-tabs">
            <span className="text-tab">Thời Gian</span>
            <span className="text-tab ">Thời Gian</span>
            <span className="text-tab">Thời Gian</span>
            <span className="text-tab">Thời Gian</span>
          </div>
          <div className="from-auth">
            <p className="text-auth-name">Nguyễn Quang...</p>
            <Badge count={1}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Badge>
          </div>
        </div>
        <div className="main-layout">
          <div className="sider-layout">
            <SiderLayout />
          </div>
          <div className="content-layout">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardsComponent;
