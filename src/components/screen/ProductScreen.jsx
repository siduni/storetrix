import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../../products";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

function ProductScreen() {
  let { id } = useParams();
  let product = products.find((p) => p._id === id);
  return (
    <main className="py-3">
      <Link className="btn btn-light my-3" to="/">
        go back
      </Link>
      <Row>
        <Col md={6}>
          <img src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem as="h3">{product.name}</ListGroupItem>
            <ListGroupItem as="h4">${product.price}</ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>price:{product.price}</ListGroupItem>
            <ListGroupItem>
              status:{product.countInStock > 0 ? "In Stock" : "out of stock"}
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-grid gap-2">
                <Button
                  style={{ widh: "100%" }}
                  disabled={product.countInStock ? false : true}
                >
                  add to cart
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </main>
  );
}

export default ProductScreen;
