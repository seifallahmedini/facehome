import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import PostCard from "./Components/PostCard/PostCard";
import PostsContainer from "./Components/PostsContainer/PostsContainer";
import GroupHeader from "./Components/GroupHeader/GroupHeader";

import "./index.css";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <NavBar />
      <Layout style={{ padding: "41px 0px" }}>
        <LeftSideBar />
        <Layout style={{ padding: "0 260px 260px 0" }}>
          <GroupHeader />
          <Content
            className="site-layout-background"
            style={
              {
                // padding: 24,
                // margin: "0px 0",
                // minHeight: 280,
                // overflow: "initial"
              }
            }
          >
            {/* <Layout
              style={{ padding: "0 260px 260px 0" }}
              className="site-layout-background"
            ></Layout>
            <Layout
              style={{ padding: "0 260px 260px 0" }}
              className="site-layout-background"
            ></Layout> */}
            {/* <PostCard /> */}
            <PostsContainer />
          </Content>
        </Layout>
        <RightSideBar />
      </Layout>
    </Layout>
  );
}

export default App;
