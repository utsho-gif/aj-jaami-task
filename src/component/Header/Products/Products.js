import React, { useEffect, useState } from "react";
import ModalDetails from "../../ModalDetails/ModalDetails";
import Product from "../../Product/Product";

const Products = () => {
  
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState([]);
  
  const handleRemoveProduct = (id) => {
    const rest = products.filter(i => i.id !== id)
    setProducts(rest); 
    // console.log(id);
  }
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row g-5 my-3">
        {products.map((product) => (
          <Product key={product.id} product={product} setModalShow={setModalShow}></Product>
        ))}
      </div>
      <ModalDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default Products;
