import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Home, Briefcase, Users, Sparkles, LogOut, UserCircle, Bell, X } from "lucide-react";
import { AuthContext } from "../../context/authContext/auth-contex";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/sign");
        setIsMenuOpen(false);
      })
      .catch((err) => toast.error(err.message));
  };

  // Job Portal এর জন্য Nav Items
  const navItems = [
    { path: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/jobs", label: "Find Jobs", icon: <Briefcase className="w-5 h-5" /> },
    { path: "/companies", label: "Companies", icon: <Users className="w-5 h-5" /> },
    { path: "/career-advice", label: "Career Tips", icon: <Sparkles className="w-5 h-5" /> },
  ];

  // User-specific nav items
  const userNavItems = user ? [
    { path: "/dashboard", label: "Dashboard", icon: <Briefcase className="w-5 h-5" /> },
    { path: "/myApplications", label: "My Applications", icon: <Sparkles className="w-5 h-5" /> },
    { path: "/profile", label: "My Profile", icon: <UserCircle className="w-5 h-5" /> },
  ] : [];

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50 border-b">
      {/* Logo and Brand */}
      <div className="navbar-start">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carrier Code
            </span>
            <div className="text-xs text-gray-500">Career Success</div>
          </div>
        </NavLink>
      </div>

      {/* Right Side - Menu Button and User Actions */}
      <div className="navbar-end flex items-center gap-3">
        {/* Notification Bell (only for logged in users) */}
        {user && (
          <button className="btn btn-ghost btn-circle relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
        )}

        {/* Get Started Button (for non-logged in users) */}
        {!user && (
          <NavLink 
            to="/register" 
            className="btn btn-primary btn-sm hidden sm:flex gap-1"
            onClick={() => setIsMenuOpen(false)}
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden xs:inline">Get Started</span>
          </NavLink>
        )}

        {/* User Avatar (for logged in users) */}
        {user && (
          <button className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-semibold">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </button>
        )}

        {/* Menu Button */}
        <button 
          className="btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-base-100 shadow-2xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Carrier Code</div>
                  <div className="text-xs text-gray-500">Job Portal</div>
                </div>
              </div>
              <button 
                className="btn btn-ghost btn-circle"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Info Section */}
            {user && (
              <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-lg font-bold">
                        {user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">My Account</div>
                    <div className="text-sm text-gray-600 truncate">{user.email}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Navigation */}
            <div className="p-4">
              <div className="space-y-1">
                <div className="text-xs uppercase text-gray-500 font-semibold px-2 py-2">
                  Main Menu
                </div>
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-lg ${isActive 
                        ? 'bg-primary/10 text-primary font-semibold' 
                        : 'hover:bg-gray-100'
                      }`
                    }
                  >
                    <div className={`${({ isActive }) => isActive ? 'text-primary' : 'text-gray-600'}`}>
                      {item.icon}
                    </div>
                    <span className="text-base">{item.label}</span>
                  </NavLink>
                ))}
              </div>

              {/* User Specific Menu */}
              {userNavItems.length > 0 && (
                <div className="mt-6 space-y-1">
                  <div className="text-xs uppercase text-gray-500 font-semibold px-2 py-2">
                    My Account
                  </div>
                  {userNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg ${isActive 
                          ? 'bg-primary/10 text-primary font-semibold' 
                          : 'hover:bg-gray-100'
                        }`
                      }
                    >
                      <div className={`${({ isActive }) => isActive ? 'text-primary' : 'text-gray-600'}`}>
                        {item.icon}
                      </div>
                      <span className="text-base">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Authentication Buttons */}
            <div className="p-4 border-t mt-4">
              {user ? (
                <div className="space-y-3">
                  <button
                    onClick={handleLogout}
                    className="btn btn-error w-full gap-2"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <NavLink
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-outline w-full"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-primary w-full gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get Started Free
                  </NavLink>
                </div>
              )}
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t">
              <div className="text-xs text-gray-500 text-center">
                © {new Date().getFullYear()} Carrier Code
              </div>
              <div className="flex justify-center gap-4 mt-3">
                <a href="/privacy" className="text-xs text-gray-500 hover:text-primary">
                  Privacy
                </a>
                <a href="/terms" className="text-xs text-gray-500 hover:text-primary">
                  Terms
                </a>
                <a href="/contact" className="text-xs text-gray-500 hover:text-primary">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;