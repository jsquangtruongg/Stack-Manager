import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import AdjustIcon from "@mui/icons-material/Adjust";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import type { MenuProps } from "antd";
import {
  Modal,
  Input,
  Form,
  Select,
  DatePicker,
  Avatar,
  Tooltip,
  Space,
  Button,
  Divider,
  message,
  Dropdown,
} from "antd";

import "./style.scss";
import {
  AntDesignOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExceptionOutlined,
  FileAddOutlined,
  MessageOutlined,
  MoreOutlined,
  PlusOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
import { useState } from "react";
const formItemLayout = {
  labelCol: {
    xs: { span: 30 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 30 },
    sm: { span: 17 },
  },
};
const StackComponent = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const actionItems: MenuProps["items"] = [
    { key: "share", label: "Chia sẻ", icon: <ShareAltOutlined /> },
    { key: "edit", label: "Chỉnh sửa", icon: <EditOutlined /> },
    { key: "duplicate", label: "Nhân bản", icon: <CopyOutlined /> },
    { type: "divider" },
    { key: "delete", label: "Xóa", icon: <DeleteOutlined />, danger: true },
  ];

  const onActionClick: MenuProps["onClick"] = ({ key }) => {
    switch (key) {
      case "share":
        message.info("Mở popup chia sẻ");
        break;
      case "edit":
        message.info("Mở form chỉnh sửa");
        break;
      case "duplicate":
        message.success("Đã nhân bản mục");
        break;
      case "delete":
        Modal.confirm({
          title: "Xóa mục này?",
          content: "Hành động không thể hoàn tác.",
          okText: "Xóa",
          okButtonProps: { danger: true },
          cancelText: "Hủy",
          onOk: () => message.success("Đã xóa"),
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="header-task">
      <div className="header-task-item">
        <div className="nav-list">
          <div className="item-title">
            <h2 className="txt-view-title">Task Manager</h2>
          </div>
          <div className="from-boards-list">
            <div className="item-list-view">
              <AppsIcon className="icon-add" />
              <span className="txt-view-boards">Xem Bảng</span>
            </div>
            <p>|</p>
            <div className="item-list-view">
              <MenuIcon className="icon-add" />
              <span className="txt-view-boards">Danh Sách</span>
            </div>
          </div>
          <div className="from-search">
            <div className="from-nav-search">
              <SearchIcon className="icon-search" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm"
                className="nav-search"
              />
            </div>
          </div>
          <div className="from-function">
            <button className="item-click">
              <ContactPageIcon className="icon-add" />
            </button>
            <button className="item-click">
              <FilterListIcon className="icon-add" />
            </button>
            <button className="item-click">
              <SortIcon className="icon-add" />
            </button>
            <button className="item-click">
              <AdjustIcon className="icon-add" />
            </button>
          </div>
          <div className="from-members">
            <Avatar.Group
              max={{
                count: 2,
                style: { color: "#f56a00", backgroundColor: "#fde3cf" },
              }}
            >
              <Avatar
                size={43}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
              />
              <Avatar size={43} style={{ backgroundColor: "#f56a00" }}>
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  size={43}
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                size={43}
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <div className="item-add" onClick={() => setModal2Open(true)}>
              <ControlPointIcon className="icon-add" />
            </div>
          </div>
        </div>
        <div className="from-task">
          <div className="item-err" onClick={() => setModal2Open(true)}>
            <FileAddOutlined className="icon-err" />
            <p className="txt-err">Thêm Stack</p>
          </div>
        </div>
        <div className="stack">
          <div className="item-stack">
            <div className="form-item-stack">
              <h2 className="txt-stack-title">Thiết kế UI/UX</h2>
              <div className="item-tack">
                <Dropdown
                  placement="bottomRight"
                  trigger={["click"]}
                  menu={{ items: actionItems, onClick: onActionClick }}
                >
                  <Button
                    type="text"
                    className="item-actions"
                    icon={<MoreOutlined />}
                    aria-label="Tùy chọn"
                  />
                </Dropdown>
              </div>

              <div className="from-function">
                <Space size="middle" className="actions-left">
                  <Tooltip title="Tạo thẻ mới">
                    <Button
                      type="primary"
                      className="action-btn"
                      icon={<PlusOutlined />}
                    >
                      Thêm
                    </Button>
                  </Tooltip>

                  <Tooltip title="Thêm bình luận">
                    <Button className="action-btn" icon={<MessageOutlined />}>
                      Hoàn thành
                    </Button>
                  </Tooltip>

                  <Tooltip title="Xóa mục đã chọn">
                    <Button
                      danger
                      className="action-btn"
                      icon={<DeleteOutlined />}
                    >
                      Xóa
                    </Button>
                  </Tooltip>
                </Space>
                <Divider type="vertical" className="actions-divider" />
                <Space className="actions-right">
                  <Tooltip title="Tác vụ khác">
                    <Button
                      type="text"
                      className="action-btn more-btn"
                      icon={<MoreOutlined />}
                    />
                  </Tooltip>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Thêm Stack"
        className="modal-stack"
        style={{ textAlign: "center" }}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Form form={form} {...formItemLayout} style={{ marginTop: "30px" }}>
          <Form.Item
            label="Nhập tiêu đề"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Thành viên"
            name="Select"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select mode="multiple">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
              <Select.Option value="guest">Guest</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Nhập mô tả"
            name="TextArea"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default StackComponent;
