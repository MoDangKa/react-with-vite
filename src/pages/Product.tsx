import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  if (!type) {
    return <p>No product type provided!</p>;
  }

  const validTypes = ["laptop", "shoes", "phone"];
  if (!validTypes.includes(type)) {
    return (
      <p>
        Invalid product type: <strong>{type}</strong>
      </p>
    );
  }

  return (
    <div>
      <h1>Product Page</h1>
      <p>
        You are viewing the product type: <strong>{type}</strong>
      </p>
    </div>
  );
};

export default Product;
