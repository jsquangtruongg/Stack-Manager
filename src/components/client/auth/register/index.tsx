import "./style.scss";
import { Form, Input, Button, Checkbox, message } from "antd";
import {
  MailOutlined,
  LockOutlined,
  GooglePlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

const RegisterComponent = () => {
  const onGoogleLogin = () => {
    message.info("Đăng nhập Google đang được cấu hình");
  };

  return (
    <div className="auth-login">
      <div className="auth-login-content">
        <h2 className="txt-title">Đăng Ký</h2>
        <Form name="login" layout="vertical" autoComplete="off">
          {/* Nhóm Họ + Tên */}
          <div className="name-group">
            <Form.Item
              label="Họ"
              name="lastName"
              rules={[
                { required: true, message: "Vui lòng nhập họ" },
                { min: 1, message: "Họ tối thiểu 1 ký tự" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="icon-input" />}
                placeholder="Nguyễn"
                autoComplete="family-name"
                spellCheck={false}
              />
            </Form.Item>

            <Form.Item
              label="Tên"
              name="firstName"
              rules={[
                { required: true, message: "Vui lòng nhập tên" },
                { min: 1, message: "Tên tối thiểu 1 ký tự" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="icon-input" />}
                placeholder="Văn A"
                autoComplete="given-name"
                spellCheck={false}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Gmail"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="icon-input" />}
              placeholder="you@gmail.com"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              inputMode="email"
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu" },
              { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="icon-input" />}
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </Form.Item>

          {/* Thêm ô nhập lại mật khẩu + xác thực trùng khớp */}
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="icon-input" />}
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </Form.Item>
          <div className="login-actions">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <a className="forgot-link" href="#">
              Quên mật khẩu?
            </a>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Đăng Ký
            </Button>
          </Form.Item>

          <div className="or-divider">Hoặc</div>

          <Button
            icon={<GooglePlusOutlined />}
            size="large"
            className="google-btn"
            block
            onClick={onGoogleLogin}
          >
            Đăng Ký bằng Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterComponent;
