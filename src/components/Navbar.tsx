import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User, LogIn, UserPlus, Menu, X, Mail, Lock, Eye, EyeOff, LogOut
} from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const dummyUser = { name: registerForm.name };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    
    setUser(dummyUser);
    toast.success('Login successful!');
    setShowLoginModal(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    const newUser = { name: registerForm.name };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    toast.success('Registration successful!');
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?w=32&h=32&fit=crop&auto=format"
                alt="Logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-3 text-2xl font-bold text-blue-600 tracking-wide">
                Envira
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-10">
              <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 text-sm font-medium">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Contact Us</Link>
              <Link to="/vanasaya" className="text-gray-700 hover:text-blue-600 text-sm font-medium">VanaSaya</Link>
            </div>

            {/* Auth / User Info */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {user ? (
                <>
                  <span className="text-gray-800 font-medium">Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
                  >
                    <LogOut className="inline-block w-4 h-4 mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
                  >
                    <LogIn className="inline-block w-4 h-4 mr-1" />
                    Login
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
                  >
                    <UserPlus className="inline-block w-4 h-4 mr-1" />
                    Register
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 p-2 hover:bg-gray-200 rounded-md"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 space-y-3 px-4">
            <Link to="/" className="block text-gray-700 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 text-base font-medium" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="block text-gray-700 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>

            {user ? (
              <>
                <div className="text-gray-800 font-medium">Welcome, {user.name}</div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold"
                >
                  <LogOut className="inline-block w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-semibold"
                >
                  <LogIn className="inline-block w-4 h-4 mr-2" />
                  Login
                </button>
                <button
                  onClick={() => {
                    setShowRegisterModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold"
                >
                  <UserPlus className="inline-block w-4 h-4 mr-2" />
                  Register
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Login Modal */}
{showLoginModal && (
  <Modal title="Login" onClose={() => setShowLoginModal(false)}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!loginForm.email || !loginForm.password) {
          alert("Please fill in both email and password.");
          return;
        }
        handleLogin(e);
      }}
      className="space-y-6"
    >
      <Input
        icon={<Mail className="text-gray-400" size={20} />}
        type="email"
        placeholder="Email"
        value={loginForm.email}
        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
      />
      <Input
        icon={<Lock className="text-gray-400" size={20} />}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={loginForm.password}
        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
        toggleIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
      >
        Login
      </button>
    </form>
  </Modal>
)}

{/* Register Modal */}
{showRegisterModal && (
  <Modal title="Register" onClose={() => setShowRegisterModal(false)}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
          alert("Please fill in all fields.");
          return;
        }
        if (registerForm.password !== registerForm.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
        handleRegister(e);
      }}
      className="space-y-6"
    >
      <Input
        icon={<User className="text-gray-400" size={20} />}
        type="text"
        placeholder="Full Name"
        value={registerForm.name}
        onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
      />
      <Input
        icon={<Mail className="text-gray-400" size={20} />}
        type="email"
        placeholder="Email"
        value={registerForm.email}
        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
      />
      <Input
        icon={<Lock className="text-gray-400" size={20} />}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={registerForm.password}
        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
        toggleIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
      />
      <Input
        icon={<Lock className="text-gray-400" size={20} />}
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={registerForm.confirmPassword}
        onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
      >
        Register
      </button>
    </form>
  </Modal>
)}

    </>
  );
};

// Modal Component
const Modal = ({ children, title, onClose }: { children: React.ReactNode; title: string; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

// Input Component
const Input = ({
  icon, toggleIcon, ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
  toggleIcon?: React.ReactNode;
}) => (
  <div className="relative">
    <div className="absolute left-3 top-2.5">{icon}</div>
    <input
      {...props}
      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    {toggleIcon && <div className="absolute right-3 top-2.5">{toggleIcon}</div>}
  </div>
);

export default Navbar;
