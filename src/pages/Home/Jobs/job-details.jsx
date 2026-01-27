import { useLoaderData, Link } from 'react-router-dom'

const JobDetails = () => {
  const job = useLoaderData()

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body gap-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-16 h-16 rounded"
            />
            <div>
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-sm">{job.location} · {job.jobType}</p>
            </div>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold">Category</p>
              <p>{job.category}</p>
            </div>
            <div>
              <p className="font-semibold">Deadline</p>
              <p>{job.applicationDeadline}</p>
            </div>
            <div>
              <p className="font-semibold">Salary</p>
              <p>
                {job.salaryRange.min} - {job.salaryRange.max}{' '}
                {job.salaryRange.currency.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="font-semibold">Status</p>
              <span className="badge badge-success">{job.status}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-1">Job Description</h3>
            <p className="text-gray-600">{job.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-semibold mb-1">Requirements</h3>
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, i) => (
                <span key={i} className="badge badge-outline">
                  {req}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="font-semibold mb-1">Responsibilities</h3>
            <ul className="list-disc ml-6 text-gray-600">
              {job.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>

          {/* HR Info */}
          <div className="bg-base-200 p-4 rounded">
            <p><span className="font-semibold">HR Name:</span> {job.hr_name}</p>
            <p><span className="font-semibold">HR Email:</span> {job.hr_email}</p>
          </div>

          {/* Action */}
          <div className="card-actions justify-end">
            <Link
              to={`/jobApply/${job._id}`}
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default JobDetails
