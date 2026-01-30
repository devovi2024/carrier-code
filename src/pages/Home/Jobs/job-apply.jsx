import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { applyJob } from '../../../api/applicationApi'
import toast from 'react-hot-toast'
import {
  ArrowLeft,
  Upload,
  FileText,
  MapPin,
  Linkedin,
  Phone,
  User,
  CheckCircle,
  Briefcase,
  Send
} from 'lucide-react'

const JobApply = () => {
  const { id: jobId } = useParams()
  const { user } = useAuth()

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    linkedin: '',
    phone: '',
    coverLetter: ''
  })

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + 20
      })
    }, 100)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!user?.email) return toast.error('Please login first')

    setLoading(true)

    try {
      await applyJob({
        jobId,
        applicant: user.email,
        fullName: formData.fullName,
        location: formData.location,
        linkedin: formData.linkedin,
        phone: formData.phone,
        resume: resumeFile ? resumeFile.name : '',
        coverLetter: formData.coverLetter
      })

      toast.success('Application submitted')
      setStep(3)
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-4xl mx-auto">

        <Link
          to={`/jobs/${jobId}`}
          className="flex items-center gap-2 text-gray-800 font-medium mb-6"
        >
          <ArrowLeft size={18} />
          Back to job
        </Link>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <div className="flex items-center gap-3">
            <Briefcase className="text-amber-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Job Application
              </h1>
              <p className="text-sm text-gray-700">
                Please fill all required fields
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 space-y-6"
        >
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-gray-800">
                    Full Name *
                  </label>
                  <input
                    name="fullName"
                    required
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg text-gray-900 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800">
                    Location *
                  </label>
                  <input
                    name="location"
                    required
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg text-gray-900 placeholder-gray-500"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800">
                    LinkedIn
                  </label>
                  <input
                    name="linkedin"
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg text-gray-900 placeholder-gray-500"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800">
                    Phone
                  </label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border rounded-lg text-gray-900 placeholder-gray-500"
                    placeholder="+8801XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Resume / CV
                </label>

                <div
                  onClick={() => document.getElementById('resume').click()}
                  className="border-dashed border-2 p-6 text-center rounded-lg cursor-pointer text-gray-800"
                >
                  <Upload className="mx-auto text-amber-600 mb-2" />
                  <p className="text-sm font-medium">
                    Click to upload resume
                  </p>
                  <input
                    id="resume"
                    type="file"
                    hidden
                    onChange={e => {
                      setResumeFile(e.target.files[0])
                      simulateUpload()
                    }}
                  />
                </div>

                {uploadProgress === 100 && resumeFile && (
                  <p className="text-green-700 mt-2 font-medium text-sm">
                    ✔ {resumeFile.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  rows="5"
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border rounded-lg text-gray-900 placeholder-gray-500"
                  placeholder="Why should we hire you?"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border px-6 py-2 rounded-lg font-semibold text-gray-800"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                  <Send size={16} />
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="text-center py-10">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={60} />
              <h2 className="text-2xl font-bold text-gray-900">
                Application Submitted 🎉
              </h2>
              <p className="text-gray-700 mt-2">
                We will contact you soon
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default JobApply
