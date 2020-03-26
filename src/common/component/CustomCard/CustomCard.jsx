import React, { Component } from "react";
import { Card, Statistic } from "antd";

// CustomCard.defaultProps = {
//     precision: '0',
//     suffix: ''
// }

class CustomCard extends Component {
  render() {
    return (
      <Card
        style={{
          width: "95%",
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(104,119,221,1) 0%, rgba(0,212,255,1) 100%)",
          boxShadow: "rgba(204, 204, 204, 0.46) 5px 5px 10px",
          borderRadius: "10px"
        }}
      >
        <Statistic
          title={this.props.title}
          value={this.props.value}
          precision={this.props.precision}
          valueStyle={{ color: "#ffffff" }}
          suffix={this.props.suffix}
          style={{
              textAlign:"right"
          }}
        />
      </Card>
    );
  }
}

export default CustomCard;
