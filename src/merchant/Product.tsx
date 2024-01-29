import { useEffect } from "react";
import MerchantLayout from "../layouts/MerchantLayout";
import axios from "axios";

const Product = () => {
  useEffect(() => {
    axios.get("localhost:3000", {}).then();
  });
  return (
    <MerchantLayout>
      <div>
        <h1>Products</h1>
        {}
      </div>
    </MerchantLayout>
  );
};

export default Product;
