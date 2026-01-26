import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Home, Package, Users, Sparkles, LogOut } from "lucide-react";
import { AuthContext } from "../../context/authContext/auth-contex";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/sign");
      })
      .catch((err) => toast.error(err.message));
  };

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { path: "/products", label: "Products", icon: <Package className="w-4 h-4" /> },
    { path: "/about", label: "About", icon: <Users className="w-4 h-4" /> },
    { path: "/features", label: "Features", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold flex items-center gap-2" : "flex items-center gap-2"
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              </li>
            ))}
            {!user && (
              <li>
                <NavLink to="/register" className="flex items-center gap-2 text-primary font-semibold">
                  Get Started
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <button onClick={handleLogout} className="flex items-center gap-2 text-error font-semibold">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-2 ml-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">BrandName</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 ${isActive ? "text-primary font-semibold" : ""}`
                }
              >
                {item.icon} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex gap-2">
        {!user && (
          <NavLink to="/register" className="btn btn-primary">
            Get Started
          </NavLink>
        )}
        {user && (
          <>
            <span className="mr-2 font-medium text-base-content">{user.email}</span>
            <button onClick={handleLogout} className="btn btn-error btn-outline flex items-center gap-1">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
