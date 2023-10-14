import UserProfile from '../components/dashboard/UserProfile'
import {useEffect} from 'react'

const Dashboard = ({setSignedIn, productId, setProductId, order, setOrder, toast}) => {

  useEffect(() => {
    setSignedIn(true);
  }, [])

  return (
    <> 
      <UserProfile productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
    </>
  )
};

export default Dashboard;
