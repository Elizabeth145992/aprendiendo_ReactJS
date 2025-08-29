import { Link } from '../link.jsx'

export default function About() {
  return(
    <>
      <h1>About Eli Router</h1>
      <p>This project demonstrates a basic routing mechanism in React.</p>
      <img src="https://www.debate.com.mx/__export/1686665118823/sites/debate/img/2023/06/13/bts.jpg_346753400.jpg" 
      alt="BTS" /><br></br>
      <Link to={'/'}>Go to Home Page</Link>
    </>
  )
}