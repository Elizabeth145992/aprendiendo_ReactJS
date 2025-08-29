import { Link } from "../link.jsx";

export default function NoFound() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <img
        src="https://c0.klipartz.com/pngpicture/814/922/gratis-png-de-adentro-hacia-fuera-tristeza-http-404-mensaje-de-error-servidores-de-la-computadora-del-navegador-web-pixar-thumbnail.png"
        alt="404 - Not Found"
      />
      <br />
      <Link to={'/'}>Go to Home</Link>
    </>
  );
}
