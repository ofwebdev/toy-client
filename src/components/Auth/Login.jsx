import { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const { signIn, signInWithGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || emailError || !password || passwordError) {
      setError("Please fill out all required fields correctly.");
    } else {
      signIn(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess(true); // set success message
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            alert(
              "Invalid email address. Please try again or register for an account."
            );
          } else {
            alert("An error occurred. Please try again later.");
          }
        });
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSignInWithGmail = async () => {
    try {
      await signInWithGmail();
      setSuccess(true);
      navigate(from, { replace: true });
      // Do something after successful sign-in
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="mb-4 text-2xl">Login</h1>
      <form onSubmit={handleSubmit} className="w-full mx-auto max-w-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePassword}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {passwordError && (
            <p className="text-red-500 mt-1">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Login
        </button>

        <button
          type="button"
          className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
          onClick={handleSignInWithGmail}
        >
          Sign in with Gmail
        </button>

        <p className="mt-3 mb-0 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
