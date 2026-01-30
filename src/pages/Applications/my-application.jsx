import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import { myApplicationsPromise } from '../../api/applicationApi'
import MyApplicationList from '../Applications/my-application-list'

const MyApplication = () => {
  const { user } = useAuth()

  if (!user) return <p>Please login</p>

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyApplicationList promise={myApplicationsPromise(user.email)} />
    </Suspense>
  )
}

export default MyApplication
