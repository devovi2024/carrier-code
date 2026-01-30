import { use } from 'react'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  TrendingUp, 
  FileText, 
  Building, 
  MapPin, 
  Calendar,
  Eye,
  Filter,
  Download,
  MoreVertical,
  Sparkles,
  BarChart3,
  Target,
  Award,
  RefreshCw,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'

const MyApplicationList = ({ promise }) => {
  const applications = use(promise)
  const [filter, setFilter] = useState('all')




  if (!applications || applications.length === 0) {
    return (
      <div className=" flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl">
        <div className="text-center max-w-md px-8 py-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 mb-6">
            <FileText className="w-12 h-12 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#6B2F12] mb-3">
            No Applications Yet
          </h3>
          <p className="text-amber-700/80 mb-8">
            Start your journey by applying to premium opportunities. Your next career move awaits.
          </p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Explore Jobs
          </Link>
        </div>
      </div>
    )
  }

  const filteredApplications = filter === 'all' 
    ? applications 
    : applications.filter(app => app.status === filter)

  return (
    <div className=" bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4 md:p-8 font-sans relative overflow-hidden">
      

      <div className="relative max-w-7xl mx-auto">
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B2F12] via-[#8C3B00] to-[#C47A2C]">
                My Applications
              </h1>
              <p className="text-amber-700/80 mt-2">Track and manage your applications</p>
            </div>

      
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applications List */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-white to-amber-50/80 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-xl shadow-amber-100/30 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-amber-200/30 p-6">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-5">
                    <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wider">Position & Company</h3>
                  </div>

                </div>
              </div>

              {/* Applications List */}
              <div className="divide-y divide-amber-100/50">
                {filteredApplications.map((app, index) => {
                
                  return (
                    <div 
                      key={app._id}
                      className="group relative p-6 hover:bg-amber-50/50 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedApp(app)}
                    >
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Company & Position */}
                        <div className="col-span-5">
                          <div className="flex items-center gap-4">
                            {/* Premium Logo Container */}
                            <div className="relative">
                              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                              <div className="relative w-14 h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
                                {app.company_logo ? (
                                  <img
                                    src={app.company_logo}
                                    alt={app.company}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    {app.company?.[0] || 'C'}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div>
                              <Link
                                to={`/jobs/${app.jobId}`}
                                className="font-bold text-[#6B2F12] hover:text-[#8C3B00] transition-colors line-clamp-1 group-hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {app.title || 'Position Not Available'}
                              </Link>
                              <div className="flex items-center gap-2 mt-1">
                                <Building className="w-3.5 h-3.5 text-amber-600" />
                                <span className="text-sm text-amber-700/80">{app.company}</span>
                              </div>
                            </div>
                          </div>
                        </div>

           

              

  
                      </div>

                  
                    </div>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 border-t border-amber-200/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-amber-700/80">
                    Showing <span className="font-semibold text-amber-800">{filteredApplications.length}</span> of{' '}
                    <span className="font-semibold text-amber-800">{applications.length}</span> applications
                  </div>
                  <button className="text-sm text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-6 px-8 py-6 bg-gradient-to-r from-white to-amber-50/50 rounded-2xl border border-amber-200/30 backdrop-blur-sm shadow-xl shadow-amber-200/30">
            <div>
              <h3 className="text-xl font-bold text-[#6B2F12] mb-2">Ready for your next opportunity?</h3>
              <p className="text-amber-700/80">Discover more premium positions tailored for you</p>
            </div>
            <Link
              to="/"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300"
            >
              Explore Jobs
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyApplicationList