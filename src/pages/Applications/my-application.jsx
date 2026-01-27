import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import { myApplicationsPromise } from '../../api/applicationApi'
import MyApplicationList from './my-application-list'

const MyApplication = () => {
  const { user } = useAuth()

  if (!user) {
    return <p className="text-center text-red-500 mt-6">Please login to view your applications.</p>
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Applications</h2>

      <Suspense
        fallback={
          <div className="flex justify-center my-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <MyApplicationList promise={myApplicationsPromise(user.email)} />
      </Suspense>
    </div>
  )
}

export default MyApplication
