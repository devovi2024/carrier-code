// Banner.jsx
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';

const Banner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">
                🚀 10,000+ Successful Placements
              </span>
            </motion.div>

            {/* Main Title with Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Unlock </span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Better
                </span>
                <span className="block">
                  <span className="text-gray-900">Career </span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                    Opportunities
                  </span>
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-600">
                Where Talent Meets <span className="font-semibold text-blue-600">Dream Companies</span>
              </p>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed max-w-2xl"
            >
              <span className="font-semibold text-gray-900">Carrier Code</span> connects 
              <span className="text-blue-600 font-medium"> top talent </span>with 
              <span className="text-purple-600 font-medium"> industry leaders</span>. 
              Discover <span className="text-green-600 font-medium">personalized job matches</span>, 
              career growth resources, and a community that supports your professional journey.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Job Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <button className="btn btn-primary btn-lg gap-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Jobs
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="btn btn-outline btn-lg gap-3 px-8 rounded-full border-2 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
                <Users className="w-5 h-5" />
                Get Started
              </button>
            </motion.div>

          </motion.div>

          {/* Images Section - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            
            {/* Main Background Image */}
            <div className="relative z-10">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern office workspace"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                    <div className="flex text-yellow-400 mt-1">
                      {'★'.repeat(5)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Remote</div>
                  <div className="text-sm text-gray-600">Jobs Available</div>
                </div>
              </div>
            </motion.div>

            {/* Background Pattern */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-transparent rounded-full blur-3xl opacity-30"></div>

          </motion.div>

        </div>


      </div>
    </div>
  );
};

export default Banner;
