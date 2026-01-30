export const jobsCreatedByPromise = (email) => {
  if (!email) return Promise.resolve([])

  return fetch(`http://localhost:4000/jobs/applications?email=${email}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch jobs')
      return res.json()
    })
}
