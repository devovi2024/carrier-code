import React, { Suspense } from 'react'
import JobList from './joblist'
import { jobsCreatedByPromise } from '../../api/jobsAPi'
import useAuth from '../../hooks/useAuth'

const MyPostedJobs = () => {
  const { user } = useAuth()

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
    </Suspense>
  )
}

export default MyPostedJobs
