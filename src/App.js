import React, { useState } from "react";
import Child from "./component/Child";
import "./styles.css";
export default function App() {
  const [message, setMessage] = useState(
    "Đây là những dữ liệu tôi gởi đến con tôi"
  );
  return (
    <div className="App">
      <Child data="" />
      <Child dataBasic="Tôi gởi thông thường" />
      <Child dataState={message} />
    </div>
  );
}
