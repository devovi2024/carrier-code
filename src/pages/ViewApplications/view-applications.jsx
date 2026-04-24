import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "https://carriercode-server.vercel.app";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const [apps, setApps] = useState(applications || []);

  const isJobSpecific = Boolean(job_id);

  const handleStatusChange = (e, appId) => {
    const status = e.target.value;

    axios
      .patch(`${BASE_URL}/applications/${appId}`, { status })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Status Updated",
            timer: 1500,
            showConfirmButton: false,
            position: "top-end",
          });

          setApps((prev) =>
            prev.map((app) =>
              app._id === appId ? { ...app, status } : app
            )
          );
        }
      })
      .catch(() => {
        Swal.fire("Error", "Failed to update status", "error");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-200 to-orange-100 p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
          {isJobSpecific
            ? `Applications for Job: ${job_id}`
            : "All Applications"}
        </h1>

        <p className="text-sm text-amber-700 mb-6">
          Total Applications: {apps.length}
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto bg-amber-50 border border-amber-300 rounded-lg shadow">

          <table className="w-full">

            {/* HEAD */}
            <thead className="bg-amber-300 text-amber-900">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Applicant</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {apps.map((app, index) => (
                <tr
                  key={app._id}
                  className="border-b hover:bg-amber-100 transition"
                >

                  <td className="p-3 text-amber-800">
                    {index + 1}
                  </td>

                  <td className="p-3 font-medium text-amber-800">
                    {app.applicant || app.user?.name || "Unknown"}
                  </td>

                  <td className="p-3">

                    <select
                      value={app.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(e, app._id)
                      }
                      className="px-3 py-1 rounded-md border border-amber-300 bg-amber-100 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
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