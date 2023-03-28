import React from "react";
import Navbar from "./Navbar";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Switch,
  DatePicker,
  Card,
  notification,
  message,
  Upload
} from "antd";
import axios from "axios";
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

const AddAUser = () => {
  const openNotification = () => {
    notification.open({
      message: "User Created Successfully",
    });
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await axios.post("http://localhost:4000/api/users", values);
    const response = res.data;
    if (response.ok) {
      openNotification();
      // info()
    }
    console.log(response);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "98vw",
          minHeight: "90vh",
          backgroundColor: "lightgrey",
          padding: "30px 20px 20px 20px",
        }}
      >
        <Card
          title="Add A User"
          bordered={false}
          style={{
            width: 600,
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mobile No"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please input your Mobile!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={[
                {
                  required: true,
                  message: "Please input your Company!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item label="availableOn">
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="graduatedFrom"
              label="Graduated From"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="IIT Delhi">IIT Delhi</Option>
                <Option value="IIT Kanpur">IIT Kanpur</Option>
                <Option value="IIT Madras">IIT Madras</Option>
                <Option value="IIT Kharagpur">IIT Kharagpur</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Profile Picture" valuePropName="profile">
              <Upload action="http://localhost:4000/api/upload" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item label="Resume" valuePropName="resume">
              <Upload action="http://localhost:4000/api/upload" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AddAUser;
