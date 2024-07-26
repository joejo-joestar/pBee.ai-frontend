import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebaseConfig";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      setIsError(false);
      setTimeout(() => navigate("/login"), 3000); // Redirect to login page after 3 seconds
    } catch (error: any) {
      console.error("Password reset error:", error);
      setMessage(error.message || "An error occurred. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="flex max-w-full flex-col items-center p-5">
        <h1 className="mb-5 text-4xl">pBee.ai</h1>
        <div className="w-full max-w-md rounded-lg bg-white bg-opacity-10 p-8 text-center shadow-lg">
          <h2 className="mb-3 text-2xl">Reset your password</h2>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <label className="mb-3 w-full text-left">
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-md border-none bg-white bg-opacity-20 p-2 text-white"
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-5 w-full rounded-lg bg-[#6c63ff] py-2 text-white transition-colors hover:bg-[#524dff] disabled:bg-opacity-50"
            >
              {isLoading ? "Sending..." : "Send reset link"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-5 ${isError ? "text-red-500" : "text-green-500"}`}
            >
              {message}
            </p>
          )}
          <Link to="/login" className="mt-5 text-[#6c63ff] hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
