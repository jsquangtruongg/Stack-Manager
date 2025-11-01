import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import "./style.scss";

type TaskItem = {
  id: number;
  status: BadgeProps["status"];
  title: string;
  time?: string;
  assignee?: string;
};

const getListData = (value: Dayjs): TaskItem[] => {
  let listData: TaskItem[] = [];
  switch (value.date()) {
    case 8:
      listData = [
        {
          id: 1,
          status: "warning",
          title: "Kiểm tra tiến độ dự án A",
          time: "10:00",
          assignee: "Nguyễn Văn A",
        },
        {
          id: 2,
          status: "success",
          title: "Hoàn thành báo cáo tuần",
          time: "11:00",
          assignee: "Trần Thị B",
        },
      ];
      break;

    case 10:
      listData = [
        { id: 3, status: "warning", title: "Chuẩn bị tài liệu họp khách hàng" },
        {
          id: 4,
          status: "success",
          title: "Cập nhật dữ liệu doanh thu tháng 10",
        },
        { id: 5, status: "error", title: "Lỗi khi đồng bộ dữ liệu CRM" },
      ];
      break;

    case 15:
      listData = [
        {
          id: 6,
          status: "warning",
          title: "Kiểm tra lại hợp đồng đối tác",
          time: "10:00",
          assignee: "Lê Minh 1",
        },
        {
          id: 7,
          status: "success",
          title: "Hoàn thiện giao diện dashboard",
          time: "11:00",
          assignee: "Phạm Anh 2",
        },
        {
          id: 8,
          status: "error",
          title: "Sửa lỗi không gửi được email thông báo",
          time: "12:00",
          assignee: "Nguyễn Bình 3",
        },
        {
          id: 9,
          status: "error",
          title: "Không tải được file báo cáo",
          time: "13:00",
          assignee: "Trần Dũng 4",
        },
        {
          id: 10,
          status: "error",
          title: "Lỗi hiển thị dữ liệu biểu đồ",
          time: "14:00",
          assignee: "Hoàng Mai 5",
        },
        {
          id: 11,
          status: "error",
          title: "Không cập nhật được trạng thái task",
          time: "15:00",
          assignee: "Lưu Hà 6",
        },
      ];
      break;

    default:
      listData = [];
  }
  return listData;
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
  return undefined;
};

const AssignedComponent = () => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    if (!listData.length) return null;

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.id}>
            <Badge status={item.status} text={item.title} />
            {(item.assignee || item.time) && (
              <div className="task-meta">
                {item.assignee ? item.assignee : ""}
                {item.assignee && item.time ? " • " : ""}
                {item.time ? item.time : ""}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") {
      return dateCellRender(current);
    }
    if (info.type === "month") {
      return monthCellRender(current);
    }
    return info.originNode;
  };

  return <Calendar fullscreen showWeek cellRender={cellRender} />;
};

export default AssignedComponent;
