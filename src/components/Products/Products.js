import React from "react";
import styles from "./Products.module.css";
import { Container, Row, Col } from "react-bootstrap";
// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      <Container>
        <Row>

        
          {products.map((product) => (
        <Col md={6}>
              <Product key={product.id} product={product} />
            </Col>
           
          ))}
           
          </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
