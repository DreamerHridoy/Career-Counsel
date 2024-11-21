import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Please check your inbox.");
      navigate("/auth/login"); // Redirect to login after email is sent
    } catch (error) {
      toast.error("Error sending password reset email: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-md p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter your email address to reset your password. We'll send a
          reset link to your email.
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
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
