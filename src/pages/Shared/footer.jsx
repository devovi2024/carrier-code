import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const services = [
    "Recruitment",
    "Career Coaching",
    "Resume Review",
    "Interview Prep",
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
    { name: "FAQ", href: "/faq" },
    { name: "Salary Guide", href: "/salary" },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-amber-100 border-t border-amber-200 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-800">CareerCode</h2>
          <p className="text-sm text-amber-700 mt-2">
            Find your dream job and grow your career with us.
          </p>

          <div className="mt-4 space-y-2 text-sm text-amber-700">
            <p className="flex items-center gap-2"><Phone size={16}/> +880 1766 915101</p>
            <p className="flex items-center gap-2"><Mail size={16}/> info@careercode.com</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-amber-800 mb-3">Services</h3>
          <ul className="space-y-2 text-amber-700 text-sm">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-amber-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((item) => (
              <li key={item.name}>
                <Link className="text-amber-700 hover:text-amber-900" to={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-amber-800 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            {resources.map((item) => (
              <li key={item.name}>
                <Link className="text-amber-700 hover:text-amber-900" to={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-amber-200 mt-10 pt-4 text-center text-sm text-amber-700">
        <p>© {new Date().getFullYear()} CareerCode. All rights reserved.</p>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;