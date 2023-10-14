import ExistingProductsDashboard from "../components/ExistingProductsDashboard/ExistingProductsDashboard";
import {useEffect} from 'react'

const ExistingProductsPage = ({productId, setProductId, setSignedIn, order, setOrder, toast}) => {

  useEffect(() => {
    setSignedIn(true)
  }, []);
  

  return (
    <>
      <ExistingProductsDashboard productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
    </>
  )
};

export default ExistingProductsPage;
