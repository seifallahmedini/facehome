import React from "react";

import "./LeftSideBar.less";

// importing Antd components
import { Layout, Menu, Input } from "antd";
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

const { Search } = Input;

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
      <div class="_19sz">
        <h1 class="_19s-">
          <a href="/groups/118572306251357/?ref=group_header">
            ING2 -INLOG -INREV
          </a>
        </h1>
        <div>
          <span>
            <i></i>Groupe Privé
          </span>
        </div>
      </div>
      <Menu className="left-menu">
        <Menu.Item className="_2yau" key="2">
          À propos
        </Menu.Item>
        <Menu.Item className="_2yau" key="3">
          Discussion
        </Menu.Item>
        <Menu.Item className="_2yau" key="4">
          Membres
        </Menu.Item>
        <Menu.Item className="_2yau" key="5">
          Évènements
        </Menu.Item>
        <Menu.Item className="_2yau" key="6">
          Photos
        </Menu.Item>
        <Menu.Item className="_2yau" key="7">
          Fichiers
        </Menu.Item>
        <Menu.Item className="_2yau" key="8">
          Séance vidéo
        </Menu.Item>
        {/* </SubMenu> */}
      </Menu>
      <div style={{ marginTop: "2px", padding: "1px 22px" }}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
    </Sider>
  );
}
