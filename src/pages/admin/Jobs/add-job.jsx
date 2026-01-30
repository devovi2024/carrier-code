import React from "react";
import { Edit3 } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { salaryMin, salaryMax, currency, ...newJob } = data;
    newJob.salaryRange = { min: salaryMin, max: salaryMax, currency };

    if (newJob.requirements) newJob.requirements = newJob.requirements.split(",").map(r => r.trim());
    if (newJob.responsibilities) newJob.responsibilities = newJob.responsibilities.split(",").map(r => r.trim());

    newJob.status = "active";

    axios.post("http://localhost:4000/jobs", newJob)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-50 p-4 md:p-6 lg:p-12 flex justify-center items-start lg:items-center">

      <div className="relative w-full max-w-4xl">
        <div className="rounded-3xl shadow-xl overflow-hidden border border-amber-200 bg-gradient-to-b from-yellow-100/80 to-yellow-50/80">
          <div className="p-6 md:p-10">

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl shadow-lg">
                <Edit3 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-serif font-bold text-amber-900">
                Add New Job
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="title"
                  placeholder="Job Title"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  name="company"
                  placeholder="Company Name"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  name="location"
                  placeholder="Location"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  name="company_logo"
                  placeholder="Company Logo URL"
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <select
                name="category"
                required
                className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <option value="">Select Job Category</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>

              <input
                type="date"
                name="deadline"
                required
                className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* Job Type */}
              <div className="flex gap-6 text-amber-900 font-medium">
                {["Remote", "Hybrid", "On-Site"].map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="jobType" value={type} required className="accent-amber-400" />
                    {type}
                  </label>
                ))}
              </div>

              {/* Salary */}
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  name="salaryMin"
                  placeholder="Min Salary"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  name="salaryMax"
                  placeholder="Max Salary"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  name="currency"
                  placeholder="Currency"
                  required
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <textarea
                name="description"
                placeholder="Job Description"
                required
                className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              <input
                name="requirements"
                placeholder="Requirements (comma separated)"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <input
                name="responsibilities"
                placeholder="Responsibilities (comma separated)"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />

              {/* HR */}
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  defaultValue={user?.email}
                  name="hr_email"
                  readOnly
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 cursor-not-allowed"
                />
                <input
                  name="hr_name"
                  placeholder="HR Name"
                  className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <button className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl shadow-md transition-colors">
                Add Job
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
