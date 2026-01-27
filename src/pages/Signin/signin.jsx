import React, { useContext, useState } from "react";
import { Mail, Lock, ArrowRight, Users } from "lucide-react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/authContext/auth-contex";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../pages/Shared/social-login";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state || '/'

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        form.reset();
        navigate("/"); 
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-6">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Sign In</h2>
            <p className="text-sm text-base-content/60 mt-1">Welcome back! Please login to your account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-base-content/40" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-base-content/40" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            <button type="submit" className={`btn btn-primary w-full mt-2 ${loading ? "loading" : ""}`}>
              Sign In <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>

          <SocialLogin  from={from}/>

          <div className="text-center mt-4">
            <p className="text-sm text-base-content/60">
              Don't have an account? <a href="/register" className="link link-primary">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
