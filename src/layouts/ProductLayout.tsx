import { ReactNode } from "react";

interface ProductLayout {
  children: ReactNode;
}

const ProductLayout: React.FC<ProductLayout> = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <ul className='flex p-5'>
          <li className='mr-5'>
            <a href='/merchant/product/'>Products</a>
          </li>
          <li className='mr-5'>
            <a href='/merchant/product/add_product'>Add Product</a>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
