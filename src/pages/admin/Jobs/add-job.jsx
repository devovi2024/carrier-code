import React from "react";
import { Edit3 } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "https://carriercode-server.vercel.app";

const AddJob = () => {
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // salary structure
    const { salaryMin, salaryMax, currency, ...newJob } = data;

    newJob.salaryRange = {
      min: salaryMin,
      max: salaryMax,
      currency,
    };

    // convert comma separated to array
    newJob.requirements = newJob.requirements
      ? newJob.requirements.split(",").map((r) => r.trim())
      : [];

    newJob.responsibilities = newJob.responsibilities
      ? newJob.responsibilities.split(",").map((r) => r.trim())
      : [];

    newJob.status = "active";

    try {
      const res = await axios.post(`${BASE_URL}/jobs`, newJob);

      if (res.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
      }
    } catch (error) {
      console.error("Job create error:", error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Job not created",
      });
    }
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
                <input name="title" placeholder="Job Title" required className="input" />
                <input name="company" placeholder="Company Name" required className="input" />
                <input name="location" placeholder="Location" required className="input" />
                <input name="company_logo" placeholder="Company Logo URL" className="input" />
              </div>

              <select name="category" required className="input">
                <option value="">Select Job Category</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>

              <input type="date" name="deadline" required className="input" />

              <div className="flex gap-6 text-amber-900 font-medium">
                {["Remote", "Hybrid", "On-Site"].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input type="radio" name="jobType" value={type} required />
                    {type}
                  </label>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <input name="salaryMin" placeholder="Min Salary" required className="input" />
                <input name="salaryMax" placeholder="Max Salary" required className="input" />
                <input name="currency" placeholder="Currency" required className="input" />
              </div>

              <textarea name="description" placeholder="Job Description" required className="input" />

              <input name="requirements" placeholder="Requirements (comma separated)" className="input" />

              <input name="responsibilities" placeholder="Responsibilities (comma separated)" className="input" />

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  defaultValue={user?.email}
                  name="hr_email"
                  readOnly
                  className="input cursor-not-allowed"
                />
                <input name="hr_name" placeholder="HR Name" className="input" />
              </div>

              <button className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-xl shadow-md">
                Add Job
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* small reusable style */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #f3d19c;
          background: #fff7ed;
          color: #7c2d12;
          outline: none;
        }
        .input:focus {
          border-color: #f59e0b;
          box-shadow: 0 0 0 2px #fde68a;
        }
      `}</style>
    </div>
  );
};

export default AddJob;