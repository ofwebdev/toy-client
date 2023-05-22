import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

function Register() {
  useTitle("Register user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { register, signInWithGmail } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = e.target;

    const data = {
      name,
      email,
      password,
      photoUrl,
    };

    console.log(data);

    if (!email || !password) {
      setError("Please fill all the fields.");
      return;
    }

    // perform custom password checks
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/\d/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!photoUrl) {
      setError("Please enter your profile photo url");
      return;
    }
    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        setError("");
        setSuccess(true);
        action.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("The email address you entered is already in use.");
          setSuccess(false);
        }
      });
  };

  const handleSignInWithGmail = async () => {
    try {
      await signInWithGmail();

      setSuccess(true);
      // Do something after successful sign-in
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="mb-4 text-2xl">Register</h1>
      <form onSubmit={handleSubmit} className="w-full mx-auto max-w-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">Registration successful!</p>
        )}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoUrl" className="block mb-1">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            placeholder="Enter photo URL"
            value={photoUrl}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Register
        </button>
        <button
          type="button"
          className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
          onClick={handleSignInWithGmail}
        >
          Sign in with Gmail
        </button>

        <p className="mt-3 mb-0 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
