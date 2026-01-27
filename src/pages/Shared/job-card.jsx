import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Calendar, Banknote, ArrowRight } from 'lucide-react';

const JobCard = ({ job }) => {
  const {
    title,
    company,
    _id,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company_logo
  } = job;

  return (
    <div className="card bg-base-100 border border-base-200 hover:shadow-xl transition-all duration-300">
      <div className="card-body space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 rounded-lg object-contain border"
          />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin size={16} /> {location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase size={16} /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {applicationDeadline}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium">
          <Banknote size={18} className="text-green-600" />
          ৳{salaryRange.min.toLocaleString()} – ৳{salaryRange.max.toLocaleString()}
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary btn-sm gap-2">
              Apply <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
