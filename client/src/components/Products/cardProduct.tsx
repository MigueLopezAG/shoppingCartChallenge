import React, { useState } from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';
import { useNavigate } from 'react-router-dom';
import { ProductCatalogModel } from '../../app/Products/productModel';
import { buildProductFromCatalog } from '../../app/Products/builders';
import { addToCart } from '../../app/Cart/cartActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';

interface ProductProps {
  product: ProductCatalogModel
}

const Product: React.FC<ProductProps> = ({ product }) => {

  const navigate = useNavigate();
  const {cart} = useSelector((state: any) => state.cart);
  const [image, setImage] = useState('')
  const dispatch = useAppDispatch();
  
  const getImage = async () => {
    axios.get(product.image,{responseType: "arraybuffer"})
    .then((response) =>
      setImage(Buffer.from(response.data, "binary").toString("base64"))
    );
  }
  getImage();

  const handleAddToCart = (event: { stopPropagation: () => void; }) =>{
    event.stopPropagation();
    const productToCart = buildProductFromCatalog(product);
    dispatch(addToCart(cart, productToCart));
  }

  return (
    <div 
      className="border p-4 mb-4 rounded-md shadow-md flex flex-col items-center"
      onClick={()=>{navigate('/product/'+product.id)}}  
    >
      <img src={`data:;base64,${image}`} alt={product.model} className="mb-2 rounded-md h-auto w-auto" />
      <h3 className="text-lg font-semibold">{product.model}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <h3 className="text-lg font-semibold">size: {product.size}</h3>
      <button
        className="mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;