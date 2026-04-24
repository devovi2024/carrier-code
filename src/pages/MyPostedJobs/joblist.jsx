import React, { use } from "react";
import { Link } from "react-router-dom";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-200 to-orange-100 py-10 px-4 md:px-10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-amber-900 mb-6">
          My Jobs:{" "}
          <span className="text-orange-600">{jobs?.length || 0}</span>
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-amber-300 bg-amber-50">

          <table className="min-w-full">

            <thead className="bg-gradient-to-r from-amber-300 to-orange-300 text-amber-900">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Job Title</th>
                <th className="px-6 py-3 text-left">Applications</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>

              {jobs?.map((job, index) => (
                <tr
                  key={job._id}
                  className="border-b border-amber-200 hover:bg-amber-100 transition"
                >

                  <td className="px-6 py-4 text-amber-800">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium text-amber-800">
                    {job.title}
                  </td>

                  <td className="px-6 py-4 text-amber-800">
                    {job.application_count || 0}
                  </td>

                  <td className="px-6 py-4">

                    <Link
                      to={`/applications/${job._id}`}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl"
                    >
                      View
                    </Link>

                  </td>

                </tr>
              ))}

              {/* EMPTY STATE */}
              {jobs?.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-8 text-amber-700"
                  >
                    No jobs found
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default JobList;