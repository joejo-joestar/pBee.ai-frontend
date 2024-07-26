import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const EmailVerification: React.FC = () => {
  const [message, setMessage] = useState("Verifying your email...");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyEmail = async () => {
      const searchParams = new URLSearchParams(location.search);
      const token = searchParams.get("token");

      if (!token) {
        setMessage("Invalid verification link.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/verify-email?token=${token}`
        );
        console.log("Verification response:", response.data);
        setMessage(response.data.message);
        setIsVerified(true);
      } catch (error: any) {
        console.error(
          "Verification error:",
          error.response?.data || error.message
        );
        setMessage(
          error.response?.data?.error ||
            "An error occurred while verifying your email. Please try again."
        );
      }
    };

    verifyEmail();
  }, [location]);

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <p className="text-lg mb-5">{message}</p>
      {isVerified && (
        <button
          onClick={handleNavigateToLogin}
          className="px-5 py-2 text-lg bg-[#6c63ff] text-white rounded-md hover:bg-[#524dff]"
        >
          Go to Login
        </button>
      )}
    </div>
  );
};

export default EmailVerification;
