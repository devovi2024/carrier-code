import { useContext } from 'react'
import { AuthContext } from '../context/authContext/auth-contex'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
