import React from "react";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "https://carriercode-server.vercel.app";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const [apps, setApps] = React.useState(applications);

  const handleStatusChange = (e, app_id) => {
    const newStatus = e.target.value;

    axios
      .patch(`${BASE_URL}/applications/${app_id}`, {
        status: newStatus,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });

          const updated = apps.map((app) =>
            app._id === app_id ? { ...app, status: newStatus } : app
          );

          setApps(updated);
        }
      })
      .catch((err) => console.error(err));
  };

  const isJobSpecific = Boolean(job_id);

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-amber-100 via-amber-200 to-orange-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
          {isJobSpecific
            ? `Applications for Job: ${job_id}`
            : "All Applications"}
        </h1>
        <p className="text-sm text-amber-700 mb-4">
          Total Applications: {apps.length}
        </p>

        <div className="overflow-x-auto rounded-lg shadow-md border border-amber-300 bg-amber-50">
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-amber-300 to-orange-300 text-amber-900">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">#</th>
                <th className="px-6 py-3 text-left font-semibold">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {apps?.map((application, idx) => (
                <tr
                  key={application._id}
                  className="border-b border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  <td className="px-6 py-3 text-amber-800">{idx + 1}</td>

                  <td className="px-6 py-3 text-amber-800 font-medium">
                    {application.applicant ||
                      application.user?.name ||
                      "Unknown"}
                  </td>

                  <td className="px-6 py-3">
                    <select
                      value={application.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(e, application._id)
                      }
                      className="px-3 py-1 rounded-lg border border-amber-300 bg-amber-200 text-amber-900 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Interview">Interview</option>
                      <option value="Hired">Hired</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;