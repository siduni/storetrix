import React from "react";
import products from "../../products";
import Product from "./Product";
import { Row, Col } from "react-bootstrap";

function Screen() {
  return (
    <main>
      <Row>
        {products.map((products) => (
          <Col md={3}>
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Screen;
