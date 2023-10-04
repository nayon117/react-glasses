import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    
    const { user, loading } = useAuth()

    if (loading) return <h1 className="text-5xl">loading</h1>
    
    if (!user?.email) {
        return  <Navigate to='/login'/>
    }
     
    return children
};

PrivateRoute.propTypes = {
    children:PropTypes.node
}
export default PrivateRoute;