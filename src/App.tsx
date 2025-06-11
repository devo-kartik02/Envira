import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  Menu, X, LayoutDashboard, Map, UserPlus, Heart, Lock, Phone
} from 'lucide-react';

import Dashboard from './components/Dashboard';
import PollutionMap from './components/PollutionMap';
import CitizenReport from './components/CitizenReport';
import HealthTips from './components/HealthTips';
import AdminLogin from './components/AdminLogin';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VanaSaya from "./components/VanaSaya";
import TreeInfoPage from "./components/TreeInfoPage";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Pollution Map', icon: Map, path: '/map' },
    { name: 'Report Incident', icon: UserPlus, path: '/report' },
    { name: 'Health Tips', icon: Heart, path: '/health' },
    { name: 'Profile', icon: Lock, path: '/profile' },
    { name: 'Admin Login', icon: Lock, path: '/admin' },
    { name: 'Contact Us', icon: Phone, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideSidebar(true);
      } else {
        setHideSidebar(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-20 right-4 z-50 p-2 rounded-lg bg-white shadow-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-16 left-0 transform transition-transform duration-300 ease-in-out z-30 w-64 bg-white shadow-xl
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${hideSidebar ? 'lg:-translate-x-64' : 'lg:translate-x-0'}`}
          style={{ height: 'calc(100vh - 4rem)', overflowY: 'auto' }} // top-16 = 4rem = height of Navbar
        >
          <nav className="mt-4">
            <div className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:bg-gray-100 group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
                >
                  <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-gray-400" />
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex-grow pt-16">
          <main className="min-h-screen py-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/map" element={<PollutionMap />} />
              <Route path="/report" element={<CitizenReport />} />
              <Route path="/health" element={<HealthTips />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/vanaSaya" element={<VanaSaya />} />
              <Route path="/treeinfopage" element={<TreeInfoPage tree={{
                name: "",
                description: "",
                benefits: [],
                price: 0,
                images: []
              }} goBack={function (): void {
                throw new Error("Function not implemented.");
              } } />} />
            </Routes>
          </main>
        </div>

        {/* Persistent Components */}
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
