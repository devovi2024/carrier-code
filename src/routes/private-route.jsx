import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext/auth-contex'

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} />
  }

  return children
}

export default PrivateRoute
