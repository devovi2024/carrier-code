import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Sparkles, Target, Award, Globe, Zap, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const stats = [
    { value: "10,000+", label: "Success Stories", color: "from-amber-500 to-orange-500" },
    { value: "2,500+", label: "Jobs", color: "from-emerald-500 to-teal-500" },
    { value: "350+", label: "Top Companies", color: "from-blue-500 to-cyan-500" },
    { value: "94%", label: "Success Rate", color: "from-purple-500 to-pink-500" },
  ];

  const floatingElements = [
    { top: "20%", left: "-20px", delay: 0, color: "from-amber-400 to-orange-400" },
    { top: "40%", right: "-20px", delay: 0.5, color: "from-purple-400 to-pink-400" },
    { top: "70%", left: "-15px", delay: 1, color: "from-blue-400 to-cyan-400" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-20 pb-4 px-4 md:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-to-r from-amber-200/20 to-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-l from-amber-200/20 to-orange-200/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 border-2 border-amber-400/20 rounded-full" />
          <div className="absolute inset-8 border-2 border-orange-400/15 rounded-full" />
          <div className="absolute inset-16 border-2 border-amber-500/10 rounded-full" />
        </motion.div>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#C47A2C_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
            <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="tracking-[0.3em] text-xs uppercase text-amber-700/80 font-medium mb-4">
            Career Platform
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2F12] via-[#8C3B00] to-[#C47A2C]">Elevate Your Career</span>
            <br />
            <span className="text-amber-800">With Elite Opportunities</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-xl text-amber-700/80 max-w-3xl mx-auto mb-12">
            Where exceptional talent meets employers. Experience recruitment redefined.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-b from-white to-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 p-6 shadow-lg shadow-amber-100/30">
                    <div className="text-center">
                      <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.value}</p>
                      <p className="text-sm text-amber-700/80 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="mt-24 text-center">
              <div className="inline-flex items-center justify-center gap-6 px-8 py-6 bg-gradient-to-r from-white to-amber-50/50 rounded-2xl border border-amber-200/30 backdrop-blur-sm shadow-xl shadow-amber-200/30">
                <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
                <div>
                  <p className="text-lg font-bold text-[#6B2F12]">Ready to elevate your career?</p>
                  <p className="text-amber-700/80">Join thousands of professionals who found their dream jobs</p>
                </div>
                <Link to="/register">
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300">
                    Get Started Free
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="relative">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-200/50">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 z-10" />
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="workspace" className="w-full h-[500px] object-cover" />

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-6 right-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50" />
                  <div className="relative bg-gradient-to-b from-white to-amber-50/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl shadow-amber-200/50 border border-amber-200/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#6B2F12] text-lg">4.8 / 5</p>
                        <p className="text-xs text-amber-700/80">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-6 left-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-40" />
                  <div className="relative bg-gradient-to-b from-white to-emerald-50/95 backdrop-blur-sm rounded-xl p-4 shadow-xl shadow-emerald-200/30 border border-emerald-200/50">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="font-bold text-emerald-800">24h Average</p>
                        <p className="text-xs text-emerald-700/80">Response Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {floatingElements.map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: el.delay }}
                  className={`absolute w-14 h-14 rounded-full bg-gradient-to-br ${el.color} opacity-80 shadow-lg backdrop-blur-sm border border-white/30`}
                  style={{ top: el.top, left: el.left, right: el.right }}
                />
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-8 bg-gradient-to-b from-white to-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 p-6 shadow-xl shadow-amber-100/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">O</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-amber-800 italic mb-2">"CareerCode transformed career search opportunities with companies."</p>
                  <p className="text-sm font-medium text-[#6B2F12]">— Arfan Ovi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
