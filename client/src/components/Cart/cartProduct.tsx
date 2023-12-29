import React, { useState } from 'react';
import { productToCart } from '../../app/Products/productModel';
import axios from 'axios';
import { Buffer } from 'buffer';
import { deleteById } from '../../app/Cart/cartActions';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import DeleteModal from './deleteModal';

interface CartProductProp {
  product: productToCart;
}

const CartProduct: React.FC<CartProductProp> = ({ product }) => {

  const {cart} = useSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();
  console.log("cart", cart)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [qty, setQty] = useState<number>(product.qty);
  const [image, setImage] = useState('')

  const handleCantidadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    setQty(isNaN(nuevaCantidad) ? 0 : nuevaCantidad);
  };
  const handleOnDelete = () => {
    dispatch(deleteById(cart, product.id))
  }

  const getImage = async () => {
    axios.get(product.image,{responseType: "arraybuffer"})
    .then((response) =>
      setImage(Buffer.from(response.data, "binary").toString("base64"))
    ).catch((err)=>{
      console.log("ocurrio un error al cargar la imagen", err)
    });
  }
  getImage();

  return (
    <div className="flex border-b py-4">
      <div className="w-1/4 pr-4">
        <img src={`data:;base64,${image}`} alt={product.model} className="w-full h-auto" />
      </div>

      <div className="w-1/2">
        <h3 className="text-lg font-semibold mb-2">{product.model}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <h3 className="text-lg font-semibold mb-2">Size: {product.size}</h3>
        <input
          type="number"
          value={qty}
          onChange={handleCantidadChange}
          className="mt-2 p-2 border w-16"
        />

        <button
          onClick={()=>setIsModalOpen(true)}
          className="mt-2 text-red-500 hover:text-red-600 focus:outline-none"
        >
          Eliminar
        </button>
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        onRequestClose={()=>setIsModalOpen(false)}
        onConfirm={handleOnDelete}
      />
    </div>
  );
};

export default CartProduct;
