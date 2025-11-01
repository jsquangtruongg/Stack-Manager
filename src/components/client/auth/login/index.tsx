import "./style.scss";
import { Form, Input, Button, Checkbox, message } from "antd";
import {
  MailOutlined,
  LockOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/store";
import { loginAction } from "../../../../redux/actions/auth";
const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: { email: string; password: string }) => {
    console.log("🔹 Form values gửi đi:", values);
    setLoading(true);

    try {
      const result = await dispatch(
        loginAction(
          { email: values.email, password: values.password },
          navigate
        )
      );
      console.log("✅ Kết quả loginAction:", result);
    } catch (err: any) {
      console.error("❌ Lỗi đăng nhập:", err);
      message.error(err?.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
      console.log("⏹ Kết thúc handleSubmit");
    }
  };

  return (
    <div className="auth-login">
      <div className="auth-login-content">
        <h2 className="txt-title">Đăng Nhập</h2>
        <Form
          name="login"
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit}
        >
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
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="or-divider">Hoặc</div>

          <Button
            icon={<GooglePlusOutlined />}
            size="large"
            className="google-btn"
            block
          >
            Đăng nhập bằng Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
