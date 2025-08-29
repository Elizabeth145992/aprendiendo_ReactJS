import { useEffect, useState } from "react";
import { EVENTS } from "./const";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404 - Not Found</h1>}) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener(EVENTS.NAVIGATION, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.NAVIGATION, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  const Page = routes.find((route) => route.path === currentPage)?.component;

  return Page ? <Page /> : <DefaultComponent />;
}

function App() {
  return (
    <>
      <main>
        <Router routes={routes} />
      </main>
    </>
  );
}

export default App;
