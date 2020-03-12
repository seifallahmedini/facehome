import React from "react";

import headerPhoto from "../../Photos/headerphoto/headerphoto.png";

// importing Antd components
import { Card, Button } from "antd";

// Style of this component
const containerStyle = {
  width: "100%",
  "margin-bottom": "15px",
  "border-left": "1px solid #dddfe2",
  "border-right": "1px solid #dddfe2",
  "border-bottom": "1px solid #dddfe2"
};

export default function GroupHeader() {
  return (
    <div style={containerStyle}>
      <Card
        hoverable
        style={{
          width: "100%"
        }}
        cover={
          <div
            style={{
              overflow: "hidden",
              height: "300px" /* Height of the "content" div */,
              width: "100%"
            }}
          >
            <img
              style={{
                //   height: "auto",
                //   "max-width": "100%",
                width: " 100%"
                //   "max-width": "932px",
                //   "max-height": "230px",
                //   width: " 932px",
                //   height: " 500px"
              }}
              alt="example"
              src={headerPhoto}
            />
          </div>
        }
      >
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Card>
    </div>
  );
}
