import "./style.scss";
import CreateIcon from "@mui/icons-material/Create";
import SiderLayout from "../siderLayout";
import {
  BookOutlined,
  InboxOutlined,
  LogoutOutlined,
  MailOutlined,
  SaveOutlined,
  SendOutlined,
  SettingOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Menu, MenuProps, Space } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const BoardsComponent = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };
  const userRoleId = 1;
  const handleLogout = () => {
    console.log("Đăng xuất");
  };

  const handleNavigateAppLyManager = () =>
    console.log("Đi đến trang quản lý thông báo");
  const handleNavigateAdmin = () => console.log("Đi đến trang Admin");

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
          <div className="from-list-item">
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{ width: "100%", borderRight: 0 }}
            >
              <Menu.SubMenu
                key="jobManage"
                icon={<InboxOutlined />}
                title="Thông tin cá nhân"
              >
                <Menu.Item key="savedJobs" icon={<SaveOutlined />}>
                  Stack riêng tư
                </Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="emailSettings"
                icon={<MailOutlined />}
                title="Cài đặt email & Thông báo"
              >
                <Menu.Item
                  key="notifications"
                  icon={<MailOutlined />}
                  onClick={handleNavigateAppLyManager}
                >
                  Thông Báo
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="settings"
                icon={<SettingOutlined />}
                title="Cài đặt & Hỗ trợ"
              >
                <Menu.Item key="config" icon={<ToolOutlined />}>
                  Cài đặt
                </Menu.Item>
                <Menu.Item key="help" icon={<SendOutlined />}>
                  Trợ giúp & Hỗ trợ
                </Menu.Item>
              </Menu.SubMenu>

              {userRoleId === 1 || userRoleId === 2 ? (
                <Menu.SubMenu key="admin" icon={<UserOutlined />} title="Admin">
                  <Menu.Item
                    key="adminPage"
                    icon={<UserOutlined />}
                    onClick={handleNavigateAdmin}
                  >
                    AD
                  </Menu.Item>
                </Menu.SubMenu>
              ) : null}

              {/* --- Đăng xuất --- */}
              <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                danger
              >
                Đăng xuất
              </Menu.Item>
            </Menu>
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
