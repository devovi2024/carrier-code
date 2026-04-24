import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Crown,
  Send,
  Heart,
  ArrowUp,
  Globe,
  TrendingUp,
  Award,
  BadgeCheck,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const services = [
    { name: "Recruitment", desc: "Talent matching", icon: <Crown className="w-4 h-4" /> },
    { name: "Career Coaching", desc: "1-on-1 guidance", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Resume Review", desc: "Professional CV help", icon: <Award className="w-4 h-4" /> },
    { name: "Interview Prep", desc: "Skill improvement", icon: <BadgeCheck className="w-4 h-4" /> },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Success Stories", href: "/success" },
    { name: "Webinars", href: "/webinars" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-amber-50 border-t border-amber-200 pt-12 pb-6 relative">

      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="text-amber-600" />
            <h2 className="text-xl font-bold">CareerCode</h2>
          </div>

          <p className="text-sm text-amber-700 mb-4">
            A simple platform to connect talent with opportunities.
          </p>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-lg text-sm"
            />
            <button className="p-2 bg-amber-500 text-white rounded-lg">
              <Send size={16} />
            </button>
          </form>

          {/* Contact */}
          <div className="mt-4 space-y-1 text-sm text-amber-700">
            <p className="flex items-center gap-2"><Phone size={14} /> +8801766915101</p>
            <p className="flex items-center gap-2"><Mail size={14} /> info@careercode.com</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.name} className="flex gap-2 items-start">
                {s.icon}
                <div>
                  <p>{s.name}</p>
                  <p className="text-xs text-gray-500">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((c) => (
              <li key={c.name}>
                <Link to={c.href}>{c.name}</Link>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-5 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            {resources.map((r) => (
              <li key={r.name}>
                <Link to={r.href}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-amber-700 px-4">
        <p>© {new Date().getFullYear()} CareerCode</p>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <span className="flex items-center gap-1">
            <Heart size={14} /> Made with love
          </span>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-amber-500 text-white p-3 rounded-full shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;