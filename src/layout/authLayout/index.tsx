import { Outlet } from "react-router-dom";
import "./style.scss";
const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-content">
        <div className="auth-content-left">
          <div className="auth-content-left-content">
            <h1 className="txt-title">Task Manager</h1>
            <p className="txt-desc">
              Task Manager là một ứng dụng giúp bạn quản lý các công việc của
              mình.
            </p>
          </div>
        </div>
        <div className="auth-content-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
