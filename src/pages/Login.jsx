import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = e.target.email.value;
    const password = e.target.password.value;

    if (!enteredEmail || !password) {
      toast.error("Please fill in both email and password fields.");
      return;
    }

    userLogin(enteredEmail, password).then((result) => {
      if (result) {
        navigate(location?.state?.from || "/");
      } else {
        navigate("/auth/login");
      }
    });
  };

  return (
    <AuthLayout>
      <Helmet>
        <title>Login - My Website</title>
      </Helmet>

      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Login to Your Account
          </h2>
          <form
            onSubmit={(e) => {
              handleLogin(e);
              setEmail(e.target.email.value);
            }}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/auth/forgot-password"
                  state={{ email }}
                  className="label-text-alt link link-hover text-blue-600"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold mt-4">
            Don't Have An Account?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </AuthLayout>
  );
};

export default Login;
