import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Building,
  Briefcase,
  CheckCircle,
  Users,
  Mail,
  ArrowLeft,
  Bookmark,
  Download,
} from "lucide-react";

const JobDetails = () => {
  const job = useLoaderData();
  const [saved, setSaved] = useState(false);

  // salary format
  const formatSalary = (min, max) => {
    const formatter = new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    });

    return `${formatter.format(min)} - ${formatter.format(max)}`;
  };

  // deadline format
  const formatDeadline = (date) => {
    const deadline = new Date(date);
    const today = new Date();
    const diffDays = Math.ceil(
      (deadline - today) / (1000 * 60 * 60 * 24)
    );

    if (diffDays < 0) return { text: "Expired", color: "text-red-600" };
    if (diffDays === 0) return { text: "Today", color: "text-amber-600" };
    if (diffDays <= 3)
      return { text: `${diffDays} days left`, color: "text-amber-600" };

    return {
      text: deadline.toLocaleDateString("en-BD"),
      color: "text-gray-600",
    };
  };

  const deadlineInfo = formatDeadline(job.applicationDeadline);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">

          {/* back */}
          <Link
            to="/jobs"
            className="flex items-center gap-2 text-gray-600"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          {/* actions */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setSaved(!saved)}
              className="text-gray-500 hover:text-amber-600"
            >
              <Bookmark className={saved ? "fill-amber-500" : ""} />
            </button>

            <Link
              to={`/jobApply/${job._id}`}
              className="px-5 py-2 bg-amber-500 text-white rounded-lg"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-6xl mx-auto p-4 grid lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* TOP CARD */}
          <div className="bg-white p-6 rounded-xl shadow">

            <div className="flex gap-4">

              <img
                src={job.company_logo}
                alt=""
                className="w-14 h-14 rounded border object-contain"
              />

              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>

                <div className="flex gap-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Building size={14} /> {job.company}
                  </span>

                  <span className="flex items-center gap-1">
                    <Briefcase size={14} /> {job.category}
                  </span>
                </div>

                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {job.jobType}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-6 text-sm">
              <div>
                <p className="text-gray-500">Deadline</p>
                <p className={deadlineInfo.color}>{deadlineInfo.text}</p>
              </div>

              <div>
                <p className="text-gray-500">Type</p>
                <p>{job.jobType}</p>
              </div>

              <div>
                <p className="text-gray-500">Category</p>
                <p>{job.category}</p>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-3">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>

            {/* requirements */}
            <h3 className="mt-5 font-semibold flex items-center gap-2">
              <CheckCircle size={16} /> Requirements
            </h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {job.requirements?.map((r, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-50 border rounded text-sm"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* responsibilities */}
            <h3 className="mt-5 font-semibold flex items-center gap-2">
              <Users size={16} /> Responsibilities
            </h3>

            <ul className="list-disc ml-5 text-gray-700 mt-2">
              {job.responsibilities?.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* HR */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">HR Contact</h3>

            <p>{job.hr_name}</p>

            <a
              href={`mailto:${job.hr_email}`}
              className="text-blue-600 text-sm flex items-center gap-1 mt-2"
            >
              <Mail size={14} /> {job.hr_email}
            </a>

            <button className="w-full mt-4 bg-blue-50 text-blue-700 py-2 rounded">
              Contact HR
            </button>
          </div>

          {/* APPLY BOX */}
          <div className="bg-amber-50 p-5 rounded-xl border">
            <p className="text-sm">
              Salary:{" "}
              {formatSalary(
                job.salaryRange.min,
                job.salaryRange.max
              )}
            </p>

            <Link
              to={`/jobApply/${job._id}`}
              className="block mt-4 bg-amber-500 text-white text-center py-2 rounded"
            >
              Apply Now
            </Link>

            <button className="w-full mt-2 border py-2 rounded flex items-center justify-center gap-2">
              <Download size={14} /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;