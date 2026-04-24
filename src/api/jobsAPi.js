const BASE_URL = "https://carriercode-server.vercel.app";

export const jobsCreatedByPromise = (email) => {
  if (!email) return Promise.resolve([]);

  return fetch(`${BASE_URL}/jobs/applications?email=${email}`).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch jobs");
    return res.json();
  });
};