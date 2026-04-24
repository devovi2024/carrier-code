import axios from "axios";

const BASE_URL = "https://carriercode-server.vercel.app";

export const jobsCreatedByPromise = (email) => {
  if (!email) return Promise.resolve([]);

  return axios
    .get(`${BASE_URL}/jobs/applications`, {
      params: { email },
    })
    .then((res) => res.data)
    .catch(() => {
      throw new Error("Failed to fetch jobs");
    });
};