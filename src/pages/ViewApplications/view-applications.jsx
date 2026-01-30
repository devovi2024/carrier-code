import React from "react";
import { useLoaderData, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);

    axios
      .patch(`http://localhost:4000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-b from-amber-100 via-amber-200 to-orange-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
          Applications for Job: <span className="text-orange-600">{job_id}</span>
        </h1>
        <p className="text-sm text-amber-700 mb-4">
          Total Applications: {applications.length}
        </p>

        <div className="overflow-x-auto rounded-lg shadow-md border border-amber-300 bg-amber-50">
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-amber-300 to-orange-300 text-amber-900">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">#</th>
                <th className="px-6 py-3 text-left font-semibold">Applicant</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, idx) => (
                <tr
                  key={application._id}
                  className="border-b border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  <td className="px-6 py-3 text-amber-800">{idx + 1}</td>
                  <td className="px-6 py-3 text-amber-800 font-medium">
                    {application.applicant || application.user?.name || "Unknown"}
                  </td>
                  <td className="px-6 py-3">
                    <select
                      defaultValue={application.status}
                      onChange={(e) =>
                        handleStatusChange(e, application._id)
                      }
                      className="px-3 py-1 rounded-lg border border-amber-300 bg-amber-200 text-amber-900 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    >
                      <option disabled>Update Status</option>
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
