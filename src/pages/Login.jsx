import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

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

    userLogin(enteredEmail, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          navigate(location?.state || "/");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          toast.error("No user found with this email. Please register first.");
        } else if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (errorCode === "auth/too-many-requests") {
          toast.error("Too many login attempts. Please try again later.");
        } else {
          toast.error(`Error: ${errorMessage}`);
        }
      });
  };

  const handleForgotPassword = () => {
    navigate("/auth/forgot-password", { state: { email } });
  };

  return (
    <>
      <Helmet>
        <title>Login- My Website</title>
      </Helmet>

      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h2 className="text-2xl font-semibold text-center">
            Login Your Account
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
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="label-text-alt link link-hover text-blue-600"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Don't Have An Account?
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
