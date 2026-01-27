import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext/auth-contex'
import { LogIn } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SocialLogin = ({ from }) => {
  const { signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success('Logged in with Google!')
        navigate(from || '/')
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full gap-2">
      <LogIn className="w-5 h-5 text-red-500" />
      Continue with Google
    </button>
  )
}

export default SocialLogin
