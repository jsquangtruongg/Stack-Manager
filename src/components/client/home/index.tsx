import "./style.scss";
import { useEffect, useRef, useState } from "react";
import {
  AntDesignOutlined,
  MoreOutlined,
  PlusOutlined,
  UserOutlined,
  AppstoreOutlined,
  MenuOutlined,
  LockOutlined,
  SearchOutlined,
  ContactsOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  AimOutlined,
  SaveOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Modal,
  Input,
  Form,
  Select,
  Avatar,
  Tooltip,
  MenuProps,
  Dropdown,
  Button,
  message,
  Progress,
  Space,
  Typography,
  Divider,
  Tag,
  Card,
  Badge,
} from "antd";
import { useNavigate } from "react-router-dom";

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
const HomeComponent = () => {
  const [progress, setProgress] = useState(70);
  const [modal2Open, setModal2Open] = useState(false);
  const [addStackOpen, setAddStackOpen] = useState(false);
  const [addStackForm] = Form.useForm();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const LOADING_DELAY_MS = 1000;
    const timer = setTimeout(() => setLoading(false), LOADING_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate("/mywork/today");
  };
  const actionItems: MenuProps["items"] = [
    { key: "add-stack", label: "Thêm Stack", icon: <PlusOutlined /> },
  ];
  const onActionClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "add-stack") {
      setAddStackOpen(true);
    }
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
      <div className="header-task-title">
        <div className="nav-list">
          <Space
            className="from-boards-list"
            size="middle"
            split={<Divider type="vertical" />}
          >
            <Button
              type="text"
              className="item-list-view"
              icon={<AppstoreOutlined className="icon-add" />}
            >
              Xem Bảng
            </Button>
            <Button
              type="text"
              className="item-list-view"
              icon={<MenuOutlined className="icon-add" />}
            >
              Danh Sách
            </Button>
          </Space>
          <Button
            type="text"
            className="limited"
            icon={<LockOutlined className="icon-add" />}
          >
            Hạn Chế
          </Button>
          <Space
            className="from-owners-team"
            size="small"
            split={<Typography.Text className="item-x">X</Typography.Text>}
          >
            <Typography.Text className="item-host txt-view-boards">
              Chủ sở hữu
            </Typography.Text>
            <Typography.Text className="item-host txt-view-boards">
              X Team
            </Typography.Text>
          </Space>
          <Input
            placeholder="Tìm kiếm"
            className="from-search"
            allowClear
            prefix={<SearchOutlined className="icon-search" />}
          />
          <div className="from-function">
            <Button
              type="text"
              className="item-click"
              icon={<ContactsOutlined className="icon-add" />}
            />
            <Button
              type="text"
              className="item-click"
              icon={<FilterOutlined className="icon-add" />}
            />
            <Button
              type="text"
              className="item-click"
              icon={<SortAscendingOutlined className="icon-add" />}
            />
            <Button
              type="text"
              className="item-click"
              icon={<AimOutlined className="icon-add" />}
            />
          </div>
        </div>
        <Space className="BacklogTasks" size="large" align="center">
          <Space className="from-backlogTasks" size="small">
            <Typography.Text className="text-backlog">Nhiệm vụ</Typography.Text>
            <Tag className="item-backlog" color="geekblue">
              5
            </Tag>
          </Space>

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
        </Space>
        <div className="from-item-boards">
          <Card
            hoverable
            className="item-boards-card"
            onClick={handleClick}
            title={
              <Space size="small">
                <Typography.Text className="txt-page">
                  Trang “Đặt hàng” và “Cài đặt”
                </Typography.Text>
                <Space className="item-save" size="small">
                  <SaveOutlined className="icon-save" />
                  <Typography.Text className="item-number">4</Typography.Text>
                </Space>
              </Space>
            }
          >
            <Space className="from-energy" size="small">
              <Typography.Text className="item-progress">
                Tiến triển
              </Typography.Text>
              <Typography.Text className="item-progress">8/10</Typography.Text>
            </Space>
            <div className="progress-container">
              <Progress
                percent={progress}
                className="custom-progress"
                showInfo={false}
              />
            </div>
            <Space className="from-mission" size="small" wrap>
              <Tag className="item-btn">Design</Tag>
              <Tag className="item-btn">Design</Tag>
            </Space>

            <Space
              size="middle"
              align="center"
              className="from-owners-team"
              style={{ marginTop: 10 }}
            >
              <Avatar.Group
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>

              <Button
                type="text"
                shape="circle"
                icon={<PlusCircleOutlined className="icon-add" />}
                onClick={(e) => {
                  e.stopPropagation();
                  setModal2Open(true);
                }}
              />

              <Space size="small" className="from-icon">
                <Badge count={2} className="badge-cart">
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
                <Badge count={3} className="badge-mess">
                  <MessageOutlined className="icon-mess" />
                </Badge>
              </Space>
            </Space>
          </Card>
          <Card
            hoverable
            className="item-boards-card"
            onClick={handleClick}
            title={
              <Space size="small">
                <Typography.Text className="txt-page">
                  Trang “Đặt hàng” và “Cài đặt”
                </Typography.Text>
                <Space className="item-save" size="small">
                  <SaveOutlined className="icon-save" />
                  <Typography.Text className="item-number">4</Typography.Text>
                </Space>
              </Space>
            }
          >
            <Space className="from-energy" size="small">
              <Typography.Text className="item-progress">
                Tiến triển
              </Typography.Text>
              <Typography.Text className="item-progress">8/10</Typography.Text>
            </Space>
            <div className="progress-container">
              <Progress
                percent={progress}
                className="custom-progress"
                showInfo={false}
              />
            </div>
            <Space className="from-mission" size="small" wrap>
              <Tag className="item-btn">Design</Tag>
              <Tag className="item-btn">Design</Tag>
            </Space>

            <Space
              size="middle"
              align="center"
              className="from-owners-team"
              style={{ marginTop: 10 }}
            >
              <Avatar.Group
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>

              <Button
                type="text"
                shape="circle"
                icon={<PlusCircleOutlined className="icon-add" />}
                onClick={(e) => {
                  e.stopPropagation();
                  setModal2Open(true);
                }}
              />

              <Space size="small" className="from-icon">
                <Badge count={2} className="badge-cart">
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
                <Badge count={3} className="badge-mess">
                  <MessageOutlined className="icon-mess" />
                </Badge>
              </Space>
            </Space>
          </Card>
          <Card
            hoverable
            className="item-boards-card"
            onClick={handleClick}
            title={
              <Space size="small">
                <Typography.Text className="txt-page">
                  Trang “Đặt hàng” và “Cài đặt”
                </Typography.Text>
                <Space className="item-save" size="small">
                  <SaveOutlined className="icon-save" />
                  <Typography.Text className="item-number">4</Typography.Text>
                </Space>
              </Space>
            }
          >
            <Space className="from-energy" size="small">
              <Typography.Text className="item-progress">
                Tiến triển
              </Typography.Text>
              <Typography.Text className="item-progress">8/10</Typography.Text>
            </Space>
            <div className="progress-container">
              <Progress
                percent={progress}
                className="custom-progress"
                showInfo={false}
              />
            </div>
            <Space className="from-mission" size="small" wrap>
              <Tag className="item-btn">Design</Tag>
              <Tag className="item-btn">Design</Tag>
            </Space>

            <Space
              size="middle"
              align="center"
              className="from-owners-team"
              style={{ marginTop: 10 }}
            >
              <Avatar.Group
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>

              <Button
                type="text"
                shape="circle"
                icon={<PlusCircleOutlined className="icon-add" />}
                onClick={(e) => {
                  e.stopPropagation();
                  setModal2Open(true);
                }}
              />

              <Space size="small" className="from-icon">
                <Badge count={2} className="badge-cart">
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
                <Badge count={3} className="badge-mess">
                  <MessageOutlined className="icon-mess" />
                </Badge>
              </Space>
            </Space>
          </Card>
          <Card
            hoverable
            className="item-boards-card"
            onClick={handleClick}
            title={
              <Space size="small">
                <Typography.Text className="txt-page">
                  Trang “Đặt hàng” và “Cài đặt”
                </Typography.Text>
                <Space className="item-save" size="small">
                  <SaveOutlined className="icon-save" />
                  <Typography.Text className="item-number">4</Typography.Text>
                </Space>
              </Space>
            }
          >
            <Space className="from-energy" size="small">
              <Typography.Text className="item-progress">
                Tiến triển
              </Typography.Text>
              <Typography.Text className="item-progress">8/10</Typography.Text>
            </Space>
            <div className="progress-container">
              <Progress
                percent={progress}
                className="custom-progress"
                showInfo={false}
              />
            </div>
            <Space className="from-mission" size="small" wrap>
              <Tag className="item-btn">Design</Tag>
              <Tag className="item-btn">Design</Tag>
            </Space>

            <Space
              size="middle"
              align="center"
              className="from-owners-team"
              style={{ marginTop: 10 }}
            >
              <Avatar.Group
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>

              <Button
                type="text"
                shape="circle"
                icon={<PlusCircleOutlined className="icon-add" />}
                onClick={(e) => {
                  e.stopPropagation();
                  setModal2Open(true);
                }}
              />

              <Space size="small" className="from-icon">
                <Badge count={2} className="badge-cart">
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
                <Badge count={3} className="badge-mess">
                  <MessageOutlined className="icon-mess" />
                </Badge>
              </Space>
            </Space>
          </Card>
        </div>

        <Modal
          title="Thêm thành viên "
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <Form form={form} {...formItemLayout} style={{ marginTop: "30px" }}>
            <Form.Item
              label="Nhập tên"
              name="Input"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Chức vụ"
              name="Select"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="admin">Admin</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
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
    </div>
  );
};
export default HomeComponent;
