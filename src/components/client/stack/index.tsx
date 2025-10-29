import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";

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
  FileAddOutlined,
  MessageOutlined,
  MoreOutlined,
  PlusOutlined,
  ShareAltOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";
import TextArea from "antd/es/input/TextArea";
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
  const [addStackOpen, setAddStackOpen] = useState(false);
  const [addStackForm] = Form.useForm();

  const [commentOpen, setCommentOpen] = useState(false);
  const [commentForm] = Form.useForm();

  const [messages, setMessages] = useState<
    {
      id: number;
      author: string;
      content: string;
      createdAt: string;
      isMe?: boolean;
    }[]
  >([
    {
      id: 1,
      author: "Admin",
      content: "Chào mừng tới dự án!",
      createdAt: "09:00",
      isMe: false,
    },
    {
      id: 2,
      author: "Bạn",
      content: "OK, mình sẽ cập nhật task.",
      createdAt: "10:15",
      isMe: true,
    },
  ]);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [commentOpen, messages]);

  const handleSendComment = (values: { content: string }) => {
    const content = values.content?.trim();
    if (!content) {
      message.warning("Vui lòng nhập nội dung");
      return;
    }
    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    setMessages([
      ...messages,
      {
        id: nextId,
        author: "Bạn",
        content,
        createdAt: new Date().toLocaleTimeString(),
        isMe: true,
      },
    ]);
    commentForm.resetFields();
  };

  const handleAddStackSubmit = (values: {
    name: string;
    description?: string;
  }) => {
    message.success(`Đã thêm stack: ${values.name}`);
    setAddStackOpen(false);
    addStackForm.resetFields();
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
                      onClick={() => setAddStackOpen(true)}
                    >
                      Thêm
                    </Button>
                  </Tooltip>

                  <Tooltip title="Bình luận">
                    <Button
                      className="action-btn"
                      icon={<MessageOutlined />}
                      onClick={() => setCommentOpen(true)}
                    >
                      Bình luận
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
      <div className="modal-stack">
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
      <div className="modal-stack">
        <Modal
          title="Thêm Stack"
          open={addStackOpen}
          onCancel={() => setAddStackOpen(false)}
          onOk={() => addStackForm.submit()}
          okText="Thêm"
        >
          <Form
            form={addStackForm}
            layout="vertical"
            onFinish={handleAddStackSubmit}
          >
            <Form.Item
              name="name"
              label="Tên stack"
              rules={[{ required: true, message: "Vui lòng nhập tên stack" }]}
            >
              <Input placeholder="Ví dụ: Sprint Q4" />
            </Form.Item>

            <Form.Item
              name="description"
              label="Mô tả"
              rules={[{ max: 255, message: "Tối đa 255 ký tự" }]}
            >
              <Input.TextArea rows={3} placeholder="Mô tả ngắn cho stack" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="modal-stack">
        <Modal
          title="Bình luận"
          className="chat-modal"
          open={commentOpen}
          onCancel={() => setCommentOpen(false)}
          footer={null}
        >
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((m) => (
              <div key={m.id} className={`message ${m.isMe ? "me" : "other"}`}>
                <Avatar
                  size={32}
                  style={{ backgroundColor: m.isMe ? "#1677ff" : "#87d068" }}
                  icon={<UserOutlined />}
                />
                <div className="bubble">
                  <div className="meta">
                    <span className="author">{m.author}</span>
                    <span className="time">{m.createdAt}</span>
                  </div>
                  <div className="content">{m.content}</div>
                </div>
              </div>
            ))}
          </div>

          <Form
            form={commentForm}
            className="chat-input"
            onFinish={handleSendComment}
          >
            <Form.Item
              name="content"
              noStyle
              rules={[
                { required: true, message: "Vui lòng nhập nội dung" },
                { max: 500, message: "Tối đa 500 ký tự" },
              ]}
            >
              <Input.TextArea
                autoSize={{ minRows: 1, maxRows: 4 }}
                placeholder="Nhập bình luận... (Enter để gửi, Shift+Enter xuống dòng)"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    commentForm.submit();
                  }
                }}
              />
            </Form.Item>
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={() => commentForm.submit()}
            >
              Gửi
            </Button>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
export default StackComponent;
