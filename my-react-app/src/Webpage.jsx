import { GoFront, GoRankings, GoSearch } from './Routes.jsx'

export function Headnote() {

  return (
    <>
      <h1>MacBites</h1>
      <GoFront />
      <GoRankings />
      <GoSearch />
    </>
  );
}

export function Footnote() {

  return (
    <>
      <div> Created By: </div>
      <div>Tony</div>
      <div>Edward</div>
    </>
  );
}