import React, { Component } from "react";
import { Calendar, Card, Col, Row, Typography } from "antd";
import CustomCard from "../../common/component/CustomCard/CustomCard";

const { Title } = Typography;

class Dashboard extends Component {
  render() {
    return (
      <div style={{ padding: 24 }}>
        <Title level={3}>Halo Admin</Title>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={8}>
                <CustomCard title="Produk" value="6"/>
              </Col>
              <Col span={8}>
                <CustomCard title="Kategori" value="2" />
              </Col>
              <Col span={8}>
                <CustomCard title="Terjual" value="3" />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Card
              style={{
                width: "100%",
                boxShadow: "rgba(204, 204, 204, 0.46) 10px 10px 24px",
                borderRadius: "10px"
              }}
            >
              <Calendar fullscreen={false} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
