import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ModalDetails from "../ModalDetails/ModalDetails";

const Product = ({ product, setOpen }) => {
  const [modalShow, setModalShow] = useState(false);
  const { name, category, brand, size, price, image, id } = product;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-start">{name}</Card.Title>
          <Card.Text>
            <ul className="list-unstyled text-start">
              <li>Brand: {brand}</li>
            </ul>
          </Card.Text>
          <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Details
      </Button>

      <ModalDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      />
    </>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
