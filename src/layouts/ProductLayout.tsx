import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";

interface ProductLayout {
  children: ReactNode;
}

const ProductLayout: React.FC<ProductLayout> = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <ul className='flex p-5'>
          <li
            className={`mr-5 ${
              location.pathname === "/product"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <Link to='/product'>Products</Link>
          </li>
          <li
            className={`mr-5 ${
              location.pathname === "/product/add_product"
                ? "border-b-2 border-green-500 pb-1 px-2"
                : ""
            }`}
          >
            <Link to='/product/add_product'>Add Product</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
