import axios from "axios";

const BASE_URL = "https://carriercode-server.vercel.app";

export const applyJob = (data) => {
  return axios
    .post(`${BASE_URL}/applications`, data)
    .then((res) => res.data);
};

export const myApplicationsPromise = (email) => {
  if (!email) return Promise.resolve([]);

  return axios
    .get(`${BASE_URL}/applications?email=${email}`)
    .then((res) => res.data);
};