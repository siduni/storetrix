import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="my-3 p-3">
        <Link to={`/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text className="my-4">${product.price}</Card.Text>

          <Card.Text>
            <Rating
              value={product.rating}
              text={`${product.numReviews}reviews`}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
       );
}

export default Product;
