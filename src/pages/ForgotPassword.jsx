import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email || "");

  const handleResetPassword = () => {
    navigate("https://mail.google.com", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-md p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter your email address to reset your password. We'll redirect
          you to Gmail to complete the process.
        </p>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </div>
        <button
          onClick={handleResetPassword}
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
