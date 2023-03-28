import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Divider, List, Typography, Input, Space, Pagination } from "antd";
import axios from "axios";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

const ViewUser = () => {
  const test = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  const [data, setData] = useState([]);
  const [dataDisplay, setDataDisplay] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/users");
      console.log(res.data);
      const response = res.data;
      setData(response);
      setDataDisplay(response.slice(0, 2));
    };
    fetchData();
  }, []);

  const pageChanges = (page, pageSize) => {
    console.log(page, pageSize);
    setDataDisplay(data.slice((page - 1) * pageSize, page * pageSize));
  };

  return (
    <div>
      <Navbar />
      <Divider orientation="left">All Users</Divider>
      <div
        className="div"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 20px 20px 20px",
        }}
      >
        <div
          className="left"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "20px",
            height: "100vh",
          }}
        >
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 304,
            }}
          />
        </div>
        <div className="right" style={{ flex: 4 }}>
          <List
            header={
              <div>
                <h3>List {"(" + data.length + ")"}</h3>
              </div>
            }
            footer={
              <div>
                <Pagination
                  onChange={pageChanges}
                  defaultCurrent={1}
                  pageSize={2}
                  total={data.length}
                />
              </div>
            }
            bordered
            dataSource={dataDisplay}
            renderItem={(item) => (
              <List.Item>
                <b>
                  {item.firstName} {item.lastName}
                </b>
                <div className="main">
                  <div className="left"></div>
                  <div className="right">
                    <br />
                    Mobile: {item.mobile}
                    <br />
                    Email: {item.email}
                    <br />
                    Company: {item.company}
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
