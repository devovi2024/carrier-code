import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { applyJob } from "../../../api/applicationApi";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Upload,
  Briefcase,
  Send,
  CheckCircle,
} from "lucide-react";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    linkedin: "",
    phone: "",
    coverLetter: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const simulateUpload = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 20;
      });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.email) return toast.error("Please login first");

    setLoading(true);

    try {
      await applyJob({
        jobId,
        applicant: user.email,
        fullName: formData.fullName,
        location: formData.location,
        linkedin: formData.linkedin,
        phone: formData.phone,
        resume: resumeFile ? resumeFile.name : "",
        coverLetter: formData.coverLetter,
      });

      toast.success("Application submitted");
      setStep(3);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400";

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* back */}
        <Link
          to={`/jobs/${jobId}`}
          className="flex items-center gap-2 text-gray-800 mb-6"
        >
          <ArrowLeft size={18} />
          Back to job
        </Link>

        {/* header */}
        <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center gap-3">
          <Briefcase className="text-amber-600" />
          <div>
            <h1 className="text-2xl font-bold">Job Application</h1>
            <p className="text-gray-600 text-sm">
              Fill all required fields
            </p>
          </div>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 space-y-6"
        >

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="grid md:grid-cols-2 gap-4">

                <input
                  name="fullName"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  name="location"
                  placeholder="Location"
                  required
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  name="linkedin"
                  placeholder="LinkedIn"
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              {/* resume */}
              <div>
                <label className="font-semibold text-sm">
                  Resume / CV
                </label>

                <div
                  onClick={() =>
                    document.getElementById("resume").click()
                  }
                  className="border-2 border-dashed p-6 text-center rounded-lg cursor-pointer"
                >
                  <Upload className="mx-auto text-amber-600" />
                  <p className="text-sm">Click to upload resume</p>

                  <input
                    id="resume"
                    type="file"
                    hidden
                    onChange={(e) => {
                      setResumeFile(e.target.files[0]);
                      simulateUpload();
                    }}
                  />
                </div>

                {uploadProgress === 100 && resumeFile && (
                  <p className="text-green-600 text-sm mt-2">
                    ✔ {resumeFile.name}
                  </p>
                )}
              </div>

              {/* cover letter */}
              <textarea
                name="coverLetter"
                placeholder="Cover Letter"
                rows="5"
                onChange={handleChange}
                className={inputClass}
              />

              {/* buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border px-6 py-2 rounded-lg"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  {loading ? "Submitting..." : "Submit"}
                  <Send size={16} />
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="text-center py-10">
              <CheckCircle
                className="mx-auto text-green-600"
                size={60}
              />
              <h2 className="text-2xl font-bold mt-4">
                Application Submitted 🎉
              </h2>
              <p className="text-gray-600">
                We will contact you soon
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApply;