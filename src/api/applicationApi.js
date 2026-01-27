export const applyJob = (jobId, applicantEmail) => {
  return fetch('http://localhost:4000/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jobId, applicant: applicantEmail }),
  }).then(res => {
    if (!res.ok) throw new Error('Failed to apply for job')
    return res.json()
  })
}

export const myApplicationsPromise = email => {
  if (!email) return Promise.resolve([])
  return fetch(`http://localhost:4000/myApplications?email=${email}`)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch applications')
      return res.json()
    })
}
