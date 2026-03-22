import { useEffect, useState } from "react";

export function FetchRankings({ rank }) {
  const [bite, setBite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBite() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/ranked-bites/${rank}`
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setBite(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load ranking");
      } finally {
        setLoading(false);
      }
    }

    if (rank) {
      loadBite();
    }
  }, [rank]);

  if (!rank) return <p>No rank provided</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!bite) return <p>Rank not found</p>;

  return (
    <div>
      <p>Rank #{rank}</p>
      <p>{bite.name}</p>
      <p>{bite.rating} Upvotes</p>
    </div>
  );
}

export function FetchRecent({ index }) {
  const [bite, setBite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadRecent() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/recent-bites/${index}`
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setBite(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load recent bite");
      } finally {
        setLoading(false);
      }
    }

    if (index !== undefined) {
      loadRecent();
    }
  }, [index]);

  if (index === undefined) return <p>No index provided</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!bite) return <p>No data found</p>;

  return (
    <div>
      <p>#{index + 1} Most Recent</p>
      <p>{bite.name}</p>
      <p>{bite.created_at}</p>
    </div>
  );
}