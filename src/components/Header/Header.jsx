import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

function Header() {
  const [success, setSuccess] = useState(false);
  const location = useLocation();

  const { user, logOut } = useContext(AuthContext);
  const logoutHandler = () => {
    logOut()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="ml-3 normal-case text-xl">
          <img
            src="https://i.ibb.co/XSBptSt/Black-White-Minimalist-Business-Logo-removebg-preview-3.png"
            alt=""
            style={{ height: "50px", width: "200px" }}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toys</Link>
          </li>

          {user ? (
            <li>
              <Link to="/myToys">My Toys</Link>
            </li>
          ) : null}

          {user ? (
            <li>
              <Link to="/addToy">Add A Toy</Link>
            </li>
          ) : null}

          <li>
            <Link to="/blog">Blogs</Link>
          </li>

          <li>
            {user ? (
              <Link onClick={logoutHandler}>Logout</Link>
            ) : (
              <Link
                to="/login"
                className={location.pathname === "/login" ? "active" : ""}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div
            className="profile"
            style={{
              padding: "5px 6px",
              background: "#e8e8e7",
              borderRadius: "50px",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.photoURL && (
              <img
                width="30"
                height="30"
                style={{ borderRadius: "50%" }}
                src={user.photoURL}
                alt=""
              />
            )}
            {user.displayName && (
              <p className="mb-0 ms-1">{user.displayName}</p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
