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