import  { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  CalendarOutlined,
  TeamOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  ProjectOutlined,
  DashboardOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Badge } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const LabelWithBadge = ({ text, count }: { text: string; count?: number }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <span>{text}</span>
    {typeof count === "number" ? <Badge count={count} /> : null}
  </span>
);
const items: MenuItem[] = [
  { key: "dashboard", icon: <DashboardOutlined />, label: "Tổng quan" },
  {
    key: "mywork",
    icon: <MailOutlined />,
    label: "Công việc của tôi",
    children: [
      { key: "my-today", label: <LabelWithBadge text="Hôm nay" count={3} /> },
      {
        key: "my-assigned",
        label: <LabelWithBadge text="Được giao" count={8} />,
      },
      { key: "my-overdue", label: <LabelWithBadge text="Quá hạn" count={1} /> },
      { key: "my-done", label: "Đã hoàn thành" },
    ],
  },
  {
    key: "boards-section",
    icon: <ProjectOutlined />,
    label: "Boards",
    children: [
      { key: "boards", label: "Tất cả" },
      { key: "boards-fav", label: <LabelWithBadge text="Yêu thích" /> },
      { key: "boards-recent", label: "Gần đây" },
    ],
  },
  {
    key: "projects-section",
    icon: <AppstoreOutlined />,
    label: "Projects",
    children: [
      { key: "projects", label: "Tất cả dự án" },
      { key: "backlog", label: "Backlog" },
      { key: "sprints", label: "Sprints" },
      { key: "kanban", label: "Kanban" },
    ],
  },
  { key: "calendar", icon: <CalendarOutlined />, label: "Lịch/Timeline" },
  {
    key: "reports-section",
    icon: <BarChartOutlined />,
    label: "Báo cáo",
    children: [
      { key: "reports-progress", label: "Tiến độ" },
      { key: "reports-workload", label: "Workload" },
      { key: "reports-velocity", label: "Velocity" },
    ],
  },
  {
    key: "team-section",
    icon: <TeamOutlined />,
    label: "Đội nhóm",
    children: [
      { key: "team", label: "Thành viên" },
      { key: "team-invite", label: "Mời" },
      { key: "roles", label: "Vai trò & Quyền" },
    ],
  },
  {
    key: "notifications",
    icon: <BellOutlined />,
    label: <LabelWithBadge text="Thông báo" count={5} />,
  },
  {
    key: "settings-section",
    icon: <SettingOutlined />,
    label: "Cài đặt",
    children: [
      { key: "settings", label: "Cài đặt chung" },
      { key: "theme", label: "Giao diện" },
      { key: "integrations", label: "Tích hợp" },
    ],
  },
  { key: "help", icon: <QuestionCircleOutlined />, label: "Hỗ trợ" },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}
const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) key[item.key] = level;
      if (item.children) func(item.children, level + 1);
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items as LevelKeysProps[]);

// Component SiderLayout
const SiderLayout = () => {
  const navigate = useNavigate();

  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([
    "mywork",
    "projects-section",
  ]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const handleClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "dashboard":
        navigate("/");
        break;
      case "my-today":
        navigate("/mywork/today");
        break;
      case "my-assigned":
        navigate("/assigned");
        break;
      case "my-overdue":
        navigate("/mywork/overdue");
        break;
      case "my-done":
        navigate("/mywork/done");
        break;
      case "boards":
        navigate("/boards");
        break;
      default:
        break;
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["dashboard"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: 300 }}
      items={items}
      onClick={handleClick}
    />
  );
};

export default SiderLayout;
