import React, {FC, useEffect} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { fetchProductCatalog } from '../../app/Products/productActions';
import { useSelector } from 'react-redux';
import ProductCatalog from '../../components/Products/ProductCatalog';
import CustomSuccessAlert from '../../components/Alerts/CustomSuccessAlert';
import { clearAlerts } from '../../app/Cart/cartActions';
import CustomErrorAlert from '../../components/Alerts/CustomErrorAlert';

const Shop: FC = () => {
    
    const {productCatalog} = useSelector((state: any) => state.productCatalog);
    const { errorMessage, successMessage } = useSelector((state: any) => state.cart);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchProductCatalog());
    }, [])

    return (
        <div className="container mx-auto p-4 content-center">
            <h1 className="text-3xl font-semibold mb-8 mt-2 text-center">Catálogo de Productos</h1>
            {errorMessage && <CustomErrorAlert AlertMessage={errorMessage}  onCancelAlert={()=>{dispatch(clearAlerts())}}/>}
            {successMessage && <CustomSuccessAlert AlertMessage={successMessage} onCancelAlert={()=>{dispatch(clearAlerts())}}/>}
            <ProductCatalog products={productCatalog} />
        </div>
    )
}

export default Shop;