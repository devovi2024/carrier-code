import React, { useContext, useState } from "react";
import { Mail, Lock, ArrowRight, Users } from "lucide-react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/authContext/auth-contex";
import { useLocation, useNavigate, Link } from "react-router-dom";
import SocialLogin from "../../pages/Shared/social-login";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // FIX: proper redirect fallback
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        form.reset();
        navigate(from, { replace: true }); // FIXED
      })
      .catch((error) => {
        toast.error(error.message || "Login failed");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">

      <div className="card w-full max-w-md bg-base-100 shadow-xl">

        <div className="card-body p-6">

          {/* HEADER */}
          <div className="text-center mb-6">
            <Users className="w-10 h-10 mx-auto text-primary mb-2" />
            <h2 className="text-2xl font-bold">Sign In</h2>
            <p className="text-sm text-gray-500">
              Welcome back! Login to continue
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSignIn} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="text-sm">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email"
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter password"
                  className="input input-bordered w-full pl-10"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? "Signing in..." : "Sign In"}
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>

          {/* SOCIAL LOGIN */}
          <SocialLogin from={from} />

          {/* REGISTER LINK */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signin;