import { BrowserRouter,Routes, Route } from "react-router-dom";

import './App.css';
import Front from './Front.jsx';
import Rankings from './Rankings.jsx'
import Search from './Search.jsx'

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
