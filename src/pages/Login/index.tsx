import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (idToken: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        idToken,
      });
      console.log("Login response:", response.data);
      navigate("/product/profile");
    } catch (error: any) {
      console.error(
        "Error in handleLogin:",
        error.response?.data || error.message,
      );
      setError(error.response?.data?.error || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
    window.location.href = "/product/profile";
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const idToken = await userCredential.user.getIdToken();
      await handleLogin(idToken);
    } catch (error: any) {
      console.error("Email login error:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      await handleLogin(idToken);
    } catch (error: any) {
      console.error("Google login failed:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-6xl">pBee.ai</h1>
        <div className="w-96 rounded-lg bg-white bg-opacity-10 p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl">Sign in to pBee.ai</h2>
          <p className="mb-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#6c63ff] hover:underline">
              Create one now
            </Link>
          </p>
          <form
            onSubmit={handleEmailLogin}
            className="flex flex-col items-center"
          >
            <label className="mb-4 w-full text-left">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="mt-1 w-full rounded-lg bg-white bg-opacity-20 p-3 text-white"
              />
            </label>
            <label className="mb-4 w-full text-left">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 w-full rounded-lg bg-white bg-opacity-20 p-3 text-white"
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full rounded-lg bg-[#6c63ff] p-3 text-white"
            >
              Sign in
            </button>
          </form>
          <Link
            to="/reset-password"
            className="mt-4 block text-[#6c63ff] hover:underline"
          >
            Forgot your password? Reset it now
          </Link>
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="mt-4 w-full rounded-lg bg-[#4285F4] p-3 text-white"
          >
            Sign in with Google
          </button>
          {isLoading && <p className="mt-4">Loading...</p>}
          {error && <p className="mt-4 text-[#ff6b6b]">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
