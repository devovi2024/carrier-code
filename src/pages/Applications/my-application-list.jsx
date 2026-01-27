import { use } from 'react'

const MyApplicationList = ({ promise }) => {
  const applications = use(promise)

  if (!applications || applications.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        You have not applied for any jobs yet.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app._id}>
              <td>{index + 1}</td>
              <td className="flex items-center gap-2">
                {app.company_logo && (
                  <img
                    src={app.company_logo}
                    className="w-8 h-8 rounded"
                    alt={app.company}
                  />
                )}
                {app.company || '—'}
              </td>
              <td>{app.title || '—'}</td>
              <td>{app.location || '—'}</td>
              <td>
                <span className="badge badge-info">
                  {app.status || 'Applied'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyApplicationList
