import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Bookmark, MapPin, Clock } from "lucide-react";

const JobCard = ({ job }) => {
  const { _id, title, company, location, company_logo, jobType } = job;

  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative">

      {/* glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition" />

      <div className="relative bg-white rounded-2xl border border-amber-200 shadow-lg hover:-translate-y-1 transition overflow-hidden">

        <div className="p-5">

          {/* HEADER */}
          <div className="flex items-start justify-between mb-4">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* LOGO */}
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border flex items-center justify-center">
                {company_logo ? (
                  <img
                    src={company_logo}
                    alt={company}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-bold text-amber-700 text-xl">
                    {company?.charAt(0)}
                  </span>
                )}
              </div>

              {/* INFO */}
              <div>
                <h3 className="font-bold text-[#6B2F12] line-clamp-1">
                  {title}
                </h3>
                <p className="text-sm text-amber-700">{company}</p>
              </div>
            </div>

            {/* SAVE BUTTON */}
            <button
              onClick={() => setSaved(!saved)}
              className="p-2 rounded-full border hover:border-amber-400 transition"
            >
              <Bookmark
                className={
                  saved
                    ? "text-amber-500 fill-amber-500"
                    : "text-amber-600"
                }
              />
            </button>
          </div>

          {/* META */}
          <div className="flex gap-2 mb-4">

            <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 rounded-lg border">
              <MapPin size={14} className="text-amber-600" />
              <span className="text-xs">{location}</span>
            </div>

            <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 rounded-lg border">
              <Clock size={14} className="text-amber-600" />
              <span className="text-xs">{jobType}</span>
            </div>

          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between border-t pt-4">

            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border">
              Quick Apply
            </span>

            <Link to={`/jobs/${_id}`}>
              <button className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition">

                Explore
                <ArrowUpRight size={16} />

              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JobCard;