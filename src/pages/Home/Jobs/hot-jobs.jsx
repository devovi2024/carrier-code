import React, { useState } from "react";
import PremiumJobCard from "../../Shared/job-card";
import { Filter, Sparkles, TrendingUp, X } from "lucide-react";

const HotJobs = ({ jobs }) => {
  const [filteredJobs] = useState(jobs);





  return (
    <section className="relative font-sans bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 px-4 md:px-8 overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-amber-200/20 to-orange-200/10 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#C47A2C_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-4">
            {/* Premium decorative element */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-px bg-gradient-to-r from-amber-600 to-orange-600" />
              <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
              <div className="w-10 h-px bg-gradient-to-r from-orange-600 to-amber-600" />
            </div>
            
            <p className="tracking-[0.3em] text-xs uppercase text-amber-700/80 font-medium">
              Exclusive Opportunities
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B2F12] via-[#8C3B00] to-[#C47A2C] leading-tight">
              Hot Jobs...
              <span className="block text-lg text-amber-600 mt-2">Curated for Excellence</span>
            </h1>
          </div>

          {/* Creative Stats Badge */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-2xl shadow-amber-200/50 border border-amber-200/50 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-amber-700/80">Active Opportunities</p>
                  <p className="text-3xl font-bold text-[#6B2F12]">{jobs.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJobs.map((job) => (
            <div key={job._id} className="group relative">
              {/* Hover effect container */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              <PremiumJobCard job={job} />
            </div>
          ))}
        </div>


      </div>

      <div className="relative max-w-7xl mx-auto mt-16 text-center">
        <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-amber-50/50 rounded-2xl border border-amber-200/30 backdrop-blur-sm shadow-xl shadow-amber-200/30">
          <span className="text-lg font-medium text-amber-800">
            Explore all  opportunities
          </span>
          <div className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent" />
          <button className="group flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-amber-200 transition-all duration-300">
            View All
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotJobs;