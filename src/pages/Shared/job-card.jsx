import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Bookmark, Clock, MapPin } from "lucide-react";

const JobCard = ({ job }) => {
  const { _id, title, company, location, company_logo, jobType } = job;
  const [saved, setSaved] = useState(false);
  const [viewed, setViewed] = useState(false);



  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-300 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
      
      <div className="relative bg-gradient-to-b from-white to-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg shadow-amber-100/30 hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-60" />
                <div className="relative w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
                  {company_logo ? (
                    <img
                      src={company_logo}
                      alt={company}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      {company?.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-[#6B2F12] group-hover:text-[#8C3B00] transition-colors line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm text-amber-800/80 font-medium mt-1">{company}</p>
              </div>
            </div>

            <button
              onClick={() => setSaved(!saved)}
              className="relative p-2 rounded-full bg-white/80 backdrop-blur-sm border border-amber-200/50 hover:border-amber-300 transition-all duration-300 group/save"
            >
              <Bookmark className={`w-5 h-5 transition-all duration-300 ${
                saved ? "fill-amber-500 text-amber-500" : "text-amber-600 group-hover/save:text-amber-500"
              }`} />
              {!viewed && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping" />
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200/50">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-medium text-amber-800">{location}</span>
            </div>
            
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200/50">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-medium text-amber-800">{jobType}</span>
            </div>
      
          </div>



          <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800">Quick Apply</span>
              </div>
            </div>
            
            <Link to={`/jobs/${_id}`} onClick={() => setViewed(true)}>
              <button className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300">
                <span>Explore</span>
                <div className="relative">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/btn:scale-150 transition-transform duration-300" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;