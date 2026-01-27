import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { applyJob } from '../../../api/applicationApi'
import toast from 'react-hot-toast'

const JobApply = () => {
  const { id: jobId } = useParams()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleApplyFormSubmit = async e => {
    e.preventDefault()
    if (!user) return toast.error('Please login first')

    setLoading(true)
    try {
      await applyJob(jobId, user.email)
      toast.success('Application submitted successfully')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <Link to={`/jobs/${jobId}`} className="text-blue-500 underline">
        View Job Details
      </Link>

      <form onSubmit={handleApplyFormSubmit} className="mt-4">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Applying...' : 'Apply'}
        </button>
      </form>
    </div>
  )
}

export default JobApply
