import React from "react";

import photo from "../../Photos/postsButtonsIcons/photo.png";
import popcorn from "../../Photos/postsButtonsIcons/popcorn.png";
import tag from "../../Photos/postsButtonsIcons/tag.png";

import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

// Style of this component
const buttonIconsStyle = {
  width: "20px",
  marginRight: "6px",
  marginBottom: "3px"
};
const buttonStyle = {
  backgroundColor: "#f5f6f7",
  border: 0,
  marginRight: "6px"
};

export default function PostsButton() {
  return (
    <React.Fragment>
      <Button
        style={buttonStyle}
        shape="round"
        icon={<img style={buttonIconsStyle} src={photo} alt="icon" />}
        size="default"
      >
        Photo/Video
      </Button>
      <Button
        style={buttonStyle}
        shape="round"
        icon={<img style={buttonIconsStyle} src={popcorn} alt="icon" />}
        size="default"
      >
        Seance Video
      </Button>
      <Button
        style={buttonStyle}
        shape="round"
        icon={<img style={buttonIconsStyle} src={tag} alt="icon" />}
        size="default"
      >
        Identifier
      </Button>
    </React.Fragment>
  );
}
