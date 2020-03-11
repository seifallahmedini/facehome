import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function SearchComponent() {
  return (
    <React.Fragment>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </React.Fragment>
  );
}
