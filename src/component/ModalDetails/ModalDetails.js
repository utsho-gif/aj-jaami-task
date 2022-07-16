import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalDetails = (props) => {
  const {name, category, brand, size, price, image, id} = props?.show;
  const {handleRemove} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{category}</h4>
        <p className="d-flex justify-content-between align-items-center">
          <div>
          <ul className="list-unstyled">
            <li>Brand: {brand}</li>
            <li>Size: {size}</li>
            <li>Price: {price}</li>
          </ul>
          </div>
          <div>
            <img className="img-fluid" height={200} width={200} src={image} alt="" />
          </div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={() => handleRemove(id)} className="btn-dark btn-outline-danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetails;
