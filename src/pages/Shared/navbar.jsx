import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Sparkles,
  LogOut,
  Bell,
  Crown,
  ChevronDown,
  Drone,
} from "lucide-react";
import { AuthContext } from "../../context/authContext/auth-contex";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const logout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out");
        navigate("/");
        setOpen(false);
        setProfileOpen(false);
      })
      .catch((err) => toast.error(err.message));
  };

  // Main links visible to all users
  const mainLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    !user && { to: "/register", label: "Register", icon: <Sparkles className="w-4 h-4" /> },
    !user && { to: "/signin", label: "Sign In", icon: <Sparkles className="w-4 h-4" /> },
    user && { to: "/addjob", label: "Add Job", icon: <Drone className="w-4 h-4" /> },
    user && { to: "/myPostedJobs", label: "My Jobs", icon: <Briefcase className="w-4 h-4" /> },
  ].filter(Boolean);

  // Links visible inside user profile dropdown
  const userLinks = [
    { to: "/myApplications", label: "My Applications", icon: <Sparkles className="w-4 h-4" /> },
    user && { to: "/applications", label: "View Applications", icon: <Briefcase className="w-4 h-4" /> },
  ].filter(Boolean);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`);
      setSearch("");
      setOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 via-amber-100 to-yellow-50 border-b border-amber-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-amber-900">CareerCode</span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? "text-amber-800 bg-amber-100"
                      : "text-amber-900 hover:text-amber-800 hover:bg-amber-100"
                  }`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="hidden md:flex items-center gap-3">
                {/* Notification */}
                <button className="p-2 text-amber-700 hover:text-amber-900 relative">
                  <Bell className="w-5 h-5" />
                </button>

                {/* Profile */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-100 text-amber-900"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
                      {user.email?.[0]?.toUpperCase() || "U"}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition ${profileOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-amber-50 rounded-lg shadow-lg border z-50">
                      {userLinks.map((link) => (
                        <NavLink
                          key={link.to}
                          to={link.to}
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-amber-100 text-amber-900"
                        >
                          {link.icon}
                          {link.label}
                        </NavLink>
                      ))}
                      <button
                        onClick={logout}
                        className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 border-t"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <NavLink
                  to="/signin"
                  className="px-4 py-2 text-sm text-amber-900 hover:text-amber-800"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm hover:bg-amber-600"
                >
                  Get Started
                </NavLink>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-amber-900">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-amber-50 border-t border-amber-200">
          <div className="p-4 grid grid-cols-2 gap-2">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="p-4 border rounded-lg text-center text-amber-900 hover:bg-amber-100"
              >
                {link.icon}
                <p>{link.label}</p>
              </NavLink>
            ))}
          </div>

          <div className="p-4 border-t border-amber-200">
            <form onSubmit={handleSearch} className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </form>
          </div>

          <div className="p-4 border-t border-amber-200">
            {user ? (
              <button
                onClick={logout}
                className="w-full py-3 text-red-600 border rounded-lg hover:bg-red-50"
              >
                Logout
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <NavLink
                  to="/signin"
                  onClick={() => setOpen(false)}
                  className="text-amber-900 hover:text-amber-800"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="bg-amber-500 text-white rounded-lg px-3 py-2 hover:bg-amber-600"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
