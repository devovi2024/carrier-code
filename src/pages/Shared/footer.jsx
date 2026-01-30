import React from "react";
import { 
  Twitter, 
  Youtube, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Sparkles, 
  Crown,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Shield,
  Heart,
  ArrowUp,
  Send,
  BadgeCheck,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: " Recruitment", description: " talent matching", icon: <Crown className="w-4 h-4" /> },
    { name: "Career Coaching", description: "1-on-1 expert guidance", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Resume Review", description: "Professional optimization", icon: <Award className="w-4 h-4" /> },
    { name: "Interview Prep", description: "Master your interviews", icon: <BadgeCheck className="w-4 h-4" /> },
  ];

  const company = [
    { name: "About us", href: "/about", badge: "Our Story" },
    { name: "Contact", href: "/contact", badge: "Get in Touch" },
    { name: "Careers", href: "/careers", badge: "Join Us" },
    { name: "Press kit", href: "/press", badge: "Media" },
    { name: "Privacy Policy", href: "/privacy", badge: "Secure" },
    { name: "Terms of Service", href: "/terms", badge: "Legal" },
  ];

  const resources = [
    { name: "Blog & Insights", href: "/blog", count: "24+" },
    { name: "Success Stories", href: "/success", count: "500+" },
    { name: "Webinars", href: "/webinars", count: "Monthly" },
    { name: "Salary Guide", href: "/salary", count: "2024" },
    { name: "Market Trends", href: "/trends", count: "Live" },
    { name: "FAQ", href: "/faq", count: "Help" },
  ];

  

  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-amber-100 to-orange-100 border-t border-amber-200/40
pt-16 pb-8 overflow-hidden">
      
      {/*  Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-amber-200/10 to-orange-200/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-amber-200/10 to-orange-200/5 rounded-full blur-3xl" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#C47A2C_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-8">
  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur opacity-30" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-200/50">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#6B2F12] via-[#8C3B00] to-[#C47A2C] bg-clip-text text-transparent">
                    CareerCode
                  </h2>
                  <p className="text-sm text-amber-700/80 font-medium"> Career Platform</p>
                </div>
              </div>
              <p className="text-amber-700/80 mb-6 max-w-md">
                Connecting  talent with opportunities worldwide. 
                Our platform is designed for professionals who demand excellence.
              </p>
              
              {/*  Newsletter */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl border border-amber-200/30 p-4 mb-6">
                <h3 className="text-sm font-bold text-[#6B2F12] mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                   Insights
                </h3>
                <p className="text-xs text-amber-700/80 mb-3">Get exclusive career opportunities and insights</p>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 pl-12 pr-10 bg-white/90 rounded-lg border border-amber-200/50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200/50 focus:outline-none text-sm text-amber-800 placeholder-amber-500/60"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-500" />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-amber-700/80">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+8801766915101</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-amber-700/80">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>info@careercode.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-amber-700/80">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Mirpur10, Dhaka-1216, BD</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-[#6B2F12] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
               Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to="#"
                    className="group flex items-start gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 transition-all duration-300"
                  >
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                      {service.icon}
                    </div>
                    <div>
                      <p className="font-medium text-amber-800 group-hover:text-[#6B2F12] transition-colors">
                        {service.name}
                      </p>
                      <p className="text-xs text-amber-700/70">{service.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-[#6B2F12] mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 transition-all duration-300"
                  >
                    <span className="text-amber-800 group-hover:text-[#6B2F12] transition-colors">
                      {item.name}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded-full group-hover:bg-gradient-to-r group-hover:from-amber-100 group-hover:to-orange-100 transition-all duration-300">
                      {item.badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold text-[#6B2F12] mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 transition-all duration-300"
                  >
                    <span className="text-amber-800 group-hover:text-[#6B2F12] transition-colors">
                      {resource.name}
                    </span>
                    <span className="text-xs font-medium text-amber-700/70 group-hover:text-amber-600">
                      {resource.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

   

        {/* Bottom Bar */}
        <div className="border-t border-amber-200/50 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-amber-700/80">
              <p>© {new Date().getFullYear()} CareerCode. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-sm text-amber-800 focus:outline-none">
                  <option>English</option>
                  <option>বাংলা</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-amber-700/80">
              <Link to="/privacy" className="hover:text-[#6B2F12] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#6B2F12] transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-[#6B2F12] transition-colors">
                Cookie Policy
              </Link>
              <div className="flex items-center gap-1 text-amber-600">
                <Heart className="w-4 h-4" />
                <span>Made with passion</span>
              </div>
            </div>
          </div>

        {/* Back to Top */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;