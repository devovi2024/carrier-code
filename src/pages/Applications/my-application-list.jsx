import { useState, use } from "react";
import { Link } from "react-router-dom";
import {
  Building,
  FileText,
  Sparkles,
  Download,
  ChevronRight,
} from "lucide-react";

const MyApplicationList = ({ promise }) => {
  const applications = use(promise);
  const [filter] = useState("all");

  if (!applications || applications.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl">
        <div className="text-center max-w-md px-8 py-12">
          <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 mb-6">
            <FileText className="w-12 h-12 text-amber-600" />
          </div>

          <h3 className="text-2xl font-bold text-[#6B2F12] mb-3">
            No Applications Yet
          </h3>

          <p className="text-amber-700/80 mb-8">
            Start your journey by applying to premium opportunities.
          </p>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl"
          >
            <Sparkles className="w-4 h-4" />
            Explore Jobs
          </Link>
        </div>
      </div>
    );
  }

  const filteredApplications =
    filter === "all"
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#6B2F12]">
            My Applications
          </h1>
          <p className="text-amber-700/80 mt-2">
            Track and manage your applications
          </p>
        </div>

        {/* List */}
        <div className="bg-white/70 rounded-2xl border border-amber-200 overflow-hidden">

          <div className="divide-y divide-amber-100">
            {filteredApplications.map((app) => (
              <div
                key={app._id}
                className="p-5 hover:bg-amber-50 transition"
              >
                <div className="flex items-center gap-4">

                  {/* Logo */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border">
                    {app.company_logo ? (
                      <img
                        src={app.company_logo}
                        alt={app.company}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span className="font-bold text-amber-700">
                        {app.company?.[0] || "C"}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <Link
                      to={`/jobs/${app.jobId}`}
                      className="font-semibold text-[#6B2F12] hover:underline"
                    >
                      {app.title || "No Title"}
                    </Link>

                    <div className="flex items-center gap-2 text-sm text-amber-700/80">
                      <Building className="w-4 h-4" />
                      {app.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-amber-200 flex justify-between text-sm">
            <span>
              Showing {filteredApplications.length} applications
            </span>

            <button className="flex items-center gap-1 text-amber-600">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-xl"
          >
            Explore Jobs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MyApplicationList;