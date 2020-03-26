import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar, Layout, Menu } from "antd";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

class Sidebar extends Component {
  render() {
    return (
        <Sider
        width="220px"
          style={{
            background: "#68c93e",
            overflow: "auto",
            height: "100vh",
            position: "fixed", 
            left: 0,
            padding: "16px 36px 16px 16px"
            // marginTop: 64
          }}
        >
          <div className="logo" />
          <Avatar size={74} icon={<UserOutlined />} style={{ display: "block", margin:"10px auto"}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{background:"#68c93e"}}>
            <Menu.Item key="1">
              <Link to="/adm">
                <DashboardOutlined />
                <span className="nav-text" style={{ marginLeft: "10px" }}>
                  Dashboard
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/adm/profile">
                <UserOutlined />
                <span className="nav-text" style={{ marginLeft: "10px" }}>
                  Profil
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/adm">
                <UnorderedListOutlined />
                <span className="nav-text" style={{ marginLeft: "10px" }}>
                  Produk
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/adm">
                <SettingOutlined />
                <span className="nav-text" style={{ marginLeft: "10px" }}>
                  Pengaturan
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/adm">
                <QuestionCircleOutlined />
                <span className="nav-text" style={{ marginLeft: "10px" }}>
                  Bantuan
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}
export default Sidebar;
