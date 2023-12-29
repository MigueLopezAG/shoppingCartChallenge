import React, { useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';
import { ProductCatalogModel } from '../../app/Products/productModel';
import { buildProductFromCatalog } from '../../app/Products/builders';
import { addToCart } from '../../app/Cart/cartActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';

interface ProductProps {
  product: ProductCatalogModel
}

const CardProduct: React.FC<ProductProps> = ({ product }) => {

  const navigate = useNavigate();
  const { cart } = useSelector((state: any) => state.cart);
  const [image, setImage] = useState('')
  const dispatch = useAppDispatch();

  const getImage = async () => {
    axios.get(product.image, { responseType: "arraybuffer" })
      .then((response) =>
        setImage(Buffer.from(response.data, "binary").toString("base64"))
      );
  }
  getImage();

  const handleAddToCart = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    const productToCart = buildProductFromCatalog(product);
    dispatch(addToCart(cart, productToCart));
  }

  return (
    <div
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      onClick={() => navigate('/product/' + product.id)}
    >
      <img src={`data:;base64,${image}`} alt={product.model} className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <p className="text-lg font-bold text-black truncate block capitalize">{product.model}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price.toFixed(2)}</p>
          <div className="ml-auto" onClick={handleAddToCart}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;