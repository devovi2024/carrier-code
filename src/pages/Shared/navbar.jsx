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

  // MAIN LINKS
  const mainLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    !user && { to: "/register", label: "Register", icon: <Sparkles className="w-4 h-4" /> },
    !user && { to: "/signin", label: "Sign In", icon: <Sparkles className="w-4 h-4" /> },
    user && { to: "/addjob", label: "Add Job", icon: <Briefcase className="w-4 h-4" /> },
    user && { to: "/myPostedJobs", label: "My Jobs", icon: <Briefcase className="w-4 h-4" /> },
  ].filter(Boolean);

  // PROFILE LINKS
  const userLinks = [
    { to: "/myApplications", label: "My Applications", icon: <Sparkles className="w-4 h-4" /> },
    user && { to: "/applications", label: "View Applications", icon: <Briefcase className="w-4 h-4" /> },
  ].filter(Boolean);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/?search=${encodeURIComponent(search)}`);
    setSearch("");
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-amber-50 border-b border-amber-200 shadow-sm">

      {/* TOP BAR */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <Crown className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-amber-900">CareerCode</span>
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-2">
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-lg text-sm text-amber-900 hover:bg-amber-100 flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* USER */}
          {user ? (
            <div className="hidden md:flex items-center gap-3">

              {/* NOTIFICATION */}
              <button className="text-amber-700">
                <Bell className="w-5 h-5" />
              </button>

              {/* PROFILE */}
              <div className="relative">

                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-100"
                >
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                    {user.email?.[0]?.toUpperCase()}
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">

                    {userLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 hover:bg-amber-50"
                      >
                        {link.icon}
                        {link.label}
                      </NavLink>
                    ))}

                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 border-t"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>

                  </div>
                )}

              </div>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <NavLink to="/signin" className="px-3 py-2 text-amber-900">
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="px-3 py-2 bg-amber-500 text-white rounded-lg"
              >
                Get Started
              </NavLink>
            </div>
          )}

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-amber-900"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-amber-50 p-4 space-y-3">

          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-amber-100"
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}

          {/* SEARCH */}
          <form onSubmit={handleSearch}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="w-full p-2 border rounded-lg"
            />
          </form>

          {/* AUTH */}
          {user ? (
            <button onClick={logout} className="w-full text-red-600">
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <NavLink to="/signin">Sign In</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;