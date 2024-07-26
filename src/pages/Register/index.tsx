import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await sendEmailVerification(userCredential.user);

      const idToken = await userCredential.user.getIdToken();
      await axios.post("http://localhost:5000/api/create-user", { idToken });

      setSuccess(
        "User signed up successfully! Please check your email for verification.",
      );
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error: any) {
      console.error("Error signing up:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();
      await axios.post("http://localhost:5000/api/create-user", { idToken });

      setSuccess("Signed up successfully with Google!");
      setTimeout(() => {
        navigate("/welcome");
      }, 2000);
    } catch (error: any) {
      console.error("Google sign up failed:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-4xl">Placard</h1>
        <div className="w-full max-w-md rounded-lg bg-white bg-opacity-10 p-8 text-center shadow-lg">
          <h2 className="mb-3 text-2xl">Create your account</h2>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-[#6c63ff] hover:underline">
              Sign in now
            </Link>
          </p>
          <form
            className="mt-5 flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <label className="mb-3 w-full text-left">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="mt-1 w-full rounded-md border-none bg-white bg-opacity-20 p-2 text-white"
              />
            </label>
            <label className="mb-3 w-full text-left">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="mt-1 w-full rounded-md border-none bg-white bg-opacity-20 p-2 text-white"
              />
            </label>
            <label className="mb-3 w-full text-left">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="mt-1 w-full rounded-md border-none bg-white bg-opacity-20 p-2 text-white"
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-5 w-full rounded-lg bg-[#6c63ff] py-2 text-white transition-colors hover:bg-[#524dff] disabled:bg-opacity-50"
            >
              Sign up
            </button>
          </form>
          <button
            onClick={handleGoogleRegister}
            disabled={isLoading}
            className="mt-5 w-full rounded-lg bg-[#4285F4] py-2 text-white transition-colors hover:bg-[#357ae8] disabled:bg-opacity-50"
          >
            Sign up with Google
          </button>
          {isLoading && <p className="mt-5">Loading...</p>}
          {error && <p className="mt-5 text-red-500">{error}</p>}
          {success && <p className="mt-5 text-green-500">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
