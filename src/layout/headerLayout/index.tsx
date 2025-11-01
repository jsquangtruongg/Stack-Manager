import "./style.scss";
import CreateIcon from "@mui/icons-material/Create";
import SiderLayout from "../siderLayout";
import {
  InboxOutlined,
  LogoutOutlined,
  MailOutlined,
  SaveOutlined,
  SendOutlined,
  SettingOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Tabs,
  Typography,
} from "antd";
import type { MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { setUser } from "../../redux/actions/userAction";
import { useAuth } from "../../hook/useAuth";
const BoardsComponent = () => {
  const userState = useAppSelector((state) => state.user);
  const { removeUser } = useAuth();
  const navigate = useNavigate();

  console.log(userState.userData);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };
  const userRoleId = 1;
  const handleLogout = () => {
    localStorage.removeItem("profile");
    removeUser();
    navigate("/");
  };
  useEffect(() => {
    dispatch(setUser());
  }, []);
  const { Header, Sider, Content } = Layout;
  const tabItems = [
    { key: "time1", label: "Thời Gian" },
    { key: "time2", label: "Thời Gian" },
    { key: "time3", label: "Thời Gian" },
    { key: "time4", label: "Thời Gian" },
  ];

  return (
    <>
      <Layout className="header-boards">
        <Header className="header-nav">
          <Row align="middle" justify="space-between" gutter={16} className="header-nav-content">
            <Col>
              <Space size="middle" align="center">
                <Typography.Text className="text-boards">
                  Task Boards
                </Typography.Text>
                <CreateIcon className="icon-pen" />
              </Space>
            </Col>
            <Col flex="auto">
              <Tabs items={tabItems} className="header-nav-tabs" />
            </Col>

            <Col className="from-auth">
              <p className="text-auth-name">{userState.userData?.full_name}</p>
              <Badge count={1}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Badge>
            </Col>

            <Col className="from-list-item">
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
                  <Menu.Item key="notifications" icon={<MailOutlined />}>
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
                  <Menu.SubMenu
                    key="admin"
                    icon={<UserOutlined />}
                    title="Admin"
                  >
                    <Menu.Item key="adminPage" icon={<UserOutlined />}>
                      AD
                    </Menu.Item>
                  </Menu.SubMenu>
                ) : null}

                <Menu.Item
                  key="logout"
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  danger
                >
                  Đăng xuất
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <div className="main-layout">
          <div className="sider-layout">
            <SiderLayout />
          </div>
          <div className="content-layout">
            <Outlet />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default BoardsComponent;
