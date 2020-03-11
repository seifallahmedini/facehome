import React from "react";
import GroupInput from "../GroupInput/GroupInput";
import PostsButton from "../PostsButton/PostsButton";

import { Row, Col, Divider } from "antd";

// Style of this component
const textareaContainerStyle = { background: "#fff", padding: "12px" };
const dividerStyle = { marginTop: "8px", marginBottom: "8px" };

export default function PostsContainer() {
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={15}>
          <div style={textareaContainerStyle}>
            <div></div>
            <Divider style={dividerStyle} />
            <GroupInput />
            <Divider style={dividerStyle} />
            <div>
              <PostsButton />
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row gutter={16}>
        <Col className="gutter-row" span={15}>
          <div style={textareaContainerStyle}></div>
        </Col>
      </Row> */}
    </div>
  );
}
