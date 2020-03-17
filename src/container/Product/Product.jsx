import React, {Component, Fragment} from 'react';
import { Carousel, Col, Row, Badge } from 'antd';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

const foodData = [
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
    {
        name:"Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]",
        price: "Rp. 410,000",
        image: "https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg"
    },
]

class Product extends Component {

    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.setState({
            order: value
        })
    }

    render(){
        return (
          <Fragment>
            <div className="header">
              <div className="logo">
                <img
                  src="https://etanee.id/img/content/img_logo_etanee_white.svg"
                  alt=""
                />
              </div>
              <div className="troley">
                <Badge count={this.state.order}>
                <img
                  src="https://etanee.id/img/icon/ic_cart_white.svg"
                  alt=""
                />
                </Badge>
              </div>
            </div>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
              <Row style={{justifyContent:'center'}}>
                {foodData.map(data => (
                  <Col span={5}>
                    <CardProduct
                      onCounterChange={value => this.handleCounterChange(value)}
                      name={data.name}
                      price={data.price}
                      image={data.image}
                    />
                  </Col>
                ))}
              </Row>
          </Fragment>
        );
    }
}

export default Product;