import {Headnote, Footnote} from './Webpage.jsx'

export default function Front() {

  return (
    <>
    <Headnote />
    <title>Macbites</title>
    <h1>Front Page</h1>
    <Featured />
    <Top />
    <Recent />
    <Footnote />
    </>
  );
}

export function Featured() {

  return (
    <>
    <div>
        <h2>Featured</h2>
        <p>Featured Item 1</p>
        <p>Featured Item 2</p>
        <p>Featured Item 3</p>
    </div>
    </>
  );
}

export function Top() {

  return (
    <>
      <h2>Top</h2>
      <p>Top Item 1</p>
      <p>Top Item 2</p>
      <p>Top Item 3</p>
    </>
  )
}

export function Recent() {

  return (
    <>
      <h2>Recent</h2>
      <p>Recent Item 1</p>
      <p>Recent Item 2</p>
      <p>Recent Item 3</p>
    </>
  )
}



