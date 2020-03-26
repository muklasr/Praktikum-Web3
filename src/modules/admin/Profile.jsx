import React, { Component } from "react";
import { Typography } from "antd";

const { Title } = Typography;

class Profile extends Component {
  render() {
    return (
      <div style={{ padding: 24 }}>
        <Title level={3}>Halaman Profil</Title>
      </div>
    );
  }
}

export default Profile;
