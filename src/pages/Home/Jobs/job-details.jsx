import { useState } from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { 
  MapPin, Clock, DollarSign, Building, Calendar, 
  Bookmark, Share2, Mail, Phone, ArrowLeft,
  CheckCircle, Briefcase, Users, Download
} from 'lucide-react'

const JobDetails = () => {
  const job = useLoaderData()
  const [saved, setSaved] = useState(false)

  // Format salary
  const formatSalary = (min, max) => {
    const formatter = new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(min)} - ${formatter.format(max)}`
  }

  // Format deadline
  const formatDeadline = (date) => {
    const deadline = new Date(date)
    const today = new Date()
    const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return { text: 'Expired', color: 'text-red-600' }
    if (diffDays === 0) return { text: 'Today', color: 'text-amber-600' }
    if (diffDays <= 3) return { text: `${diffDays} days left`, color: 'text-amber-600' }
    return { text: deadline.toLocaleDateString('en-BD', { day: 'numeric', month: 'long', year: 'numeric' }), color: 'text-gray-600' }
  }

  const deadlineInfo = formatDeadline(job.applicationDeadline)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/jobs"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <Link to={'/'}>Back to Jobs</Link>
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-lg ${saved ? 'text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
              </button>
              <Link
                to={`/jobApply/${job._id}`}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg bg-white border border-gray-200 p-2 shadow-sm">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {job.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-700">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{job.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.jobType}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Deadline</p>
                  <p className={`font-semibold ${deadlineInfo.color}`}>
                    {deadlineInfo.text}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Type</p>
                  <p className="font-semibold text-gray-900">{job.jobType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Category</p>
                  <p className="font-semibold text-gray-900">{job.category}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                </div>
                Job Description
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-8">
                  {job.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Requirements
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {job.requirements.map((req, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 rounded-lg border border-amber-200 font-medium"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {job.responsibilities.map((res, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-gray-700">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">HR Contact</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">HR Manager</p>
                  <p className="font-medium text-gray-900">{job.hr_name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </p>
                  <a 
                    href={`mailto:${job.hr_email}`}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {job.hr_email}
                  </a>
                </div>
                
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-medium rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                  Contact HR
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">Application Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Deadline:</span>
                  <span className="font-medium text-amber-900">{deadlineInfo.text}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Salary:</span>
                  <span className="font-medium text-amber-900">
                    {formatSalary(job.salaryRange.min, job.salaryRange.max, job.salaryRange.currency)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Job Type:</span>
                  <span className="font-medium text-amber-900">{job.jobType}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-amber-700">Location:</span>
                  <span className="font-medium text-amber-900">{job.location}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link
                  to={`/jobApply/${job._id}`}
                  className="block w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  Apply Now
                </Link>
                
                <button className="w-full py-3 bg-white text-amber-700 font-medium rounded-lg border border-amber-300 hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Save Job Details
                </button>
              </div>
            </div>


          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to apply?</h3>
              <p className="text-gray-600">Submit your application before the deadline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails