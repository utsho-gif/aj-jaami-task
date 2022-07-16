import React, { useEffect, useState } from "react";
import ModalDetails from "../../ModalDetails/ModalDetails";
import Product from "../../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row g-5 my-3">
        {products.map((product) => (
          <Product key={product.id} product={product} ></Product>
        ))}
      </div>
      <ModalDetails products={products}></ModalDetails>
    </div>
  );
};

export default Products;
