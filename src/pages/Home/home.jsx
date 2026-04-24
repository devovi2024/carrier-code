import { useEffect, useState } from "react";
import axios from "axios";
import HotJobs from "./Jobs/hot-jobs";
import Banner from "./banner";

const BASE_URL = "https://carriercode-server.vercel.app";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${BASE_URL}/jobs`);
        setJobs(res.data);
        setError(null);

      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong");

      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Banner />

      {loading && (
        <p className="text-center py-4">Loading jobs...</p>
      )}

      {error && (
        <p className="text-center text-red-500 py-4">
          {error}
        </p>
      )}

      {!loading && !error && <HotJobs jobs={jobs} />}
    </div>
  );
}