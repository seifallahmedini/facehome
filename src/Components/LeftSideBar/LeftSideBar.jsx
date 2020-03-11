import React from "react";

// importing Antd components
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function LeftSideBar() {
  return (
    <Sider
      width={200}
      style={{
        "margin-left": "30px",
        "margin-right": "30px"
      }}
      className="left-side-bar"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        className="left-menu"
        style={
          {
            //   overflow: "auto",
            //   height: "100vh",
            //   width: "17%",
            //   position: "fixed"
            // "margin-right": "10px"
          }
        }
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              subnav 1
            </span>
          }
        >
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <LaptopOutlined />
              subnav 2
            </span>
          }
        >
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <NotificationOutlined />
              subnav 3
            </span>
          }
        >
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <CloudOutlined />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <AppstoreOutlined />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <TeamOutlined />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <ShopOutlined />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
