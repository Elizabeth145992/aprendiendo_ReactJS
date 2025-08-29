import { Link } from '../link.jsx'

export default function Home() {
  return(
    <>
      <h1>Welcome to Eli Router</h1>
      <p>This is a simple router example using React.</p>
      <Link to={'/about'}>Go to About Page</Link>
    </>
  )
}