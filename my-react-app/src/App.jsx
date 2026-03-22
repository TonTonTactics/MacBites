import { BrowserRouter,Routes, Route } from "react-router-dom";

import './App.css';
import Front from './Front.jsx';
import Rankings from './Rankings.jsx';
import Search from './Search.jsx';
import {GoBite} from './Routes.jsx'
export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/top/:id" element={<GoBite />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
