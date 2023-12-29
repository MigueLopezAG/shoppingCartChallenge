import React, {FC, useEffect} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchProductCatalog } from '../../app/Products/productActions';
import { useSelector } from 'react-redux';
import ProductCatalog from '../../components/Products/ProductCatalog';

const Shop: FC = () => {
    
    const {productCatalog} = useSelector((state: any) => state.productCatalog);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchProductCatalog());
    }, [])

    return (
        <div className="container mx-auto p-4 content-center">
            <h1 className="text-3xl font-semibold mb-4">Catálogo de Productos</h1>
            <ProductCatalog products={productCatalog} />
        </div>
    )
}

export default Shop;