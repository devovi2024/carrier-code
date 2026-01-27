import React, { useContext } from "react";
import { Mail, Lock, ArrowRight, Users } from "lucide-react";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import registerLottie from "../../assets/lottie/register.json";
import { AuthContext } from "../../context/authContext/auth-contex";
import { useNavigate } from "react-router-dom";
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
      toast.error("You must agree to the terms and conditions!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful!");
        form.reset();
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body p-0 flex flex-col md:flex-row">
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 p-8 items-center justify-center">
            <div className="w-full max-w-sm">
              <Lottie animationData={registerLottie} loop autoplay className="w-full h-auto" />
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-base-content">Welcome to Our Community</h3>
                <p className="text-base-content/60 mt-2">Join thousands of users who trust our platform</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-sm text-base-content/60 mt-1">Sign up to get started</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
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
                    placeholder="Create a password"
                    className="input input-bordered w-full pl-10"
                    required
                    minLength="6"
                  />
                </div>
              </div>

              <div className="form-control mt-4">
                <label className="cursor-pointer label justify-start gap-3">
                  <input type="checkbox" name="agreeTerms" className="checkbox checkbox-sm" required />
                  <span className="label-text text-sm">I agree to the terms and conditions</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Register <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>

            <SocialLogin />

            <div className="text-center mt-4">
              <p className="text-sm text-base-content/60">
                Already have an account? <a href="/sign" className="link link-primary">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
