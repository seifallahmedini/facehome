import React from "react";
import "./RightSideBar.less";

import SearchComponent from "../SearchComponent/SearchComponent";

// importing Antd components
import { Layout, List, Avatar } from "antd";

const { Sider } = Layout;

// List of friends " in the future you can get this list from an api "
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];

// Style of this component
const siderStyle = {
  "border-left": "1px solid #dddfe2",
  overflow: "auto",
  position: "fixed",
  right: 0
};

const listStyle = {
  "margin-bottom": "100px"
};

const searchContainerStyle = { position: "fixed", bottom: 0, right: 0 };

export default function RightSideBar() {
  return (
    <div>
      <Sider width={200} style={siderStyle} className="right-side-bar">
        {/* List Component Start */}
        <List
          itemLayout="horizontal"
          dataSource={data}
          style={listStyle}
          className="right-side-bar-list"
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        {/* List Component End */}
        {/* Search Component Container Start */}
        <div style={searchContainerStyle}>
          <SearchComponent />
        </div>
        {/* Search Component Container End */}
      </Sider>
    </div>
  );
}
