import { useNavigate } from "react-router-dom";

export function GoFront() {
  const navigate = useNavigate();
  return (
    <div className="front-page" onClick={() => navigate('/')}>Front Page</div>
  );
}

export function GoRankings() {
  const navigate = useNavigate();
  return (
    <div className="rankings-page" onClick={() => navigate('/rankings')}>Rankings</div>
  );
}

export function GoSearch() {
  const navigate = useNavigate();
  return (
    <div className="search-page" onClick={() => navigate('/search')}>Search</div>
  );
}
