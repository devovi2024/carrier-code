import React from 'react'
import JobCard from '../../Shared/job-card'

const HotJobs = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  )
}

export default HotJobs
