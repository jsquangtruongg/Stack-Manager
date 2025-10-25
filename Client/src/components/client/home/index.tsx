import "./style.scss";
import avatar from "../../../assets/images/avatar.png";

import CreateIcon from "@mui/icons-material/Create";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import AdjustIcon from "@mui/icons-material/Adjust";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SdCardIcon from "@mui/icons-material/SdCard";
import { LinearProgress } from "@mui/material";
import SimCardIcon from "@mui/icons-material/SimCard";
import MessageIcon from "@mui/icons-material/Message";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import type { EChartsOption } from "echarts";
const HomeComponent = () => {
  const [progress, setProgress] = useState(70);
  const barChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!barChartRef.current) return;

    const barChart = echarts.init(barChartRef.current);
    const colors = ["#34C759", "#FD521B", "#4CD7F6", "#007AFF"];

    const barOption: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: [
        {
          type: "category",
          data: ["Marketing", "Dev", "HR", "Design"],
          axisTick: { alignWithLabel: true },
          axisLabel: {
            fontSize: 14,
            interval: 0,
            color: (_value, index) =>
              colors[index !== undefined ? index % colors.length : 0],
          },
        },
      ],
      yAxis: [{ type: "value" }],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334],
          itemStyle: {
            color: (params) => colors[params.dataIndex % colors.length],
          },
        },
      ],
    };

    barChart.setOption(barOption as any);

    return () => barChart.dispose();
  }, []);

  // Biểu đồ tròn (Pie Chart)
  useEffect(() => {
    if (!pieChartRef.current) return;

    const pieChart = echarts.init(pieChartRef.current);
    const pieOption: echarts.EChartsOption = {
      tooltip: { trigger: "item" },
      legend: { top: "5%", left: "center" },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: { borderRadius: 10 },
          label: { show: false, position: "center" },
          emphasis: {
            label: { show: true, fontSize: 40, fontWeight: "bold" },
          },
          labelLine: { show: false },
          data: [
            {
              value: 1048,
              name: "Marketing",
              itemStyle: { color: "#34C759" },
            },
            { value: 735, name: "Dev", itemStyle: { color: "#FD521B" } },
            { value: 580, name: "HR", itemStyle: { color: "#4CD7F6" } },
            { value: 484, name: "Design", itemStyle: { color: "#007AFF" } },
          ],
        },
      ],
    };

    pieChart.setOption(pieOption as any);
    return () => pieChart.dispose();
  }, []);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          if (Array.isArray(params)) return "";
          return `${params.name}: ${params.value}`;
        },
      },

      grid: { left: "12%", right: "5%", bottom: "5%", top: "10%" },
      xAxis: {
        type: "value",
        min: 0,
        max: 100,
        splitLine: { show: false },
      },
      yAxis: {
        type: "category",
        data: ["Dev", "UI Design", "Marketing", "HR"],
        axisTick: { show: false },
        axisLabel: {
          fontSize: 12,
          interval: 0,
          rotate: 0, // Để 0 nếu không cần xoay
        },
      },
      series: [
        {
          type: "bar",
          data: [
            { name: "Dev", value: 60, itemStyle: { color: "#FF5733" } },
            {
              name: "Design",
              value: 55,
              itemStyle: { color: "#007BFF" },
            },
            { name: "Marketing", value: 47, itemStyle: { color: "#28A745" } },
            {
              name: "HR",
              value: 75,
              itemStyle: { color: "#4CD7F6" },
            },
          ],
          barWidth: 20,
          label: {
            show: true,
            position: "right",
            formatter: (params: any) => {
              if (!params.value) return `${params.name}: N/A`; // Tránh lỗi null/undefined

              return `${params.name}: ${
                Array.isArray(params.value) ? params.value[1] : params.value
              }`;
            },
          },
        },
      ],
    };

    chart.setOption(option as any);

    return () => chart.dispose();
  }, []);
  return (
    <div className="header-task">
      <div className="header-task-title">
        <div className="nav-list">
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
          <div className="from-limited">
            <div className="item-limited">
              <LockIcon className="icon-add" />
              <span className="txt-view-boards">Hạn Chế</span>
              <ExpandMoreIcon className="icon-add" />
            </div>
          </div>
          <div className="from-owners-team">
            <div className="item-host">
              <p className="txt-view-boards">Chủ sở hữu</p>
            </div>
            <p className="item-x">X</p>
            <div className="item-host">
              <p className="txt-view-boards">X Team</p>
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
        </div>
        <div className="BacklogTasks">
          <div className="from-backlogTasks">
            <p className="text-backlog">Nhiệm vụ</p>
            <p className="item-backlog">5</p>
          </div>
          <div className="MoreHoriz-icon">
            <MoreHorizIcon className="icon-item" />
          </div>
        </div>
        <div className="from-item-boards">
          <div className="item-boards">
            <div className="from-text-page">
              <p className="txt-page">Trang “Đặt hàng” và “Cài đặt</p>
              <div className="item-save">
                <SdCardIcon className="icon-save" />
                <p className="item-number">4</p>
              </div>
            </div>
            <div className="from-energy">
              <p className="item-progress">Tiến triển</p>
              <p className="item-progress">8/10</p>
            </div>
            <div className="progress-container">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="custom-progress"
              />
            </div>
            <div className="from-mission">
              <button className="item-btn">Design</button>
              <button className="item-btn">Design</button>
            </div>
            <div className="from-member">
              <div className="from-members">
                <div className="item-member">
                  <img src={avatar} alt="" className="img-avt-one" />
                  <img src={avatar} alt="" className="img-avt-true" />
                  <p className="add-member">5+</p>
                </div>
                <div className="item-add">
                  <ControlPointIcon className="icon-add" />
                </div>
              </div>
              <div className="from-icon">
                <div className="from-mess">
                  <SimCardIcon className="icon-cart" />
                  <span className="item-number-cart">2</span>
                </div>
                <div className="from-mess">
                  <MessageIcon className="icon-mess" />
                  <span className="item-number-mess">3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-boards">
            <div className="from-text-page">
              <p className="txt-page">Trang “Đặt hàng” và “Cài đặt</p>
              <div className="item-save">
                <SdCardIcon className="icon-save" />
                <p className="item-number">4</p>
              </div>
            </div>
            <div className="from-energy">
              <p className="item-progress">Tiến triển</p>
              <p className="item-progress">8/10</p>
            </div>
            <div className="progress-container">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="custom-progress"
              />
            </div>
            <div className="from-mission">
              <button className="item-btn">Design</button>
              <button className="item-btn">Design</button>
            </div>
            <div className="from-member">
              <div className="from-members">
                <div className="item-member">
                  <img src={avatar} alt="" className="img-avt-one" />
                  <img src={avatar} alt="" className="img-avt-true" />
                  <p className="add-member">5+</p>
                </div>
                <div className="item-add">
                  <ControlPointIcon className="icon-add" />
                </div>
              </div>
              <div className="from-icon">
                <div className="from-mess">
                  <SimCardIcon className="icon-cart" />
                  <span className="item-number-cart">2</span>
                </div>
                <div className="from-mess">
                  <MessageIcon className="icon-mess" />
                  <span className="item-number-mess">3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-boards">
            <div className="from-text-page">
              <p className="txt-page">Trang “Đặt hàng” và “Cài đặt</p>
              <div className="item-save">
                <SdCardIcon className="icon-save" />
                <p className="item-number">4</p>
              </div>
            </div>
            <div className="from-energy">
              <p className="item-progress">Tiến triển</p>
              <p className="item-progress">8/10</p>
            </div>
            <div className="progress-container">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="custom-progress"
              />
            </div>
            <div className="from-mission">
              <button className="item-btn">Design</button>
              <button className="item-btn">Design</button>
            </div>
            <div className="from-member">
              <div className="from-members">
                <div className="item-member">
                  <img src={avatar} alt="" className="img-avt-one" />
                  <img src={avatar} alt="" className="img-avt-true" />
                  <p className="add-member">5+</p>
                </div>
                <div className="item-add">
                  <ControlPointIcon className="icon-add" />
                </div>
              </div>
              <div className="from-icon">
                <div className="from-mess">
                  <SimCardIcon className="icon-cart" />
                  <span className="item-number-cart">2</span>
                </div>
                <div className="from-mess">
                  <MessageIcon className="icon-mess" />
                  <span className="item-number-mess">3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item-boards">
            <div className="from-text-page">
              <p className="txt-page">Trang “Đặt hàng” và “Cài đặt</p>
              <div className="item-save">
                <SdCardIcon className="icon-save" />
                <p className="item-number">4</p>
              </div>
            </div>
            <div className="from-energy">
              <p className="item-progress">Tiến triển</p>
              <p className="item-progress">8/10</p>
            </div>
            <div className="progress-container">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="custom-progress"
              />
            </div>
            <div className="from-mission">
              <button className="item-btn">Design</button>
              <button className="item-btn">Design</button>
            </div>
            <div className="from-member">
              <div className="from-members">
                <div className="item-member">
                  <img src={avatar} alt="" className="img-avt-one" />
                  <img src={avatar} alt="" className="img-avt-true" />
                  <p className="add-member">5+</p>
                </div>
                <div className="item-add">
                  <ControlPointIcon className="icon-add" />
                </div>
              </div>
              <div className="from-icon">
                <div className="from-mess">
                  <SimCardIcon className="icon-cart" />
                  <span className="item-number-cart">2</span>
                </div>
                <div className="from-mess">
                  <MessageIcon className="icon-mess" />
                  <span className="item-number-mess">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="from-item-chart">
          <div className="item-chart">
            <div className="from-chart">
              <div
                ref={barChartRef}
                style={{ width: "300px", height: "250px" }}
              />
            </div>
            <div className="from-charts">
              <div
                ref={pieChartRef}
                style={{ width: "300px", height: "250px", marginTop: "40px" }}
              />
            </div>
          </div>
          <div className="from-chart-boards">
            <div ref={chartRef} style={{ width: "500px", height: "450px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeComponent;
