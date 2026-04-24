import React, { useContext } from "react";
import { Mail, Lock, ArrowRight, Users } from "lucide-react";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

import registerLottie from "../../assets/lottie/register.json";
import { AuthContext } from "../../context/authContext/auth-contex";
import SocialLogin from "../../pages/Shared/social-login";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const agreeTerms = form.agreeTerms.checked;

    if (!agreeTerms) {
      toast.error("You must agree to the terms!");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("Registration successful!");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center p-4">

      <div className="card w-full max-w-4xl bg-base-100 shadow-xl">

        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-8">

            <div className="text-center">
              <Lottie
                animationData={registerLottie}
                loop
                className="w-full"
              />

              <h3 className="text-xl font-semibold mt-4">
                Welcome to Our Community
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Join thousands of users
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 p-6 sm:p-8">

            {/* HEADER */}
            <div className="text-center mb-6">
              <Users className="w-10 h-10 mx-auto text-primary mb-2" />
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-sm text-gray-500">
                Sign up to get started
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleRegister} className="space-y-4">

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
                    minLength="6"
                    placeholder="Create password"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
              </div>

              {/* TERMS */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  className="checkbox checkbox-sm"
                  required
                />
                I agree to the terms
              </label>

              {/* BUTTON */}
              <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                Register <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* SOCIAL LOGIN */}
            <SocialLogin />

            {/* LOGIN LINK */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/sign" className="text-primary">
                Sign in
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;