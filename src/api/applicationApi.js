const BASE_URL = "https://carriercode-server.vercel.app";

export const applyJob = (data) => {
  return fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to apply");
    return res.json();
  });
};

export const myApplicationsPromise = (email) => {
  if (!email) return Promise.resolve([]);

  return fetch(`${BASE_URL}/applications?email=${email}`).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch applications");
    return res.json();
  });
};