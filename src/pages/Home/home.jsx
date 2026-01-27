import React, { Suspense } from 'react';
import HotJobs from './Jobs/hot-jobs';

async function fetchJobs() {
  const res = await fetch('http://localhost:4000/jobs');
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
}

const jobsPromise = fetchJobs();

function JobsComponent() {
  const jobs = React.use(jobsPromise);
  return <HotJobs jobs={jobs} />;
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading jobs...</p>}>
      <JobsComponent />
    </Suspense>
  );
}
