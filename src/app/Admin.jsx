import React, { Component } from "react";
import AdminRouter from "../common/router/AdminRouter";
import Sidebar from "../common/layout/Sidebar";
import { Badge, Layout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "../assets/css/Dashboard.css";

const { Content } = Layout;

class Admin extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
        <Layout className="site-layout" style={{ background: "#fff" }}>
          <Content
            style={{
              margin: "24px",
              overflow: "initial"
            }}
          >
            {/* <Badge dot={true}>
              <BellOutlined />
            </Badge> */}
            <AdminRouter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Admin;
